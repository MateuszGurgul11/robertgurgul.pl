"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroIllustration } from "@/components/illustrations";
import {
  VerticalHalftoneSilhouette,
  mountainProfile,
  treeProfile,
} from "@/components/pixel-silhouette";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Scroll-scrubbed hero. The section is *pinned* to the screen (GSAP ScrollTrigger
 * pin — not CSS sticky, which an `overflow-hidden` ancestor + smooth-scroll break)
 * while two phases play out against scroll:
 *
 *   phase 1 (FILM_UNITS)  — the farm video scrubs frame-by-frame, full-bleed;
 *   phase 2 (SHRINK_UNITS) — the film ends, copy fades out, the video frame
 *                            scales down from its centre into a small window and
 *                            the next section slides up to cover it.
 *
 * Drop the footage at `public/hero/ferma.{webm,mp4}` (+ optional `ferma.jpg`
 * poster); hero title lockup at `public/hero/title.png` (transparent PNG). The pin distance is
 * exactly FILM + SHRINK viewport-heights, so there is no dead scroll.
 */
const VIDEO_SOURCES = [
  { src: "/hero/ferma.webm", type: "video/webm" },
  { src: "/hero/ferma.mp4", type: "video/mp4" },
];

// Phase lengths, in viewport-heights of scrolling.
const FILM_UNITS = 1.5;
const SHRINK_UNITS = 0.8;
const FILM_TEXT_SCALE_END = 0.52;

const HERO_TITLE_SRC = "/hero/title.png";

