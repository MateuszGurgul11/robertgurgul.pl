import type { SzablonSkrypt } from "@/components/szablon/szablon-skrypty";

// Skrypty szablonu w kolejności ładowania (animacje, menu, okna, slidery, sceny WebGL).
// Wspólne dla strony głównej i podstron.
export const SKRYPTY: SzablonSkrypt[] = [
  { src: "/assets/js/local.js", module: false, async: false, attrs: {} },
  { src: "/assets/vendor/422d678bf8.js", module: false, async: false, attrs: {} }, // jQuery
  { src: "/assets/vendor/bf62e18edd.js", module: false, async: false, attrs: {} }, // Webflow
  { src: "/assets/vendor/bf074f10e1.js", module: false, async: false, attrs: {} }, // Barba (przejścia)
  { src: "/assets/vendor/bab7830ec9.js", module: false, async: true, attrs: { "fs-cc-mode": "informational" } }, // cookies
  { src: "/assets/vendor/76e251ff54.js", module: false, async: false, attrs: {} }, // GSAP
  { src: "/assets/vendor/a834d0a572.js", module: false, async: false, attrs: {} }, // ScrollTrigger
  { src: "/assets/vendor/5c7ca340d2.js", module: false, async: false, attrs: {} }, // CustomEase
  { src: "/assets/vendor/2d1ce64424.js", module: false, async: false, attrs: {} }, // SplitText
  { src: "/assets/vendor/f4b743bae5.js", module: false, async: false, attrs: {} }, // Flip
  { src: "/assets/vendor/e4caa31af9.js", module: false, async: false, attrs: {} }, // Lenis
  { src: "/assets/vendor/13cf11a418.js", module: false, async: false, attrs: {} }, // Swiper
  { src: "/assets/js/site.js", module: true, async: false, attrs: {} },
];
