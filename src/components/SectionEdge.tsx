/**
 * Irregular wavy divider between color bands (path from the v5 file, never a
 * straight line). `from` paints the svg's open area in the previous band's
 * color so the transition is seamless (no stray background strip); `to` is the
 * wave fill, matching the next band.
 *
 * EdgeOverlay is the absolute-positioned variant for photo sections: it lays
 * the wave over the hero's bottom or the final section's top.
 */

export const EDGE_COLORS = {
  card: "#FBFDFC",
  mist: "#DEE7E4",
  mistDeep: "#CEDAD5",
  canopy: "#1D4534",
} as const;

export type EdgeColor = keyof typeof EDGE_COLORS;

const EDGE_PATH =
  "M0 34 C 90 18, 165 42, 255 28 C 345 14, 420 44, 520 26 C 615 10, 695 38, 790 24 C 885 11, 960 40, 1055 22 C 1145 7, 1230 34, 1320 20 C 1380 12, 1415 26, 1440 22 L 1440 54 L 0 54 Z";

export default function SectionEdge({ from, to }: { from: EdgeColor; to: EdgeColor }) {
  return (
    <svg
      className="edge"
      viewBox="0 0 1440 54"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ background: EDGE_COLORS[from] }}
    >
      <path fill={EDGE_COLORS[to]} d={EDGE_PATH} />
    </svg>
  );
}

export function EdgeOverlay({ fill, position }: { fill: EdgeColor; position: "top" | "bottom" }) {
  return (
    <div className={`edge-ov edge-ov-${position}`} aria-hidden="true">
      <svg viewBox="0 0 1440 54" preserveAspectRatio="none">
        <path fill={EDGE_COLORS[fill]} d={EDGE_PATH} />
      </svg>
    </div>
  );
}
