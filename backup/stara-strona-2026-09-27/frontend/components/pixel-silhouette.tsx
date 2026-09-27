import { cn } from "@/lib/utils";

/** Deterministic pseudo-random in [0, 1) — stable across server/client renders. */
function hash(n: number): number {
  return Math.abs(Math.sin(n * 12.9898 + 4.1414)) % 1;
}

/** Jagged skyline profile (column heights), for a halftone mountain range. */
export function mountainProfile(cols: number, maxHeight: number, minHeight = 2): number[] {
  return Array.from({ length: cols }, (_, i) => {
    const t = i / Math.max(1, cols - 1);
    const wave =
      0.5 +
      0.5 * Math.sin(t * Math.PI * 2.4 + 0.6) * 0.6 +
      0.5 * Math.sin(t * Math.PI * 5 + 2) * 0.3;
    const jitter = (hash(i) - 0.5) * 0.18;
    const eased = Math.max(0, Math.min(1, wave + jitter));
    return Math.max(minHeight, Math.round(minHeight + (maxHeight - minHeight) * eased));
  });
}

/** Single pine-tree silhouette centered within `cols`, zero-padded either side. */
export function treeProfile(cols: number, peakHeight: number): number[] {
  const center = Math.floor(cols / 2);
  return Array.from({ length: cols }, (_, i) => {
    const dist = Math.abs(i - center);
    const trunk = dist === 0 ? 1 : 0;
    const tiers = Math.max(0, peakHeight - dist * 2.2);
    return Math.round(tiers) + trunk;
  });
}

/** A loose cluster of pine trees forming a forest line. */
export function forestProfile(cols: number, treeCount: number, maxHeight: number): number[] {
  const heights = new Array(cols).fill(0);
  const spacing = cols / treeCount;
  for (let t = 0; t < treeCount; t++) {
    const center = Math.round(spacing * t + spacing / 2);
    const peak = maxHeight * (0.55 + 0.45 * hash(t * 3.1));
    const width = Math.max(3, Math.round(spacing * 0.7));
    for (let i = -width; i <= width; i++) {
      const col = center + i;
      if (col < 0 || col >= cols) continue;
      const dist = Math.abs(i);
      const h = Math.max(0, Math.round(peak - dist * (peak / width)));
      heights[col] = Math.max(heights[col], h);
    }
  }
  return heights;
}

interface VerticalHalftoneSilhouetteProps {
  profile: number[];
  lineWidth?: number;
  lineGap?: number;
  columnStep?: number;
  className?: string;
  color?: string;
}

/**
 * Renders a column-height profile as vertical halftone lines (sepia raster)
 * with a dissolving top edge — matches the hero H1 / connector film aesthetic.
 */
export function VerticalHalftoneSilhouette({
  profile,
  lineWidth = 2,
  lineGap = 2,
  columnStep = 4,
  className,
  color = "currentColor",
}: VerticalHalftoneSilhouetteProps) {
  const rowUnit = lineWidth + lineGap;
  const width = profile.length * columnStep;
  const maxRows = Math.max(1, ...profile);
  const height = maxRows * rowUnit;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("block", className)}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {profile.map((rows, col) => {
        if (rows <= 0) return null;

        const x = col * columnStep + (columnStep - lineWidth) / 2;
        const fullHeight = rows * rowUnit;
        const y = height - fullHeight;
        const topBand = rowUnit;
        const bodyHeight = fullHeight - topBand;
        const topOpacity = 0.3 + 0.55 * hash(col * 7 + rows);

        return (
          <g key={col}>
            {bodyHeight > 0 ? (
              <rect x={x} y={y + topBand} width={lineWidth} height={bodyHeight} fill={color} />
            ) : null}
            <rect
              x={x}
              y={y}
              width={lineWidth}
              height={Math.min(topBand, fullHeight)}
              fill={color}
              opacity={topOpacity}
            />
          </g>
        );
      })}
    </svg>
  );
}
