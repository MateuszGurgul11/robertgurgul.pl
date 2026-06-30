"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

interface GoldBarsCanvasProps {
  className?: string;
  barCount?: number;
  /** Controlled progress (0-1) — e.g. a loading percentage. Omit to let the
   * component drive itself from the scroll position of its own wrapper
   * (or `triggerRef`, if given). */
  progress?: number;
  /** Use this element's scroll range instead of the canvas's own wrapper —
   * needed when the canvas sits inside a pinned/sticky section that never
   * itself scrolls past the viewport. */
  triggerRef?: React.RefObject<HTMLElement | null>;
  colorFrom?: string;
  colorTo?: string;
}

export function GoldBarsCanvas({
  className,
  barCount = 32,
  progress,
  triggerRef,
  colorFrom = "#8C7857",
  colorTo = "#DCD2C0",
}: GoldBarsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(progress ?? 0);

  useEffect(() => {
    if (progress !== undefined) progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrapper || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    function resize() {
      const rect = wrapper!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    // Stable pseudo-random per-bar height profile so bars don't reshuffle on re-render.
    const seeds = Array.from(
      { length: barCount },
      (_, i) => 0.35 + 0.65 * Math.abs(Math.sin(i * 12.9898 + 4.1414))
    );
    const reduceMotion = prefersReducedMotion();
    let t = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const gap = width / barCount;
      const barWidth = gap * 0.45;
      const p = progressRef.current;

      const gradient = ctx!.createLinearGradient(0, height, 0, 0);
      gradient.addColorStop(0, colorFrom);
      gradient.addColorStop(1, colorTo);
      ctx!.fillStyle = gradient;

      for (let i = 0; i < barCount; i++) {
        const wave = reduceMotion ? 0 : Math.sin(t * 0.6 + i * 0.45) * 0.08;
        const h = Math.max(0, Math.min(1, seeds[i] * p + wave)) * height;
        const x = i * gap + (gap - barWidth) / 2;
        ctx!.fillRect(x, height - h, barWidth, h);
      }

      if (!reduceMotion) t += 0.02;
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [barCount, colorFrom, colorTo]);

  // Self-driven scroll progress when no controlled `progress` prop is given.
  useEffect(() => {
    if (progress !== undefined) return;
    const target = triggerRef?.current ?? wrapperRef.current;
    if (!target || prefersReducedMotion()) return;

    const trigger = ScrollTrigger.create({
      trigger: target,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, [progress, triggerRef]);

  return (
    <div ref={wrapperRef} className={className}>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
