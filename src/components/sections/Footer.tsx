import Link from "next/link";
import Image from "next/image";
import WhatsAppPill from "@/components/WhatsAppPill";
import { asset, contact, messages, waLink, NAV_LINKS } from "@/lib/constants";

// Page links plus Rules & Safety, which lives on /day-outing (Doc 05).
const EXPLORE = [
  ...NAV_LINKS,
  { href: "/day-outing#rules", label: "Rules & Safety" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <div className="foot-grid rv">
          <div className="foot-brand">
            {/* Below the fold → stays lazy (next/image default). CSS (.f-logo)
                renders it ~30px tall; next/image serves a small WebP variant. */}
            <Image className="f-logo" src={asset("/assets/logo/leisureland-white.png")} alt="Leisure Land" width={1714} height={357} sizes="150px" />
            <p>
              A nature-inspired water park and stay, deep in the jungle ten minutes from Galle.
            </p>
            <WhatsAppPill message={messages.book}>Message us on WhatsApp</WhatsAppPill>
          </div>

          <div className="foot-col fc-explore">
            <span className="label">Explore</span>
            {EXPLORE.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="foot-col fc-visit">
            <span className="label">Visit</span>
            <span>{contact.hours}</span>
            <Link href="/#getting-here">Map &amp; driving times</Link>
            <span className="foot-dim">Walk-ins welcome, WhatsApp ahead on holidays</span>
          </div>

          <div className="foot-col fc-hello">
            <span className="label">Say hello</span>
            <a href={waLink(messages.general)} target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.whatsappDisplay}
            </a>
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
