// Line-halftone renderer (WebGL2).
//
// Each layer is a textured quad. The quad is split into a grid of cells; every cell
// samples the source at its centre and draws a vertical bar whose width grows with
// darkness. Transparent (or, with mask: "luma", black) pixels are dropped, so layers
// stack like cut-outs: a sky video with clouds on black, mountains as a PNG, etc.

export type Source = HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;

/** Mutable on purpose: animate these fields directly with GSAP. */
export type LayerConfig = {
  /** Position/size as fractions of the canvas (0..1). x/y may go outside for parallax. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Input levels (0..1): values below black → full ink, above white → no ink. */
  black: number;
  white: number;
  gamma: number;
  /** Bar width at white / black, as a fraction of the cell width. */
  minBar: number;
  maxBar: number;
  /** "alpha" = cut out transparent pixels, "luma" = cut out black (for videos without alpha). */
  mask: "alpha" | "luma";
  /** Mask value below which pixels are dropped. Raise it to trim soft edges (e.g. clouds). */
  cutoff: number;
  invert: boolean;
  /** Fill non-ink parts of the layer with paper so it hides layers underneath. */
  occlude: boolean;
  /** Ignore `h` and derive it from the source's aspect ratio (no stretching). */
  keepAspect: boolean;
  /** 0 = `y` is the top edge, 1 = `y` is the bottom edge (handy for things standing on the ground). */
  anchorY: number;
  /** Mirror the source horizontally. */
  flipX: boolean;
};

export type Layer = { source: Source; config: LayerConfig };

export const defaultLayer: Omit<LayerConfig, "x" | "y" | "w" | "h"> = {
  black: 0,
  white: 1,
  gamma: 1,
  minBar: 0,
  maxBar: 1,
  mask: "alpha",
  cutoff: 0.04,
  invert: false,
  occlude: true,
  keepAspect: true,
  anchorY: 0,
  flipX: false,
};

const VERT = `#version 300 es
in vec2 a_unit;
uniform vec4 u_rect;     // x, y, w, h in device px, top-left origin
uniform vec2 u_canvas;
out vec2 v_uv;
void main() {
  vec2 px = u_rect.xy + a_unit * u_rect.zw;
  vec2 clip = px / u_canvas * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  v_uv = a_unit;
}`;

const FRAG = `#version 300 es
precision highp float; // must match the vertex shader (shared u_rect), and px math needs it
in vec2 v_uv;
uniform sampler2D u_tex;
uniform vec4 u_rect;
uniform vec2 u_origin;   // grid origin in device px, shared by all layers so bars line up
uniform vec2 u_cell;     // cell size in device px
uniform vec2 u_levels;   // black, white
uniform float u_gamma;
uniform vec2 u_bar;      // min, max
uniform int u_mask;      // 0 alpha, 1 luma
uniform float u_cutoff;
uniform bool u_invert;
uniform bool u_occlude;
uniform bool u_flip;
uniform vec3 u_ink;
uniform vec3 u_paper;
out vec4 outColor;

void main() {
  vec2 px = u_rect.xy + v_uv * u_rect.zw;            // absolute device px
  vec2 cell = floor((px - u_origin) / u_cell);
  vec2 centre = u_origin + (cell + 0.5) * u_cell;
  vec2 uv = (centre - u_rect.xy) / u_rect.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) discard;

  vec4 c = texture(u_tex, u_flip ? vec2(1.0 - uv.x, uv.y) : uv);
  float key = u_mask == 1 ? max(c.r, max(c.g, c.b)) : c.a;
  if (key < u_cutoff) discard;

  float lum = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
  lum = clamp((lum - u_levels.x) / max(u_levels.y - u_levels.x, 0.001), 0.0, 1.0);
  lum = pow(lum, u_gamma);
  if (u_invert) lum = 1.0 - lum;

  float width = mix(u_bar.x, u_bar.y, 1.0 - lum);
  float offset = abs((px.x - centre.x) / u_cell.x);
  if (offset <= width * 0.5) outColor = vec4(u_ink, 1.0);
  else if (u_occlude) outColor = vec4(u_paper, 1.0);
  else discard;
}`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? [...h].map((c) => c + c).join("") : h.slice(0, 6);
  const n = parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function sourceSize(s: Source): [number, number] {
  if (s instanceof HTMLVideoElement) return [s.videoWidth, s.videoHeight];
  if (s instanceof HTMLImageElement) return [s.naturalWidth, s.naturalHeight];
  return [s.width, s.height];
}

