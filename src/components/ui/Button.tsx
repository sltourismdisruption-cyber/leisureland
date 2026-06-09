"use client";

import type { CSSProperties, ReactNode } from "react";
import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

type Variant = "primary" | "cta" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { padding: string; fontSize: string; radius: string; gap: string }> = {
  sm: { padding: "8px 16px", fontSize: "var(--text-sm)", radius: "var(--radius-sm)", gap: "7px" },
  md: { padding: "12px 22px", fontSize: "var(--text-base)", radius: "var(--radius-md)", gap: "9px" },
  lg: { padding: "16px 30px", fontSize: "var(--text-md)", radius: "var(--radius-lg)", gap: "11px" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: { background: "var(--jungle-800)", color: "var(--cream-50)", border: "2px solid var(--jungle-800)", boxShadow: "var(--shadow-sm)" },
  cta: { background: "var(--cta-fill)", color: "var(--cta-text)", border: "2px solid var(--cta-fill)", boxShadow: "var(--glow-cta)" },
  secondary: { background: "transparent", color: "var(--bark-700)", border: "2px solid var(--bark-300)", boxShadow: "none" },
  ghost: { background: "transparent", color: "var(--jungle-700)", border: "2px solid transparent", boxShadow: "none" },
  accent: { background: "var(--sky-500)", color: "var(--jungle-900)", border: "2px solid var(--sky-500)", boxShadow: "var(--shadow-sm)" },
};

// Frosted-glass override used by the hero's secondary button over the photo.
const GLASS: CSSProperties = {
  background: "rgba(247,241,227,0.16)",
  borderColor: "rgba(247,241,227,0.65)",
  color: "var(--cream-50)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  leadingIcon?: string;
  trailingIcon?: string;
  fullWidth?: boolean;
  glass?: boolean;
  href?: string;
  /** WhatsApp pre-filled message — renders a wa.me link. */
  wa?: string;
  style?: CSSProperties;
};

export default function Button({
  children, variant = "primary", size = "md", leadingIcon, trailingIcon,
  fullWidth = false, glass = false, href, wa, style,
}: ButtonProps) {
  const s = SIZES[size];
  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-bold)",
    fontSize: s.fontSize,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: s.radius,
    cursor: "pointer",
    width: fullWidth ? "100%" : "auto",
    letterSpacing: "0.005em",
    textDecoration: "none",
    transition:
      "transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
    ...VARIANTS[variant],
    ...(glass ? GLASS : null),
    ...style,
  };

  const handlers = {
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = "translateY(1px) scale(0.985)";
    },
    onMouseUp: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = "none";
    },
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.filter = "brightness(1.06)";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "none";
    },
  };

  const inner = (
    <>
      {leadingIcon && <Icon name={leadingIcon} />}
      <span>{children}</span>
      {trailingIcon && <Icon name={trailingIcon} />}
    </>
  );

  const link = wa ? whatsappLink(wa) : href;
  if (link) {
    const external = !link.startsWith("#");
    return (
      <a
        href={link}
        style={baseStyle}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
        {...handlers}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" style={baseStyle} {...handlers}>
      {inner}
    </button>
  );
}
