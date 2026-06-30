"use client";

import { useEffect, useMemo, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { VerticalHalftoneSilhouette, forestProfile } from "@/components/pixel-silhouette";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const QUOTE = "Drób nie wybacza przypadkowych decyzji — od lat pomagam fermom ich nie podejmować.";

export function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const forestData = useMemo(() => forestProfile(40, 6, 14), []);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { yPercent: 6 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-30 -mt-10 overflow-hidden rounded-t-[2.5rem] bg-navy-deep py-24 shadow-[0_-50px_80px_-30px_rgba(0,0,0,0.5)] sm:-mt-14 sm:rounded-t-[3.5rem] sm:py-28 lg:-mt-20"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 text-gold/25"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette profile={forestData} className="h-24 w-auto sm:h-32" />
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 -scale-x-100 text-gold/25"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette profile={forestData} className="h-24 w-auto sm:h-32" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <blockquote className="font-heading text-[clamp(1.6rem,4vw,2.75rem)] leading-snug font-semibold text-offwhite">
            „{QUOTE}”
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.22em] text-gold-light">
            Robert Gurgul
          </p>
        </Reveal>
      </div>
    </section>
  );
}
