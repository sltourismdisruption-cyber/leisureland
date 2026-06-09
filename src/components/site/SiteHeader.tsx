"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { whatsappMessages } from "@/lib/site";

const NAV = [
  { href: "#included", label: "Day Pass" },
  { href: "#activities", label: "Activities" },
  { href: "#stay", label: "Accommodation" },
  { href: "#reviews", label: "Reviews" },
  { href: "#getting-here", label: "Find us" },
];

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-solid={solid ? "true" : "false"}>
      <a className="brand" href="#top" aria-label="Leisure Land home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={solid ? "/assets/logo/leisureland-black.png" : "/assets/logo/leisureland-white.png"}
          alt="Leisure Land"
        />
      </a>
      <nav className="nav-links" aria-label="Primary">
        {NAV.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <div className="header-right">
        <Button variant="cta" size="sm" leadingIcon="message-circle" wa={whatsappMessages.bookDay}>
          WhatsApp us
        </Button>
      </div>
    </header>
  );
}
