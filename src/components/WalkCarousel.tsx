"use client";

import { useRef, useState } from "react";
import Shot from "@/components/Shot";

export type WalkPhoto = { label: string; src: string };

/**
 * Nature-walk photos. On desktop the CSS lays these out as a 3-up grid; on
 * mobile the same .walkstrip becomes a horizontal scroll-snap carousel. The
 * dots below are mobile-only (hidden on desktop via CSS) and track the active
 * slide as you swipe; tapping one scrolls to that photo.
 */
export default function WalkCarousel({ photos }: { photos: WalkPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    const first = t.firstElementChild as HTMLElement | null;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(t).columnGap || "0") || 0;
    const step = first.offsetWidth + gap;
    setActive(Math.min(Math.round(t.scrollLeft / step), photos.length - 1));
  };

  const goTo = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const slide = t.children[i] as HTMLElement | undefined;
    if (!slide) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    t.scrollTo({ left: slide.offsetLeft - t.offsetLeft, behavior });
  };

  return (
    <>
      <div className="walkstrip" ref={trackRef} onScroll={onScroll}>
        {photos.map((w, i) => (
          <div className="wframe rv" key={w.label} style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
            <Shot tone="jungle" label={w.label} src={w.src} />
          </div>
        ))}
      </div>
      <div className="walkdots">
        {photos.map((w, i) => (
          <button
            key={w.label}
            type="button"
            className={i === active ? "active" : undefined}
            onClick={() => goTo(i)}
            aria-label={`Go to nature walk photo ${i + 1} of ${photos.length}`}
            aria-current={i === active ? "true" : undefined}
          />
        ))}
      </div>
    </>
  );
}
