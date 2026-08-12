"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { VerticalHalftoneSilhouette, forestProfile } from "@/components/pixel-silhouette";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { killScrollTriggersIn } from "@/lib/kill-scroll-triggers";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * Film connector between Hero and QuoteSection.
 * Poster shows immediately; video mounts when the section nears the viewport.
 * Scrub parallax only on desktop.
 */
const VIDEO_SOURCES = [
  { src: "/hero/connector.mp4", type: "video/mp4" },
  { src: "/hero/connector.webm", type: "video/webm" },
];
const POSTER_SRC = "/hero/connector.jpg";

export function HalftoneBand() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const forestData = useMemo(() => forestProfile(40, 6, 14), []);

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

    const media = videoRef.current;
    if (!media) return;

    const reduce = prefersReducedMotion();
    if (!reduce) {
      media.play().catch(() => {});
    }

    if (isMobile || reduce || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        media,
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
      aria-label="Film z fermy łączący sekcje"
      className="relative z-20 -mt-px h-[70vh] min-h-[22rem] overflow-hidden bg-navy-deep md:h-[88vh] md:min-h-[28rem]"
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
          ref={videoRef}
          className="pointer-events-none absolute inset-x-0 top-[-8%] h-[116%] w-full object-cover"
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

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-gold via-gold/55 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent"
        aria-hidden="true"
      />

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
