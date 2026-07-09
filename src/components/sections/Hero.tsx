import Shot from "@/components/Shot";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import { EdgeOverlay } from "@/components/SectionEdge";
import { messages } from "@/lib/constants";

// Staged entrance: each block rises in sequence on load.
const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero({
  src = "/assets/photos/hero-lagoon.jpg",
  tinaField,
}: {
  /** Background image. Defaults to the original hero lagoon shot. */
  src?: string;
  /** Optional Tina visual-editing handle for the hero image. */
  tinaField?: string;
}) {
  return (
    <header className="hero">
      <div className="hero-bg">
        <Shot
          tone="jungle"
          label="shot 01: drone pass over the pools, through the canopy"
          src={src}
          tinaField={tinaField}
          priority
        />
      </div>
      <div className="wrap hero-in">
        <h1 className="ha" style={rise(150)}>
          <span className="h1-line">Sri Lanka&apos;s</span>{" "}
          <Underline variant="hero">Nature-Inspired</Underline>{" "}
          <span className="h1-line">Water Park</span>
        </h1>
        {/* Full subtitle on desktop; a shorter one on mobile (toggled in CSS). */}
        <p className="sub sub-lg ha" style={rise(300)}>
          A full day of slides, pools, traditional games and authentic Sri Lankan food. 10 minutes
          from Galle. From $14 per person.
        </p>
        <p className="sub sub-sm ha" style={rise(300)}>
          A full day of slides, pools and authentic Sri Lankan food. 10 minutes from Galle, from $14.
        </p>
        <div className="hero-cta ha" style={rise(450)}>
          <WhatsAppPill message={messages.book} big>
            WhatsApp to book your day
          </WhatsAppPill>
          <a className="quiet-link" href="#day">see what&apos;s included</a>
        </div>
        <p className="trustline ha" style={rise(600)}>
          We reply on WhatsApp in about 15 minutes. Walk-ins welcome.
        </p>
      </div>
      {/* Flows into the dark canopy "Watch" video band below (Round 3 H1). */}
      <EdgeOverlay fill="canopy" position="bottom" />
    </header>
  );
}
