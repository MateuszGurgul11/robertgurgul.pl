// Media loaders for halftone layers. Layers draw as soon as their source is ready.

export function image(src: string) {
  const img = new Image();
  img.decoding = "async";
  img.src = src;
  return img;
}

/** Muted, looping, inline video (autoplay-safe on iOS). Paused/played by HalftoneCanvas on visibility. */
export function video(src: string) {
  const v = document.createElement("video");
  v.src = src;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.preload = "auto";
  v.setAttribute("muted", "");
  v.setAttribute("playsinline", "");
  return v;
}
