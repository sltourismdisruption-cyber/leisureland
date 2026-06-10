import type { Tone } from "@/lib/constants";

/**
 * Image slot. Shows the placeholder photo in `src` over the tinted gradient,
 * with the photographer's dashed shot chip on top. After the shoot, files land
 * in public/shots/ per handoff §6, srcs get swapped, this moves to next/image
 * and the chips are deleted. `chipRight` aligns the chip right (final CTA).
 */
export default function Shot({
  tone,
  label,
  src,
  chipRight = false,
}: {
  tone: Tone;
  label: string;
  src?: string;
  chipRight?: boolean;
}) {
  return (
    <div className={`ph ph-${tone}`}>
      {src ? (
        // Placeholder imagery only; becomes next/image with real alt text at photo time.
        // eslint-disable-next-line @next/next/no-img-element
        <img className="ph-img" src={src} alt="" loading="lazy" />
      ) : null}
      <span className="shot" style={chipRight ? { left: "auto", right: 14 } : undefined}>
        {label}
      </span>
    </div>
  );
}
