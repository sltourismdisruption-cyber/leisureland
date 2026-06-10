import { contact } from "@/lib/constants";

const LINKS = [
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
      <span className="fly f2" aria-hidden="true" />
      <span className="fly f3" aria-hidden="true" />
      <span className="fly f4" aria-hidden="true" />
      <span className="fly f5" aria-hidden="true" />
      <div className="wrap foot-in">
        <p className="sign rv">See you in the jungle.</p>
        <div className="contact rv">
          <span className="wa-line">
            WhatsApp {contact.whatsappDisplay}, we reply in about 15 minutes
          </span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.hours}</span>
          <a href="#getting-here">Ten minutes from the Galle highway exit. Open the map</a>
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
