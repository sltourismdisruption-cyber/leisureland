import type { ReactNode } from "react";

/**
 * The painted leaf-green underline. ONLY two uses allowed site-wide (handoff §3):
 * the hero word "Nature-Inspired" and the price "4,000 LKR".
 * variant "hero" draws on load; "price" draws when its `.rv` parent reveals.
 */
export default function Underline({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "hero" | "price";
}) {
  const cls = variant === "hero" ? "uline hero-u" : "uline pu";
  return (
    <span className={cls}>
      {children}
      <svg viewBox="0 0 300 20" aria-hidden="true">
        <path d="M4 13 C 60 6, 120 16, 180 9 S 270 6, 296 11" />
      </svg>
    </span>
  );
}
