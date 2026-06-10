import type { Tone } from "@/lib/constants";

/**
 * Image placeholder with a tinted gradient + the photographer's dashed shot
 * chip. Swapped for next/image when real photos land (handoff §6); the chip is
 * deleted at launch. `chipRight` aligns the chip to the right (final CTA).
 */
export default function Shot({
  tone,
  label,
  chipRight = false,
}: {
  tone: Tone;
  label: string;
  chipRight?: boolean;
}) {
  return (
    <div className={`ph ph-${tone}`}>
      <span className="shot" style={chipRight ? { left: "auto", right: 14 } : undefined}>
        {label}
      </span>
    </div>
  );
}
