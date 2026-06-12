"use client";

import { useEffect, useRef, useState } from "react";
import Shot from "@/components/Shot";
import type { Tone } from "@/lib/constants";

export type GalleryPhoto = { tone: Tone; label: string; src?: string };

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {dir === "left" ? <path d="M14.5 5 8 12l6.5 7" /> : <path d="M9.5 5 16 12l-6.5 7" />}
  </svg>
);

/**
 * Multi-photo room gallery (Doc 06 §1): swipeable scroll-snap track with
 * arrows and a counter, and a tap-to-open lightbox with keyboard and swipe
 * navigation. Holds the 4-6 shots per room (bed, bathroom, view, detail).
 */
export default function RoomGallery({ photos, name }: { photos: GalleryPhoto[]; name: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollBehavior = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? ("auto" as const) : ("smooth" as const);

  const go = (dir: number) => {
    const t = trackRef.current;
    if (!t) return;
    // Read the live position (not React state) so rapid clicks never act on
    // a stale index mid-scroll.
    const cur = Math.round(t.scrollLeft / t.clientWidth);
    const next = Math.min(Math.max(cur + dir, 0), photos.length - 1);
    t.scrollTo({ left: next * t.clientWidth, behavior: scrollBehavior() });
  };

  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    setIndex(Math.min(Math.round(t.scrollLeft / t.clientWidth), photos.length - 1));
  };

  // Lightbox: lock page scroll, close on Escape, navigate with arrow keys.
  useEffect(() => {
    if (lightbox === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : Math.min(i + 1, photos.length - 1)));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, photos.length]);

  return (
    <>
      <div className="gal">
        <div className="gal-track" ref={trackRef} onScroll={onScroll}>
          {photos.map((p, i) => (
            <button
              type="button"
              className="gal-slide"
              key={p.label}
              onClick={() => setLightbox(i)}
              aria-label={`Open photo ${i + 1} of ${photos.length}, ${name}`}
            >
              <Shot tone={p.tone} label={p.label} src={p.src} />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="gal-btn prev"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label={`Previous photo of ${name}`}
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          className="gal-btn next"
          onClick={() => go(1)}
          disabled={index === photos.length - 1}
          aria-label={`Next photo of ${name}`}
        >
          <Chevron dir="right" />
        </button>
        <span className="gal-count" aria-hidden="true">
          {index + 1} / {photos.length}
        </span>
      </div>

      {lightbox !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} photos, ${lightbox + 1} of ${photos.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <div className="lb-frame">
            <Shot tone={photos[lightbox].tone} label={photos[lightbox].label} src={photos[lightbox].src} />
          </div>
          <button
            type="button"
            className="gal-btn lb-prev"
            onClick={() => setLightbox(Math.max(lightbox - 1, 0))}
            disabled={lightbox === 0}
            aria-label="Previous photo"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className="gal-btn lb-next"
            onClick={() => setLightbox(Math.min(lightbox + 1, photos.length - 1))}
            disabled={lightbox === photos.length - 1}
            aria-label="Next photo"
          >
            <Chevron dir="right" />
          </button>
          <button
            type="button"
            className="gal-btn lb-close"
            onClick={() => setLightbox(null)}
            aria-label="Close photos"
            autoFocus
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <span className="lb-count" aria-hidden="true">
            {lightbox + 1} / {photos.length}
          </span>
        </div>
      ) : null}
    </>
  );
}