function isReady(s: Source) {
  if (s instanceof HTMLVideoElement) return s.readyState >= 2;
  if (s instanceof HTMLImageElement) return s.complete && s.naturalWidth > 0;
  return s.width > 0;
}

export class HalftoneRenderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private vao: WebGLVertexArrayObject;
  private uniforms: Record<string, WebGLUniformLocation | null> = {};
  private textures = new Map<Source, { tex: WebGLTexture; uploaded: boolean }>();

  layers: Layer[] = [];
  /** Cell size in CSS px. */
  cell = { w: 7, h: 5 };
  ink: [number, number, number] = [0, 0, 0];
  paper: [number, number, number] = [1, 1, 1];
  /** Clear to transparent instead of paper, so the page background shows through. */
  transparent = false;

  constructor(private canvas: HTMLCanvasElement) {
    const gl = canvas.getContext("webgl2", { antialias: false, premultipliedAlpha: false });
    if (!gl) throw new Error("WebGL2 not supported");
    this.gl = gl;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader");
      return sh;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) ?? "link");
    this.program = program;

    for (const name of [
      "u_rect", "u_canvas", "u_tex", "u_origin", "u_cell", "u_levels", "u_gamma",
      "u_bar", "u_mask", "u_cutoff", "u_flip", "u_invert", "u_occlude", "u_ink", "u_paper",
    ]) {
      this.uniforms[name] = gl.getUniformLocation(program, name);
    }

    this.vao = gl.createVertexArray()!;
    gl.bindVertexArray(this.vao);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "a_unit");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  }

  setColors(ink: string, paper: string) {
    this.ink = hexToRgb(ink);
    this.paper = hexToRgb(paper);
  }

  resize(cssW: number, cssH: number, dpr: number) {
    this.canvas.width = Math.max(1, Math.round(cssW * dpr));
    this.canvas.height = Math.max(1, Math.round(cssH * dpr));
  }

  private texture(source: Source) {
    const gl = this.gl;
    let entry = this.textures.get(source);
    if (!entry) {
      const tex = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      entry = { tex, uploaded: false };
      this.textures.set(source, entry);
    }
    gl.bindTexture(gl.TEXTURE_2D, entry.tex);
    // Videos change every frame; images and canvases only need one upload.
    if (isReady(source) && (!entry.uploaded || source instanceof HTMLVideoElement)) {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      entry.uploaded = true;
    }
    return entry.uploaded;
  }

  render(dpr: number) {
    const gl = this.gl;
    const { width: W, height: H } = this.canvas;
    const u = this.uniforms;
    gl.viewport(0, 0, W, H);
    if (this.transparent) gl.clearColor(0, 0, 0, 0);
    else gl.clearColor(...this.paper, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.program);
    gl.bindVertexArray(this.vao);
    gl.uniform2f(u.u_canvas, W, H);
    gl.uniform2f(u.u_origin, 0, 0);
    gl.uniform2f(u.u_cell, this.cell.w * dpr, this.cell.h * dpr);
    gl.uniform3f(u.u_ink, ...this.ink);
    gl.uniform3f(u.u_paper, ...this.paper);
    gl.uniform1i(u.u_tex, 0);
    gl.activeTexture(gl.TEXTURE0);

    for (const { source, config: c } of this.layers) {
      if (!this.texture(source)) continue;
      const w = c.w * W;
      let h = c.h * H;
      if (c.keepAspect) {
        const [sw, sh] = sourceSize(source);
        if (sw > 0) h = (w * sh) / sw;
      }
      const y = c.y * H - h * c.anchorY;
      gl.uniform4f(u.u_rect, c.x * W, y, w, h);
      gl.uniform2f(u.u_levels, c.black, c.white);
      gl.uniform1f(u.u_gamma, c.gamma);
      gl.uniform2f(u.u_bar, c.minBar, c.maxBar);
      gl.uniform1i(u.u_mask, c.mask === "luma" ? 1 : 0);
      gl.uniform1f(u.u_cutoff, c.cutoff);
      gl.uniform1i(u.u_invert, c.invert ? 1 : 0);
      gl.uniform1i(u.u_occlude, c.occlude ? 1 : 0);
      gl.uniform1i(u.u_flip, c.flipX ? 1 : 0);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
  }

  destroy() {
    for (const { tex } of this.textures.values()) this.gl.deleteTexture(tex);
    this.textures.clear();
    this.gl.deleteProgram(this.program);
  }
}
