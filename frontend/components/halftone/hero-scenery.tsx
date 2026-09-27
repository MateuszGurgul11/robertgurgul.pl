"use client";

import { gsap } from "@/lib/gsap";
import { HalftoneCanvas } from "./HalftoneCanvas";
import { defaultLayer, type Layer, type LayerConfig } from "./renderer";
import { image } from "./sources";

// Brand palette (app/globals.css): paper = --color-gold, ink = --color-navy-mid.
const PAPER = "#a89474";
const INK = "#4a4038";
const M = "/halftone"; // CC0 / public-domain sources, see public/halftone/CREDITS.md

export type SceneryLayers = Record<string, LayerConfig>;

const layer = (src: string, config: Partial<LayerConfig>): Layer => ({
  source: image(src),
  config: { ...defaultLayer, x: 0, y: 0, w: 1, h: 1, ...config },
});

// Viewport fractions. anchorY: 1 = y is the bottom edge (things standing on the ground).
// "back" is drawn behind the hero film, "front" above it — the front field's top edge is the
// horizon the film sinks behind at the end of the scroll.
const scenes = {
  back: () => {
    const clouds = image(`${M}/clouds.webp`);
    const sky = { mask: "luma", cutoff: 0.35, occlude: false, black: 0.25, maxBar: 0.6, y: 0.04, w: 1.3 } as const;
    return {
      cloudsA: { source: clouds, config: { ...defaultLayer, h: 1, ...sky, x: 0 } },
      cloudsB: { source: clouds, config: { ...defaultLayer, h: 1, ...sky, x: 1.3 } },
      treeline: layer(`${M}/meadow.webp`, { x: -0.05, y: 0.3, w: 1.1, flipX: true, black: 0.1, white: 0.7, maxBar: 0.85 }),
      spruce: layer(`${M}/spruce.webp`, { x: 0.8, y: 0.62, w: 0.16, anchorY: 1, black: 0.6, white: 1, maxBar: 1 }),
    };
  },
  front: () => ({
    field: layer(`${M}/field.webp`, { x: -0.05, y: 0.5, w: 1.1, black: 0.05, white: 0.62, maxBar: 0.85 }),
    hen: layer(`${M}/hen.webp`, { x: 0.05, y: 1.02, w: 0.11, anchorY: 1, black: 0.1, white: 0.95 }),
    rooster: layer(`${M}/rooster.webp`, { x: 0.78, y: 1.03, w: 0.17, anchorY: 1, black: 0.05, white: 0.9 }),
  }),
} satisfies Record<string, () => Record<string, Layer>>;

/**
 * Line-halftone landscape for the hero. Draws only; the hero timeline animates the
 * configs it receives through `onLayers` (keyed by name, e.g. `field`, `hen`).
 */
export function HeroScenery({
  part,
  className,
  onLayers,
}: {
  part: keyof typeof scenes;
  className?: string;
  onLayers?: (layers: SceneryLayers) => void;
}) {
  return (
    <HalftoneCanvas
      className={className}
      ink={INK}
      paper={PAPER}
      transparent
      cell={{ w: 6, h: 4 }}
      createLayers={() => {
        const named: Record<string, Layer> = scenes[part]();
        onLayers?.(Object.fromEntries(Object.entries(named).map(([k, l]) => [k, l.config])));
        return Object.values(named);
      }}
      onReady={(layers) => {
        if (part !== "back" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        // Endless cloud drift: two copies side by side, wrapped around.
        const clouds = layers.slice(0, 2).map((l) => l.config);
        const wrap = gsap.utils.wrap(-1.3, 1.3);
        const tween = gsap.to(clouds, {
          x: "-=2.6",
          duration: 160,
          ease: "none",
          repeat: -1,
          modifiers: { x: (x: number) => wrap(x) },
        });
        return () => tween.kill();
      }}
    />
  );
}
