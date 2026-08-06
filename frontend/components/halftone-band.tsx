"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { VerticalHalftoneSilhouette, forestProfile } from "@/components/pixel-silhouette";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { killScrollTriggersIn } from "@/lib/kill-scroll-triggers";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * Film connector between Hero and QuoteSection.
 * Mobile: static poster only (no ~43 MB download).
 * Desktop: mount video when the section enters the viewport.
 */
const VIDEO_SRC = "/hero/connector.mp4";
const POSTER_SRC = "/hero/connector.jpg";

export function HalftoneBand() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const forestData = useMemo(() => forestProfile(40, 6, 14), []);

  // Desktop: start downloading the heavy MP4 only when near/in viewport.
  useEffect(() => {
    if (isMobile || !sectionRef.current) return;

    const el = sectionRef.current;
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
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const media = videoRef.current;
    const reduce = prefersReducedMotion();

    if (media && !reduce) media.play().catch(() => {});
    if (reduce || !sectionRef.current || !media) return;

    const target = media;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
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
      {isMobile || !loadVideo ? (
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
          preload="none"
          poster={POSTER_SRC}
          aria-hidden="true"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
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
