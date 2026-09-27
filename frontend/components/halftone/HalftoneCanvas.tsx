"use client";

import { useEffect, useRef } from "react";
import { HalftoneRenderer, type Layer } from "./renderer";

type Props = {
  /** Built once on mount (sources need the DOM). Keep the returned configs to animate them. */
  createLayers: () => Layer[];
  ink: string;
  paper: string;
  cell?: { w: number; h: number };
  /** Let the page background show through (no paper fill behind the layers). */
  transparent?: boolean;
  className?: string;
  onReady?: (layers: Layer[]) => void | (() => void);
};

const MAX_DPR = 1.5;

export function HalftoneCanvas({ createLayers, ink, paper, cell, transparent, className, onReady }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let renderer: HalftoneRenderer;
    try {
      renderer = new HalftoneRenderer(canvas);
    } catch (err) {
      // No WebGL2 (or shader error): the paper-coloured background stays, content is unaffected.
      console.warn("[halftone]", err);
      return;
    }
    renderer.setColors(ink, paper);
    if (cell) renderer.cell = cell;
    renderer.transparent = !!transparent;
    renderer.layers = createLayers();
    const cleanup = onReady?.(renderer.layers);

    const dpr = () => Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const fit = () => renderer.resize(canvas.clientWidth, canvas.clientHeight, dpr());
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    fit();

    // Draw only while on screen.
    let visible = false;
    let frame = 0;
    const loop = () => {
      renderer.render(dpr());
      if (visible) frame = requestAnimationFrame(loop);
    };
    const videos = renderer.layers
      .map((l) => l.source)
      .filter((s): s is HTMLVideoElement => s instanceof HTMLVideoElement);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      for (const v of videos) {
        if (visible) v.play().catch(() => {});
        else v.pause();
      }
      if (visible) frame = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      for (const v of videos) {
        v.pause();
        v.removeAttribute("src");
        v.load();
      }
      ro.disconnect();
      if (typeof cleanup === "function") cleanup();
      renderer.destroy();
    };
    // Layers are created once; colours/cell are static for a given scene.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className}
      style={transparent ? undefined : { background: paper }}
    />
  );
}
