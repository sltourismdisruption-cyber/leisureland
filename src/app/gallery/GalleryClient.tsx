"use client";

import { useEffect, useState } from "react";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react/ssr";
import PageHero from "@/components/PageHero";
import Shot from "@/components/Shot";
import { messages, type Tone } from "@/lib/constants";

type Photo = { tone: Tone; label: string; src: string };
type Category = { name: string; lede: string; photos: Photo[] };

// Every photo below is already approved and live elsewhere on the site
// (pulled from content/pages/*.json) — nothing new is introduced here, this
// page just gathers the best of it in one place for visitors who came
// looking for photos specifically (real, recurring search demand that had
// nowhere to land after /gallery/ stopped being a page).
const CATEGORIES: Category[] = [
  {
    name: "Water Park",
    lede: "Slides, pools, and the old games that make a day here different.",
    photos: [
      { tone: "water", label: "The Jungle Plunge, rainbow in the spray", src: "/images/day-outing/hero/jungle-plunge-pov-rainbow.jpg" },
      { tone: "water", label: "The Jungle Plunge, splashdown", src: "/images/day-outing/activities/jungle-plunge/jungle-plunge-slide-exit.jpg" },
      { tone: "water", label: "The Twister, mid-ride", src: "/images/day-outing/activities/the-twister/twister-duo-jungle-sky.jpg" },
      { tone: "jungle", label: "Tarzan jump, mid air", src: "/images/day-outing/activities/tarzan-jump/tarzan-swing-mid-flight.jpg" },
      { tone: "jungle", label: "Rope walking over the pool", src: "/images/day-outing/activities/rope-walking/rope-walking-full-view.jpg" },
      { tone: "water", label: "Waterfall massage", src: "/images/day-outing/activities/waterfall-massage/couple-waterfall-romantic.jpg" },
      { tone: "water", label: "Splashdown off the slide", src: "/images/day-outing/moments/woman-slide-splashdown.jpg" },
      { tone: "jungle", label: "Up in the tree house", src: "/images/treehouse-canopy-professional.jpg" },
    ],
  },
  {
    name: "Stay",
    lede: "Rooms in the jungle, paddy views, pool views, and the whole park a few steps away.",
    photos: [
      { tone: "jungle", label: "The A-frame villa at night", src: "/images/accommodation/hero/a-frame-villa-exterior-night.jpg" },
      { tone: "jungle", label: "The A-frame among the trees", src: "/images/accommodation/a-frame-villa/a-frame-exterior-day-trees.jpg" },
      { tone: "jungle", label: "The A-frame's iconic gable window bed", src: "/images/accommodation/a-frame-villa/a-frame-iconic-gable-bed.jpg" },
      { tone: "gold", label: "Paddy view room, grounds and pool", src: "/images/accommodation/rooms/family-room-paddy-view/paddyview-grounds-pool-lawn.jpg" },
      { tone: "water", label: "Pool view room, pool and paddy", src: "/images/accommodation/rooms/family-room-pool-view/poolview-pool-paddy-pro.jpg" },
      { tone: "jungle", label: "Apartment triple room, mezzanine", src: "/images/accommodation/rooms/apartment-style-triple-room/apt-triple-mezzanine-wide.jpg" },
      { tone: "jungle", label: "Room balcony, jungle view", src: "/images/our-story/stay-ethos/room-balcony-jungle-view.jpg" },
      { tone: "jungle", label: "The A-frame's marble bathroom", src: "/images/accommodation/a-frame-villa/a-frame-bathroom-marble.jpg" },
    ],
  },
  {
    name: "Food",
    lede: "Real Sri Lankan food, cooked from scratch, table by table.",
    photos: [
      { tone: "food", label: "From our kitchen", src: "/images/food/hero/Hero-Kitchen.jpg" },
      { tone: "food", label: "The buffet spread, wide", src: "/images/Buffet-Wide.jpg" },
      { tone: "food", label: "A Sri Lankan buffet spread", src: "/images/sri-lankan-buffet-spread_2.jpg" },
      { tone: "food", label: "Guests feasting together", src: "/images/day-outing/moments/group-feast-buffet-table.jpg" },
      { tone: "gold", label: "Making hibiscus drink the traditional way", src: "/images/day-outing/buffet/hibiscus-drink-making.jpg" },
      { tone: "gold", label: "Starfruit, picked straight from the tree", src: "/images/starfruit-picking-tree.jpg" },
      { tone: "food", label: "Family eating together", src: "/images/food/final-cta/Eating-Family.jpg" },
      { tone: "gold", label: "Ceylon cinnamon", src: "/images/Cinnamon.jpg" },
    ],
  },
  {
    name: "The Land",
    lede: "The jungle, the paddy fields, and everything growing between them.",
    photos: [
      { tone: "jungle", label: "A giant tree in the jungle canopy", src: "/images/our-story/nature/giant-tree-jungle-canopy.jpg" },
      { tone: "jungle", label: "Palm weaving, a traditional craft", src: "/images/our-story/hero/palm-weaving-craft-workers.jpg" },
      { tone: "jungle", label: "A garden lizard, spotted on the grounds", src: "/images/garden-lizard-wildlife.jpg" },
      { tone: "jungle", label: "Wandering the jungle with a camera", src: "/images/woman-jungle-photography.jpg" },
      { tone: "jungle", label: "Picking rambutan by hand", src: "/images/woman-picking-rambutan.jpg" },
      { tone: "gold", label: "A jackfruit, opened by hand", src: "/images/jackfruit-opened-hands.jpg" },
      { tone: "water", label: "Aerial view, pools and slide", src: "/images/our-story/final-cta/aerial-drone-pools-with-slide.jpg" },
      { tone: "gold", label: "Sunset over the paddy fields", src: "/images/home/final-cta/Sunset-Paddy.jpg" },
    ],
  },
];

