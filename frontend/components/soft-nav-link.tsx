"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { killHomeScrollTriggers } from "@/lib/kill-scroll-triggers";

const AWAY = new Set(["/photos", "/videos", "/docs", "/oferta", "/kontakt"]);

function prepareSoftNav(href: string) {
  if (!AWAY.has(href.split("#")[0] ?? href)) return;
  try {
    killHomeScrollTriggers();
    // Drop any remaining scrub triggers on the home page before React unmounts.
    for (const trigger of ScrollTrigger.getAll()) {
      const el = trigger.trigger;
      if (!el) continue;
      const page = el.closest("main");
      if (page) trigger.kill();
    }
  } catch {
    /* ignore */
  }
}

type SoftNavLinkProps = ComponentProps<typeof Link>;

/** Next Link that tears down GSAP pins before leaving `/` for gallery routes. */
export function SoftNavLink({ href, onClick, ...rest }: SoftNavLinkProps) {
  const path = typeof href === "string" ? href : href.pathname ?? "";
  return (
    <Link
      href={href}
      onClick={(e) => {
        prepareSoftNav(path);
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
