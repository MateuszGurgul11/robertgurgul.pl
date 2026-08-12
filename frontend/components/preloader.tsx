"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { GoldBarsCanvas } from "@/components/gold-bars-canvas";

function getLoadProgress(): number {
  const { readyState } = document;
  if (readyState === "complete") return 100;
  if (readyState === "interactive") return 70;
  return 30;
}

export function Preloader() {
  const [hidden, setHidden] = useState(true);
  const [percent, setPercent] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || document.readyState === "complete") {
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
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy-deep"
      aria-hidden="true"
    >
      {showContent ? (
        <>
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 font-heading text-xl font-bold text-gold">
            RG
          </span>
          <GoldBarsCanvas progress={percent / 100} barCount={24} className="h-16 w-48" />
          <p className="font-heading text-sm tracking-[0.2em] text-slate-muted">
            {percent}%
          </p>
        </>
      ) : null}
    </div>
  );
}
