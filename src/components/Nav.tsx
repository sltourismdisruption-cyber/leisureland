"use client";

import { useState } from "react";
import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

const LINKS = [
  { href: "#day", label: "The day" },
  { href: "#acts", label: "Activities" },
  { href: "#food", label: "Food" },
  { href: "#stay", label: "Stay" },
  { href: "#galle", label: "Galle" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="wrap nav-in">
        <a className="brand" href="#main" onClick={() => setOpen(false)}>
          Leisure Land
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-right">
          <WhatsAppPill message={messages.book}>Message us</WhatsAppPill>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </div>
      <div className="nav-mobile" id="mobile-menu" data-open={open ? "true" : "false"}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <WhatsAppPill message={messages.book}>Message us</WhatsAppPill>
      </div>
    </nav>
  );
}