const META = [
  { k: "Żywienie", v: "Receptury i pasza" },
  { k: "Mikroklimat", v: "Wentylacja i komfort" },
  { k: "Audyt", v: "Wdrożenie i kontrola" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);

  const [videoFailed, setVideoFailed] = useState(false);

  const mountainProfileData = useMemo(() => mountainProfile(46, 13, 2), []);
  const treeProfileData = useMemo(() => treeProfile(16, 11), []);

  // Intro reveal (runs once, independent of scroll).
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.from(introRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: reduce ? 0 : 0.4,
        });
      }
      if (metaRef.current) {
        gsap.from(metaRef.current.children, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay: reduce ? 0 : 0.7,
        });
      }
      if (headingRef.current) {
        if (reduce) {
          gsap.set(headingRef.current, { opacity: 1 });
        } else {
          gsap.from(headingRef.current, {
            opacity: 0,
            y: 32,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.2,
          });
        }
      }
    });
    return () => ctx.revert();
  }, []);

  // Pinned scrub timeline: film, then shrink. Built once we know whether the
  // video is usable (rebuilds if it errors out and we fall back to the illustration).
  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const video = videoRef.current;

    let cleanup = () => {};

    const build = () => {
      const usableVideo =
        !videoFailed &&
        video &&
        Number.isFinite(video.duration) &&
        video.duration > 0
          ? video
          : null;

      // Prime decoding so seeking renders frames (required on iOS/Safari).
      if (usableVideo) usableVideo.play().then(() => usableVideo.pause()).catch(() => {});

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () =>
              "+=" + window.innerHeight * (FILM_UNITS + SHRINK_UNITS),
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1 — scrub the film (or just hold, if no footage yet).
        if (usableVideo) {
          const duration = usableVideo.duration;
          const state = { t: 0 };
          tl.to(
            state,
            {
              t: 1,
              duration: FILM_UNITS,
              ease: "none",
              onUpdate: () => {
                const target = state.t * duration;
                if (Math.abs(usableVideo.currentTime - target) > 0.001) {
                  try {
                    usableVideo.currentTime = target;
                  } catch {
                    /* not seekable yet */
                  }
                }
              },
            },
            0
          );
        } else {
          tl.to({}, { duration: FILM_UNITS }, 0);
        }

        if (copyRef.current) {
          tl.fromTo(
            copyRef.current,
            { scale: 1, opacity: 1 },
            { scale: FILM_TEXT_SCALE_END, ease: "none", duration: FILM_UNITS },
            0
          );
          tl.to(
            copyRef.current,
            { opacity: 0, ease: "power2.in", duration: SHRINK_UNITS * 0.35 },
            FILM_UNITS
          );
        }

        // Phase 2 — film done: shrink the frame and bring in the silhouettes.
        tl.to(
          frameRef.current,
          {
            scale: 0.52,
            borderRadius: "2.25rem",
            ease: "none",
            duration: SHRINK_UNITS,
          },
          FILM_UNITS
        );
        if (mountainRef.current) {
          tl.fromTo(
            mountainRef.current,
            { xPercent: -130 },
            { xPercent: 0, ease: "none", duration: SHRINK_UNITS },
            FILM_UNITS
          );
        }
        if (treeRef.current) {
          tl.fromTo(
            treeRef.current,
            { xPercent: 130 },
            { xPercent: 0, ease: "none", duration: SHRINK_UNITS },
            FILM_UNITS
          );
        }
      }, sectionRef);

      ScrollTrigger.refresh();
      cleanup = () => ctx.revert();
    };

    if (!video || videoFailed || video.readyState >= 1) {
      build();
    } else {
      video.addEventListener("loadedmetadata", build, { once: true });
      cleanup = () => video.removeEventListener("loadedmetadata", build);
    }

    return () => cleanup();
  }, [videoFailed]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-10 h-screen overflow-hidden bg-gold"
    >
      {/* Vertical-halftone silhouettes that surround the frame once it shrinks. */}
      <div
        ref={mountainRef}
        className="pointer-events-none absolute bottom-0 left-0 z-0 text-navy-deep/55"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette
          profile={mountainProfileData}
          className="h-32 w-auto sm:h-44 lg:h-56"
        />
      </div>
      <div
        ref={treeRef}
        className="pointer-events-none absolute right-0 bottom-0 z-0 text-navy-deep/55"
        aria-hidden="true"
      >
        <VerticalHalftoneSilhouette
          profile={treeProfileData}
          className="h-28 w-auto sm:h-40 lg:h-48"
        />
      </div>

      {/* The frame that scales down: video + overlays + all hero copy. */}
      <div
        ref={frameRef}
        className="absolute inset-0 z-10 origin-center overflow-hidden will-change-transform"
      >
        {/* Fallback illustration sits underneath; the video covers it once loaded. */}
        <HeroIllustration className="absolute inset-0 h-full w-full" />

        {!videoFailed && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
            poster="/hero/ferma.jpg"
            onError={() => setVideoFailed(true)}
            aria-hidden="true"
          >
            {VIDEO_SOURCES.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
          </video>
        )}

        {/* Legibility scrims. */}
        <div className="pointer-events-none absolute inset-0 bg-navy-deepest/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deepest/80 via-navy-deepest/15 to-navy-deepest/45" />

        {/* Hero copy — scales with film scrub, fades when the frame shrinks. */}
        <div
          ref={copyRef}
          className="absolute inset-0 z-20 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div ref={introRef} className="flex flex-col items-center gap-5">
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-navy-deepest/30 px-4 py-1.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-light backdrop-blur-sm sm:text-xs">
              Profesjonalne doradztwo zootechniczne
            </span>

            <h1 ref={headingRef} className="relative mx-auto w-full max-w-[min(100%,48rem)]">
              <Image
                src={HERO_TITLE_SRC}
                alt="Robert Gurgul"
                width={1024}
                height={125}
                priority
                className="h-auto w-full max-w-[min(100%,48rem)] object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
              />
            </h1>

            <p className="max-w-xl text-balance text-base leading-relaxed text-offwhite/85 sm:text-lg">
              Zdrowe stado i spokojna głowa zaczynają się od dobrego planu —
              żywienie, mikroklimat i codzienna obserwacja w jednej strategii.
            </p>
          </div>

          {/* Meta row — pinned to the foot of the frame, scales with it. */}
          <div
            ref={metaRef}
            className="absolute inset-x-0 bottom-10 mx-auto grid w-full max-w-3xl grid-cols-3 gap-4 px-8 sm:bottom-14"
          >
            {META.map((m) => (
              <div key={m.k} className="flex flex-col items-center gap-1 text-center">
                <span className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-light sm:text-xs">
                  {m.k}
                </span>
                <span className="text-[0.7rem] text-offwhite/65 sm:text-sm">
                  {m.v}
                </span>
              </div>
            ))}
          </div>

          {/* Circular call-to-action, bottom-right of the frame. */}
          <Link
            href="#connect"
            className="group absolute bottom-8 right-8 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gold/50 bg-navy-deepest/35 text-center font-heading text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-offwhite backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/10 sm:h-32 sm:w-32 sm:text-xs"
          >
            <ArrowUpRight
              className="mb-1 h-5 w-5 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
            Umów
            <br />
            konsultację
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
