import WhatsAppPill from "@/components/WhatsAppPill";
import { contact, messages } from "@/lib/constants";

const LINKS = [
  { href: "#day", label: "The day" },
  { href: "#acts", label: "Activities" },
  { href: "#food", label: "Food" },
  { href: "#stay", label: "Stay" },
  { href: "#galle", label: "Galle" },
];

/** The tuk tuk ride home: same dotted-route + palm + tuk tuk marks as the Galle map. */
function RideHome() {
  return (
    <div className="foot-route" aria-hidden="true">
      <svg viewBox="0 0 1200 84" preserveAspectRatio="xMidYMid meet">
        <path
          d="M30 58 C 200 30, 380 70, 560 46 C 740 24, 920 64, 1170 42"
          fill="none"
          stroke="rgba(244,248,244,0.32)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 10"
        />
        <g stroke="#3E7E57" strokeWidth="3.2" fill="none" strokeLinecap="round">
          <g transform="translate(30,52)">
            <path d="M0 14 V0" />
            <path d="M-9 0 C -7 -10 7 -10 9 0" />
          </g>
          <g transform="translate(62,58)">
            <path d="M0 12 V0" />
            <path d="M-8 0 C -6 -9 6 -9 8 0" />
          </g>
          <g transform="translate(1170,46)">
            <path d="M0 14 V0" />
            <path d="M-9 0 C -7 -10 7 -10 9 0" />
          </g>
        </g>
        <g
          transform="translate(560,40) rotate(-4)"
          stroke="#D9C9A8"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-16 4 L-11 -11 H9 L15 4 Z" />
          <path d="M-2 -11 V4" />
          <circle cx="-8" cy="10" r="5" />
          <circle cx="8" cy="10" r="5" />
        </g>
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <span className="fly f1" aria-hidden="true" />
      <span className="fly f2" aria-hidden="true" />
      <span className="fly f3" aria-hidden="true" />
      <span className="fly f4" aria-hidden="true" />
      <span className="fly f5" aria-hidden="true" />
      <div className="wrap foot-in">
        <RideHome />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="f-logo" src="/assets/logo/leisureland-white.png" alt="Leisure Land" />
        <p className="sign rv">See you in the jungle.</p>

        <div className="foot-grid rv">
          <div className="foot-col">
            <span className="label">Say hello</span>
            <WhatsAppPill message={messages.book}>Message us on WhatsApp</WhatsAppPill>
            <span className="foot-dim">
              {contact.whatsappDisplay}, we reply in about 15 minutes
            </span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="foot-col">
            <span className="label">Find us</span>
            <span>Ten minutes from the Galle highway exit, deep in the jungle</span>
            <a href="#getting-here">Open the map and driving times</a>
          </div>
          <div className="foot-col">
            <span className="label">The hours</span>
            <span>{contact.hours}</span>
            <span className="foot-dim">Walk-ins welcome, WhatsApp ahead on holidays</span>
          </div>
        </div>

        <p className="navline rv">
          {LINKS.map((l, i) => (
            <span key={l.href}>
              <a href={l.href}>{l.label}</a>
              {i < LINKS.length - 1 ? <span>·</span> : null}
            </span>
          ))}
        </p>
        <div className="mega" aria-hidden="true">Leisure Land</div>
        <div className="foot-bottom">
          <span>© 2026 Leisure Land</span>
          <span className="hand">built with love in Galle</span>
        </div>
      </div>
    </footer>
  );
}
