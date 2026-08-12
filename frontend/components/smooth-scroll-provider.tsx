"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { hasPinSpacers } from "@/lib/kill-scroll-triggers";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    const root = document.documentElement;

    ScrollTrigger.scrollerProxy(root, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: root.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      try {
        ScrollTrigger.scrollerProxy(root, {});
      } catch {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    // Defer past React commit + pin cleanup so Lenis/ScrollTrigger don't
    // touch nodes mid-unmount (soft nav → removeChild crash).
    let cancelled = false;
    let attempts = 0;

    const run = () => {
      if (cancelled) return;
      attempts += 1;
      // Wait until previous page pin-spacers are gone (Hero cleanup).
      if (hasPinSpacers() && attempts < 12) {
        window.setTimeout(run, 40);
        return;
      }
      try {
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
        ScrollTrigger.refresh();
      } catch {
        // Ignore DOM races during App Router transitions.
      }
    };

    const id = window.setTimeout(run, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
  }, [pathname]);

  return <>{children}</>;
}
