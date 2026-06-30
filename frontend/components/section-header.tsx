"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    if (prefersReducedMotion()) {
      gsap.set(heading, { opacity: 1, y: 0 });
      return;
    }

    const tween = gsap.from(heading, {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: heading, start: "top 85%" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(heading, { clearProps: "opacity,transform" });
    };
  }, [title]);

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "font-heading text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-gold-light" : "text-gold-deep"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        ref={headingRef}
        className={cn(
          "heading-underline font-heading text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.03]",
          isCenter && "heading-underline-center",
          tone === "dark" ? "text-offwhite" : "text-navy-deep"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-slate-muted" : "text-navy-mid"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
