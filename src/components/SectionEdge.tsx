/**
 * Irregular divider between the day section and the dark activities band.
 * Same path mirrored on exit (flip). Fill matches the canopy band.
 */
export default function SectionEdge({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`edge${flip ? " flip" : ""}`}
      viewBox="0 0 1440 54"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="#1D4534"
        d="M0 34 C 90 18, 165 42, 255 28 C 345 14, 420 44, 520 26 C 615 10, 695 38, 790 24 C 885 11, 960 40, 1055 22 C 1145 7, 1230 34, 1320 20 C 1380 12, 1415 26, 1440 22 L 1440 54 L 0 54 Z"
      />
    </svg>
  );
}
