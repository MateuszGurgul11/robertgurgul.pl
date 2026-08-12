"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
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
import { killScrollTriggersIn } from "@/lib/kill-scroll-triggers";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * Desktop: scroll-scrubbed hero (pin + scrub + shrink).
 * Mobile: autoplay muted loop over `ferma.jpg` poster — no pin/shrink.
 */
const VIDEO_SOURCES = [
  { src: "/hero/ferma.mp4", type: "video/mp4" },
  { src: "/hero/ferma.webm", type: "video/webm" },
];

const FILM_UNITS = 1.5;
const SHRINK_UNITS = 0.8;
const FILM_TEXT_SCALE_END = 0.52;

const META = [
  { k: "Żywienie", v: "Receptury i pasza" },
  { k: "Mikroklimat", v: "Wentylacja i komfort" },
  { k: "Audyt", v: "Wdrożenie i kontrola" },
];

function HeroCopy({
  introRef,
  headingRef,
  metaRef,
  mobile,
}: {
  introRef: RefObject<HTMLDivElement | null>;
  headingRef: RefObject<HTMLHeadingElement | null>;
  metaRef: RefObject<HTMLDivElement | null>;
  mobile: boolean;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-6">
      <div ref={introRef} className="flex flex-col items-center gap-4 sm:gap-5">
        <span className="inline-flex items-center rounded-full border border-gold/40 bg-navy-deepest/30 px-4 py-1.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold-light backdrop-blur-sm sm:text-xs">
          Profesjonalne doradztwo zootechniczne
        </span>

        <h1
          ref={headingRef}
          className="relative mx-auto w-full max-w-[min(100%,48rem)] font-heading text-[clamp(2.5rem,10vw,6rem)] font-bold uppercase leading-[0.95] tracking-[0.02em] text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
        >
          Robert Gurgul
        </h1>

        <p className="max-w-xl text-balance text-[0.95rem] leading-relaxed text-offwhite/85 sm:text-lg">
          Zdrowe stado i spokojna głowa zaczynają się od dobrego planu -
          żywienie, mikroklimat i codzienna obserwacja w jednej strategii.
        </p>

        {mobile ? (
          <Link
            href="#connect"
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-navy-deepest/40 px-5 py-2.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-offwhite backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/10"
          >
            Umów konsultację
            <ArrowUpRight className="h-4 w-4 text-gold" strokeWidth={1.75} />
          </Link>
        ) : null}
      </div>

      <div
        ref={metaRef}
        className={`absolute inset-x-0 mx-auto grid w-full max-w-3xl grid-cols-3 gap-3 px-4 sm:gap-4 sm:px-8 ${
          mobile ? "bottom-8" : "bottom-10 sm:bottom-14"
        }`}
      >
        {META.map((m) => (
          <div key={m.k} className="flex flex-col items-center gap-1 text-center">
            <span className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-light sm:text-xs">
              {m.k}
            </span>
            <span className="text-[0.65rem] text-offwhite/65 sm:text-sm">
              {m.v}
            </span>
          </div>
        ))}
      </div>

      {!mobile ? (
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
      ) : null}
    </div>
  );
}

