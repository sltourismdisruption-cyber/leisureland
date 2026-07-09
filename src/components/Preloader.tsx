"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/constants";

/**
 * Mist curtain shown while the page boots: wordmark rises, the painted line
 * draws, then the curtain fades as the hero entrance begins. Sets
 * `data-ready` on <html>, which fires the hero's staged animation, so the
 * two are choreographed. Skipped entirely under prefers-reduced-motion
 * (CSS hides it; data-ready is set immediately).
 */
export default function Preloader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 0 : 1200;
    const t1 = setTimeout(() => {
      document.documentElement.setAttribute("data-ready", "");
      setLeaving(true);
    }, hold);
    const t2 = setTimeout(() => setGone(true), hold + 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader${leaving ? " is-leaving" : ""}`} aria-hidden="true">
      {/* Shown before hydration; eager so the curtain wordmark paints at once.
          CSS (.preloader img) renders it ~36px tall; next/image serves WebP. */}
      <Image src={asset("/assets/logo/leisureland-black.png")} alt="" width={1714} height={357} sizes="180px" loading="eager" />
      <svg className="pre-line" viewBox="0 0 300 20">
        <path d="M4 13 C 60 6, 120 16, 180 9 S 270 6, 296 11" />
      </svg>
    </div>
  );
}
