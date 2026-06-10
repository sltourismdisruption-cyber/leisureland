import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import { EdgeOverlay, type EdgeColor } from "@/components/SectionEdge";
import type { Tone } from "@/lib/constants";

// Staged entrance, same rhythm as the homepage hero.
const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

/**
 * Full-bleed photo hero for the four deep pages: shorter than the homepage
 * hero, same glass-nav behaviour (the nav watches the .hero class), one
 * WhatsApp pill maximum. `edgeFill` matches the band that follows.
 */
export default function PageHero({
  tone,
  shotLabel,
  src,
  title,
  sub,
  ctaLabel,
  message,
  edgeFill,
}: {
  tone: Tone;
  shotLabel: string;
  src?: string;
  title: string;
  sub: string;
  ctaLabel?: string;
  message?: string;
  edgeFill: EdgeColor;
}) {
  return (
    <header className="hero page-hero">
      <div className="hero-bg">
        <Shot tone={tone} label={shotLabel} src={src} />
      </div>
      <div className="wrap hero-in">
        <h1 className="ha" style={rise(150)}>{title}</h1>
        <p className="sub ha" style={rise(300)}>{sub}</p>
        {ctaLabel && message ? (
          <div className="hero-cta ha" style={rise(450)}>
            <WhatsAppPill message={message} big>
              {ctaLabel}
            </WhatsAppPill>
          </div>
        ) : null}
      </div>
      <EdgeOverlay fill={edgeFill} position="bottom" />
    </header>
  );
}
