"use client";

import { useEffect, useMemo, useRef } from "react";
import { VerticalHalftoneSilhouette, forestProfile } from "@/components/pixel-silhouette";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Invisible film connector between the Hero and the QuoteSection.
 *
 * The trick (lifted from the sondaven.com hero study): a transition reads as
 * seamless not because of rounded cards or slides, but because whatever is
 * revealed at each edge is *already the colour of the neighbour*. So the sepia
 * farm film is full-bleed, and two colour-matched cross-fades sit on top of it:
 *
 *   • top  → `--gold` (#a89474), the Hero's own background — the film appears to
 *            bloom straight out of the hero's warm beige, with no visible edge;
 *   • bottom → `--navy-deep` (#2c2824), the QuoteSection's background — the film
 *            dissolves into the quote with no visible edge.
 *
 * The middle of the frame is the untouched sepia film (no scrim, no recolour).
 * Lenis momentum + a scrubbed parallax give the sondaven "weight"; there is no
 * card chrome (rounded top / shadow / slide-over) — that chrome was the seam.
 */
const VIDEO_SOURCES = [{ src: "/hero/connector.mp4", type: "video/mp4" }];

export function HalftoneBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const forestData = useMemo(() => forestProfile(40, 6, 14), []);

  useEffect(() => {
    const video = videoRef.current;
    const reduce = prefersReducedMotion();

    if (video && !reduce) video.play().catch(() => {});
    if (reduce || !sectionRef.current || !video) return;

    const ctx = gsap.context(() => {
      // Scrubbed parallax with a touch of inertia (scrub:1) — the film drifts
      // a little slower than the page, the way the sondaven hero "lags" scroll.
      gsap.fromTo(
        video,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
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
      aria-label="Film z fermy łączący sekcje"
      className="relative z-20 -mt-px h-[88vh] min-h-[28rem] overflow-hidden bg-navy-deep"
    >
      {/* The sepia film — over-tall so the parallax never exposes its edges. */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-x-0 top-[-8%] h-[116%] w-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero/connector.jpg"
        aria-hidden="true"
      >
        {VIDEO_SOURCES.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </video>

      {/* Top cross-fade — the Hero's beige bleeds down into the film. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-gold via-gold/55 to-transparent"
        aria-hidden="true"
      />
      {/* Bottom cross-fade — the film dissolves into the QuoteSection's navy. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent"
        aria-hidden="true"
      />

      {/* Corner halftone groves — echo the QuoteSection motif so the film hands
          off into the quote as one continuous dark world. */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-10 text-gold/25"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette profile={forestData} className="h-20 w-auto sm:h-28" />
      </div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 z-10 -scale-x-100 text-gold/25"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette profile={forestData} className="h-20 w-auto sm:h-28" />
      </div>
    </section>
  );
}
