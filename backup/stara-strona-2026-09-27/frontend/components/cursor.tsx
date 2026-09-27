"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const INTERACTIVE_SELECTOR = "a, button, [data-cursor-hover]";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!supportsHover || prefersReducedMotion()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-none-desktop");

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });

    function onMove(e: MouseEvent) {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    }

    function onPointerOver(e: PointerEvent) {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 1.8, duration: 0.25 });
      }
    }
    function onPointerOut(e: PointerEvent) {
      if ((e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR)) {
        gsap.to(ring, { scale: 1, duration: 0.25 });
      }
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      document.body.classList.remove("cursor-none-desktop");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold mix-blend-difference lg:block"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[200] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/70 mix-blend-difference lg:block"
        aria-hidden="true"
      />
    </>
  );
}
