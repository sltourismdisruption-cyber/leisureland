import WhatsAppPill from "@/components/WhatsAppPill";
import { contact, messages } from "@/lib/constants";

const EXPLORE = [
  { href: "#day", label: "The day" },
  { href: "#acts", label: "Activities" },
  { href: "#food", label: "Food" },
  { href: "#stay", label: "Stay" },
  { href: "#galle", label: "Galle" },
];

export default function Footer() {
  return (
    <footer>
      <span className="fly f1" aria-hidden="true" />
      <span className="fly f3" aria-hidden="true" />
      <span className="fly f5" aria-hidden="true" />
      <div className="wrap foot-in">
        <div className="foot-grid rv">
          <div className="foot-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="f-logo" src="/assets/logo/leisureland-white.png" alt="Leisure Land" />
            <p>
              A nature-inspired water park and stay, deep in the jungle ten minutes from Galle.
            </p>
            <WhatsAppPill message={messages.book}>Message us on WhatsApp</WhatsAppPill>
          </div>

          <div className="foot-col">
            <span className="label">Explore</span>
            {EXPLORE.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="foot-col">
            <span className="label">Visit</span>
            <span>{contact.hours}</span>
            <a href="#getting-here">Map &amp; driving times</a>
            <span className="foot-dim">Walk-ins welcome, WhatsApp ahead on holidays</span>
          </div>

          <div className="foot-col">
            <span className="label">Say hello</span>
            <span>WhatsApp {contact.whatsappDisplay}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <span className="foot-dim">We reply in about 15 minutes</span>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Leisure Land</span>
          <span className="hand">built with love in Galle</span>
        </div>
      </div>
    </footer>
  );
}