export function Hero() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const mountainRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);

  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [mobileVideoReady, setMobileVideoReady] = useState(false);

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
          duration: reduce || isMobile ? 0.45 : 0.7,
          ease: "power2.out",
          stagger: 0.08,
          delay: reduce ? 0 : isMobile ? 0.15 : 0.4,
        });
      }
      if (metaRef.current) {
        gsap.from(metaRef.current.children, {
          opacity: 0,
          y: 16,
          duration: reduce || isMobile ? 0.4 : 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay: reduce ? 0 : isMobile ? 0.35 : 0.7,
        });
      }
      if (headingRef.current) {
        if (reduce) {
          gsap.set(headingRef.current, { opacity: 1 });
        } else {
          gsap.from(headingRef.current, {
            opacity: 0,
            y: 32,
            duration: isMobile ? 0.55 : 0.9,
            ease: "power3.out",
            delay: isMobile ? 0.1 : 0.2,
          });
        }
      }
    });
    return () => {
      try {
        ctx.revert();
      } catch {
        /* soft-nav race */
      }
    };
  }, [isMobile]);

  // Mobile: simple autoplay loop (no pin / scrub / shrink).
  useEffect(() => {
    if (!isMobile || prefersReducedMotion()) return;
    const video = mobileVideoRef.current;
    if (!video) return;

    const play = () => {
      video.play().then(() => setMobileVideoReady(true)).catch(() => {});
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });

    return () => video.removeEventListener("loadeddata", play);
  }, [isMobile]);

  // Desktop-only: pinned scrub timeline.
  useEffect(() => {
    if (isMobile || prefersReducedMotion() || !sectionRef.current) return;
    const video = videoRef.current;
    const section = sectionRef.current;

    let cancelled = false;
    let ctx: ReturnType<typeof gsap.context> | null = null;
    let fallbackId: number | undefined;
    let onLoadedData: (() => void) | undefined;

    const safeCleanup = () => {
      if (ctx) {
        try {
          ctx.revert();
        } catch {
          /* soft-nav race */
        }
        ctx = null;
      } else {
        killScrollTriggersIn(section);
      }
    };

    const build = () => {
      if (cancelled || !sectionRef.current || ctx) return;
      safeCleanup();

      const usableVideo =
        !videoFailed &&
        video &&
        Number.isFinite(video.duration) &&
        video.duration > 0
          ? video
          : null;

      if (usableVideo) {
        usableVideo
          .play()
          .then(() => {
            usableVideo.pause();
            try {
              usableVideo.currentTime = 0.001;
            } catch {
              /* seek not ready */
            }
            setVideoReady(true);
          })
          .catch(() => {
            setVideoReady(true);
          });
      }

      ctx = gsap.context(() => {
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
    };

    if (!video || videoFailed) {
      build();
    } else if (video.readyState >= 2) {
      setVideoReady(true);
      build();
    } else {
      onLoadedData = () => {
        if (cancelled) return;
        if (fallbackId !== undefined) window.clearTimeout(fallbackId);
        setVideoReady(true);
        build();
      };
      video.addEventListener("loadeddata", onLoadedData, { once: true });
      fallbackId = window.setTimeout(() => {
        if (cancelled) return;
        if (video.readyState >= 1) {
          setVideoReady(true);
        }
        build();
      }, 50);
    }

    return () => {
      cancelled = true;
      if (fallbackId !== undefined) window.clearTimeout(fallbackId);
      if (video && onLoadedData) {
        video.removeEventListener("loadeddata", onLoadedData);
      }
      safeCleanup();
    };
  }, [videoFailed, isMobile]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-10 h-svh min-h-[100dvh] overflow-hidden bg-gold md:h-screen md:min-h-0"
    >
      {!isMobile ? (
        <>
          <div
            ref={mountainRef}
            className="pointer-events-none absolute bottom-0 left-0 z-0 text-gold-deep mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
            aria-hidden="true"
          >
            <VerticalHalftoneSilhouette
              profile={mountainProfileData}
              className="h-32 w-auto sm:h-44 lg:h-56"
            />
          </div>
          <div
            ref={treeRef}
            className="pointer-events-none absolute right-0 bottom-0 z-0 text-gold-deep mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
            aria-hidden="true"
          >
            <VerticalHalftoneSilhouette
              profile={treeProfileData}
              className="h-28 w-auto sm:h-40 lg:h-48"
            />
          </div>
        </>
      ) : null}

      <div
        ref={frameRef}
        className="absolute inset-0 z-10 origin-center overflow-hidden will-change-transform"
      >
        {isMobile ? (
          <>
            <Image
              src="/hero/ferma.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {!prefersReducedMotion() ? (
              <video
                ref={mobileVideoRef}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  mobileVideoReady ? "opacity-100" : "opacity-0"
                }`}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                poster="/hero/ferma.jpg"
                onLoadedData={() => {
                  mobileVideoRef.current
                    ?.play()
                    .then(() => setMobileVideoReady(true))
                    .catch(() => {});
                }}
                onError={() => setMobileVideoReady(false)}
                aria-hidden="true"
              >
                {VIDEO_SOURCES.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>
            ) : null}
          </>
        ) : (
          <>
            <HeroIllustration className="absolute inset-0 h-full w-full" />
            {!videoFailed ? (
              <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                  videoReady ? "opacity-100" : "opacity-0"
                }`}
                muted
                playsInline
                preload="metadata"
                poster="/hero/ferma.jpg"
                onLoadedData={() => setVideoReady(true)}
                onError={() => setVideoFailed(true)}
                aria-hidden="true"
              >
                {VIDEO_SOURCES.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>
            ) : null}
          </>
        )}

        <div className="pointer-events-none absolute inset-0 bg-navy-deepest/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deepest/80 via-navy-deepest/15 to-navy-deepest/45" />

        <div
          ref={copyRef}
          className="absolute inset-0 z-20 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          <HeroCopy
            introRef={introRef}
            headingRef={headingRef}
            metaRef={metaRef}
            mobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}
