"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppPill from "@/components/WhatsAppPill";
import { asset, messages, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  // Re-arm the scroll/hero logic after every client-side navigation: the nav
  // lives in the layout and survives page changes, but each page brings its
  // own .hero element.
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Glassy while the hero photo is behind the bar; back to the solid mist bar
  // the moment the hero's bottom edge slides under the 70px nav, so the swap
  // always lands on the hero/content seam, never an arbitrary scroll distance.
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) {
      setOverHero(false);
      return;
    }
    const supportsIO = "IntersectionObserver" in window;
    if (!supportsIO) {
      const onScroll = () => setOverHero(hero.getBoundingClientRect().bottom > 70);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-70px 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  // The open mobile menu brings its own solid surface, so the bar joins it.
  const glass = overHero && !open;

  return (
    <nav data-scrolled={scrolled ? "true" : "false"} data-glass={glass ? "true" : "false"}>
      <div className="wrap nav-in">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Leisure Land home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-dark" src={asset("/assets/logo/leisureland-black.png")} alt="Leisure Land" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-light" src={asset("/assets/logo/leisureland-white.png")} alt="" aria-hidden="true" />
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
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
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <WhatsAppPill message={messages.book}>Message us</WhatsAppPill>
      </div>
    </nav>
  );
}
