import Shot from "@/components/Shot";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <Shot tone="jungle" label="shot 01: drone pass over the pools, through the canopy" />
      </div>
      <div className="wrap hero-in rv">
        <h1>
          Sri Lanka&apos;s <Underline variant="hero">Nature-Inspired</Underline> Water Park
        </h1>
        <p className="sub">
          A full day of slides, pools, traditional games and authentic Sri Lankan food. 10 minutes
          from Galle. From $13 per person.
        </p>
        <div className="hero-cta">
          <WhatsAppPill message={messages.book} big>
            WhatsApp to book your day
          </WhatsAppPill>
          <a className="quiet-link" href="#day">see what&apos;s included</a>
        </div>
        <p className="trustline">We reply on WhatsApp in about 15 minutes. Walk-ins welcome.</p>
      </div>
    </header>
  );
}
