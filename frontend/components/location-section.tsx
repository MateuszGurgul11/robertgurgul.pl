"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { VerticalHalftoneSilhouette, mountainProfile } from "@/components/pixel-silhouette";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

const ADDRESS = "Verkap Plus, Wolica Kozia 48, 63-040 Nowe Miasto nad Wartą";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS
)}`;

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mountainData = useMemo(() => mountainProfile(20, 9, 2), []);

  useEffect(() => {
    if (prefersReducedMotion() || !frameRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        { scale: 1.08, yPercent: -4 },
        {
          scale: 1,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy-deep bg-dot-grid py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 text-gold/10"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette
          profile={mountainData}
          className="h-24 w-auto sm:h-32"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-6">
              <SectionHeader
                eyebrow="Odwiedź mnie"
                title="Lokalizacja"
                align="left"
                tone="dark"
              />
              <p className="max-w-md text-base leading-relaxed text-slate-muted">
                Spotkajmy się na miejscu — obejrzę fermę i porozmawiamy o
                planie działania bez zobowiązań.
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-heading text-lg font-semibold text-offwhite">
                  Verkap Plus
                </p>
                <p className="text-sm text-slate-muted">
                  Wolica Kozia 48, 63-040 Nowe Miasto nad Wartą
                </p>
              </div>
              <Link
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 font-heading text-sm font-semibold text-gold-light transition-colors duration-200 hover:bg-gold/10"
              >
                <Compass className="h-4 w-4" />
                Wyznacz trasę
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              ref={frameRef}
              className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 p-1.5 shadow-2xl shadow-navy-deepest/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] sm:aspect-[16/10]">
                <iframe
                  title="Mapa — lokalizacja Verkap Plus, Wolica Kozia 48"
                  src={MAP_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[15%]"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_20px_rgba(21,18,15,0.55)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
