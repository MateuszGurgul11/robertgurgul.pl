"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { GoldBarsCanvas } from "@/components/gold-bars-canvas";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [percent, setPercent] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from OS-level media query
      setHidden(true);
      return;
    }

    const obj = { value: 0 };
    const tween = gsap.to(obj, {
      value: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => setPercent(Math.round(obj.value)),
      onComplete: () => {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.15,
          onComplete: () => setHidden(true),
        });
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-navy-deep"
      aria-hidden="true"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 font-heading text-xl font-bold text-gold">
        RG
      </span>
      <GoldBarsCanvas progress={percent / 100} barCount={24} className="h-16 w-48" />
      <p className="font-heading text-sm tracking-[0.2em] text-slate-muted">
        {percent}%
      </p>
    </div>
  );
}
