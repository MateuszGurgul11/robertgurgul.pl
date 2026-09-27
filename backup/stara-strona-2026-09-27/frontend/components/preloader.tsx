"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { GoldBarsCanvas } from "@/components/gold-bars-canvas";
import { Logo } from "@/components/logo";
import { useIsMobile } from "@/lib/use-is-mobile";

function getLoadProgress(): number {
  const { readyState } = document;
  if (readyState === "complete") return 100;
  if (readyState === "interactive") return 70;
  return 30;
}

export function Preloader() {
  const isMobile = useIsMobile();
  const [hidden, setHidden] = useState(true);
  const [percent, setPercent] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mobile / reduced motion / already loaded: never block LCP with the splash.
    if (prefersReducedMotion() || isMobile || document.readyState === "complete") {
      setHidden(true);
      return;
    }

    setHidden(false);
    setShowContent(true);
    setPercent(getLoadProgress());

    const onProgress = () => setPercent(getLoadProgress());

    const finish = () => {
      setPercent(100);
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          setShowContent(false);
          setHidden(true);
        },
      });
    };

    document.addEventListener("readystatechange", onProgress);
    window.addEventListener("load", finish, { once: true });

    return () => {
      document.removeEventListener("readystatechange", onProgress);
      window.removeEventListener("load", finish);
    };
  }, [isMobile]);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy-deep"
      aria-hidden="true"
    >
      {showContent ? (
        <>
          <Logo variant="pictogram" className="h-16 pointer-events-none" />
          <GoldBarsCanvas progress={percent / 100} barCount={24} className="h-16 w-48" />
          <p className="font-heading text-sm tracking-[0.2em] text-slate-muted">
            {percent}%
          </p>
        </>
      ) : null}
    </div>
  );
}
