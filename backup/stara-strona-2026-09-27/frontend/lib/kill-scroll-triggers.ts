import { ScrollTrigger } from "@/lib/gsap";

/**
 * Safely kill ScrollTriggers whose trigger element lives inside `root`
 * (or equals `root`). Call this *before* React unmounts pinned sections so
 * GSAP can remove pin-spacers itself — otherwise soft-nav races React's
 * removeChild and crashes the page.
 */
export function killScrollTriggersIn(root: Element | null | undefined) {
  if (!root || typeof window === "undefined") return;
  try {
    for (const trigger of ScrollTrigger.getAll()) {
      const el = trigger.trigger;
      if (!el) continue;
      if (el === root || root.contains(el)) {
        trigger.kill(true);
      }
    }
  } catch {
    // Ignore DOM races during App Router transitions.
  }
}

/** True while a pin-spacer from a previous page is still in the document. */
export function hasPinSpacers() {
  if (typeof document === "undefined") return false;
  return document.querySelectorAll(".pin-spacer").length > 0;
}

/** Kill the home Hero pin before soft-navigating away from `/`. */
export function killHomeScrollTriggers() {
  if (typeof document === "undefined") return;
  killScrollTriggersIn(document.getElementById("home"));
}
