"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Full-bleed parallax divider. The image layer is taller than the frame and
 * drifts vertically against scroll (GSAP ScrollTrigger + scrub, so it stays in
 * sync with the Lenis smooth-scroll proxy — `background-attachment: fixed`
 * fights smooth scroll and is dropped on mobile). A short statement rides on top.
 *
 * Reduced motion: the image is simply centred and static.
 */
export function ParallaxBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[58vh] min-h-[22rem] items-center overflow-hidden bg-navy-deepest"
      aria-label="Doradztwo zootechniczne w terenie"
    >
      {/* Parallax image layer — over-tall so it can drift without exposing edges. */}
      <img
        ref={imageRef}
        src="/hero/ferma-band.jpg"
        alt="Ferma drobiu — kurniki, silosy paszowe i droga technologiczna"
        className="pointer-events-none absolute inset-x-0 top-[-12%] h-[124%] w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Scrims — tie the photo into the surrounding dark sections, hold legibility. */}
      <div className="pointer-events-none absolute inset-0 bg-navy-deepest/55" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deepest/85 via-navy-deepest/30 to-transparent"
        aria-hidden="true"
      />

      {/* Statement. */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
            W terenie, nie w teorii
          </span>
          <p className="mt-5 font-heading text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.08] text-offwhite drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
            Decyzje podejmowane{" "}
            <span className="text-gold-light">przy stadzie</span> — nie nad
            katalogiem.
          </p>
        </div>
      </div>
    </section>
  );
}
