import Shot from "@/components/Shot";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import { EdgeOverlay } from "@/components/SectionEdge";
import { messages } from "@/lib/constants";

// Staged entrance: each block rises in sequence on load.
const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <Shot
          tone="jungle"
          label="shot 01: drone pass over the pools, through the canopy"
          src="/assets/photos/hero-lagoon.jpg"
        />
      </div>
      <div className="wrap hero-in">
        <h1 className="ha" style={rise(150)}>
          Sri Lanka&apos;s <Underline variant="hero">Nature-Inspired</Underline> Water Park
        </h1>
        <p className="sub ha" style={rise(300)}>
          A full day of slides, pools, traditional games and authentic Sri Lankan food. 10 minutes
          from Galle. From $14 per person.
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
      <EdgeOverlay fill="card" position="bottom" />
    </header>
  );
}
