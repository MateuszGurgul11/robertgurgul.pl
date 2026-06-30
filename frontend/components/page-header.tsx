"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { GoldBarsCanvas } from "@/components/gold-bars-canvas";

export function PageHeader({ title }: { title: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    if (prefersReducedMotion()) {
      gsap.set(heading, { opacity: 1, y: 0 });
      return;
    }

    const tween = gsap.from(heading, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    });

    return () => {
      tween.kill();
      gsap.set(heading, { clearProps: "opacity,transform" });
    };
  }, [title]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-navy-deep via-navy-deep to-navy-mid pt-32 pb-14 sm:pt-40 sm:pb-16"
    >
      <GoldBarsCanvas
        triggerRef={sectionRef}
        barCount={40}
        className="absolute inset-0 opacity-10"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-muted">
          <Link href="/" className="hover:text-gold-light">
            Strona główna
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gold-light">{title}</span>
        </div>
        <h1
          ref={headingRef}
          className="heading-underline mt-4 font-heading text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] text-offwhite"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
