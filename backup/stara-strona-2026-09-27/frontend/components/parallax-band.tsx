"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { killScrollTriggersIn } from "@/lib/kill-scroll-triggers";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * Full-bleed film divider (was a still parallax photo). Poster first; video
 * mounts near the viewport. Soft scrub parallax on desktop only. Statement
 * overlay kept from the previous band.
 */
const VIDEO_SOURCES = [
  { src: "/hero/connector.mp4", type: "video/mp4" },
  { src: "/hero/connector.webm", type: "video/webm" },
];
const POSTER_SRC = "/hero/connector.jpg";

export function ParallaxBand() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadVideo) return;

    const media = mediaRef.current;
    if (!media) return;

    const reduce = prefersReducedMotion();
    if (!reduce) {
      media.play().catch(() => {});
    }

    if (isMobile || reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        media,
        { yPercent: -10 },
        {
          yPercent: 10,
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
    return () => {
      killScrollTriggersIn(sectionRef.current);
      try {
        ctx.revert();
      } catch {
        /* soft-nav race */
      }
    };
  }, [isMobile, loadVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[58vh] min-h-[22rem] items-center overflow-hidden bg-navy-deepest md:h-[70vh]"
      aria-label="Doradztwo zootechniczne w terenie"
    >
      {!loadVideo ? (
        <Image
          src={POSTER_SRC}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover"
          loading="lazy"
        />
      ) : (
        <video
          ref={mediaRef}
          className="pointer-events-none absolute inset-x-0 top-[-10%] h-[120%] w-full object-cover"
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          poster={POSTER_SRC}
          aria-hidden="true"
        >
          {VIDEO_SOURCES.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 bg-navy-deepest/45" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deepest/80 via-navy-deepest/25 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">
            <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
            W terenie, nie w teorii
          </span>
          <p className="mt-5 font-heading text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.08] text-offwhite drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]">
            Decyzje podejmowane{" "}
            <span className="text-gold-light">przy stadzie</span> - nie nad
            katalogiem.
          </p>
        </div>
      </div>
    </section>
  );
}