const ALL_PHOTOS: Photo[] = CATEGORIES.flatMap((c) => c.photos);

const Chevron = ({ dir }: { dir: "left" | "right" }) =>
  dir === "left" ? (
    <CaretLeftIcon size="100%" weight="bold" aria-hidden="true" />
  ) : (
    <CaretRightIcon size="100%" weight="bold" aria-hidden="true" />
  );

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Same lightbox behaviour as RoomGallery: lock page scroll, Escape to
  // close, arrow keys to move through the full photo list (not just the
  // category the visitor opened it from).
  useEffect(() => {
    if (lightbox === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : Math.min(i + 1, ALL_PHOTOS.length - 1)));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  // Start index of each category within ALL_PHOTOS, computed once per render
  // (no mutation during the JSX map below).
  const startIndexes = CATEGORIES.reduce<number[]>((acc, cat, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + CATEGORIES[i - 1].photos.length);
    return acc;
  }, []);

  return (
    <>
      <PageHero
        tone="water"
        shotLabel="gallery hero: aerial, pools and jungle"
        src="/images/events/final-cta/aerial-topdown-pools-2019.jpg"
        title="See It For Yourself."
        sub="Every corner of the water park, the rooms, the food, and the jungle around it, in one place."
        ctaLabel="WhatsApp to book your day"
        message={messages.book}
        edgeFill="mist"
      />

      {CATEGORIES.map((cat, ci) => {
        const startIndex = startIndexes[ci];
        return (
          <section key={cat.name} className={ci % 2 === 1 ? "band-card" : undefined} id={cat.name.toLowerCase().replace(/\s+/g, "-")}>
            <div className="wrap">
              <h2 className="rv">{cat.name}</h2>
              <p className="lede rv">{cat.lede}</p>
              <div className="photo-grid">
                {cat.photos.map((p, i) => (
                  <button
                    type="button"
                    key={p.src}
                    className="photo-tile rv"
                    style={{ transitionDelay: `${(i % 4) * 70}ms` }}
                    onClick={() => setLightbox(startIndex + i)}
                    aria-label={`Open photo: ${p.label}`}
                  >
                    <div className="frame">
                      <Shot tone={p.tone} label={p.label} src={p.src} alt={`${p.label} at Leisure Land, Galle`} sizes="(max-width: 720px) 50vw, 25vw" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {lightbox !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${ALL_PHOTOS[lightbox].label}, photo ${lightbox + 1} of ${ALL_PHOTOS.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <div className="lb-frame">
            <Shot
              tone={ALL_PHOTOS[lightbox].tone}
              label={ALL_PHOTOS[lightbox].label}
              src={ALL_PHOTOS[lightbox].src}
              alt={`${ALL_PHOTOS[lightbox].label} at Leisure Land, Galle`}
              sizes="90vw"
            />
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
            onClick={() => setLightbox(Math.min(lightbox + 1, ALL_PHOTOS.length - 1))}
            disabled={lightbox === ALL_PHOTOS.length - 1}
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
            <XIcon size="100%" weight="regular" aria-hidden="true" />
          </button>
          <span className="lb-count" aria-hidden="true">
            {lightbox + 1} / {ALL_PHOTOS.length}
          </span>
        </div>
      ) : null}
    </>
  );
}
