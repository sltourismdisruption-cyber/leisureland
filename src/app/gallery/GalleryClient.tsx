"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react/ssr";
import PageHero from "@/components/PageHero";
import { messages } from "@/lib/constants";

type Photo = { label: string; src: string; w: number; h: number };

// Every photo is already approved and live elsewhere on the site. One
// continuous wall, deliberately mixed (park, rooms, food, land) so the scroll
// never turns into a run of one subject. w/h are the real pixel dimensions so
// each photo keeps its natural shape instead of being cropped to a square.
const PHOTOS: Photo[] = [
  { label: "The Jungle Plunge, rainbow in the spray", src: "/images/day-outing/hero/jungle-plunge-pov-rainbow.jpg", w: 1440, h: 2560 },
  { label: "The A-frame villa at night", src: "/images/accommodation/hero/a-frame-villa-exterior-night.jpg", w: 2560, h: 1440 },
  { label: "A Sri Lankan buffet spread", src: "/images/sri-lankan-buffet-spread_2.jpg", w: 1707, h: 960 },
  { label: "The rope course above the slide", src: "/images/our-story/nature/giant-tree-jungle-canopy.jpg", w: 1440, h: 2560 },
  { label: "The Twister, mid-ride", src: "/images/day-outing/activities/the-twister/twister-duo-jungle-sky.jpg", w: 1928, h: 2560 },
  { label: "Pool view room, pool and paddy", src: "/images/accommodation/rooms/family-room-pool-view/poolview-pool-paddy-pro.jpg", w: 2560, h: 1707 },
  { label: "Aerial view, pools and slide", src: "/images/our-story/final-cta/aerial-drone-pools-with-slide.jpg", w: 2560, h: 1920 },
  { label: "Making hibiscus drink the traditional way", src: "/images/day-outing/buffet/hibiscus-drink-making.jpg", w: 1080, h: 1920 },
  { label: "Tarzan jump, mid air", src: "/images/day-outing/activities/tarzan-jump/tarzan-swing-mid-flight.jpg", w: 1080, h: 1920 },
  { label: "The A-frame's iconic gable window bed", src: "/images/accommodation/a-frame-villa/a-frame-iconic-gable-bed.jpg", w: 1440, h: 2560 },
  { label: "Sunset over the paddy fields", src: "/images/home/final-cta/Sunset-Paddy.jpg", w: 1920, h: 1080 },
  { label: "From our kitchen", src: "/images/food/hero/Hero-Kitchen.jpg", w: 2560, h: 1440 },
  { label: "Rope walking over the pool", src: "/images/day-outing/activities/rope-walking/rope-walking-full-view.jpg", w: 2560, h: 1440 },
  { label: "Picking rambutan by hand", src: "/images/woman-picking-rambutan.jpg", w: 1080, h: 1920 },
  { label: "Room balcony, jungle view", src: "/images/our-story/stay-ethos/room-balcony-jungle-view.jpg", w: 1707, h: 2560 },
  { label: "The Jungle Plunge, splashdown", src: "/images/day-outing/activities/jungle-plunge/jungle-plunge-slide-exit.jpg", w: 1920, h: 2560 },
  { label: "Guests feasting together", src: "/images/day-outing/moments/group-feast-buffet-table.jpg", w: 1440, h: 2560 },
  { label: "Palm weaving, a traditional craft", src: "/images/our-story/hero/palm-weaving-craft-workers.jpg", w: 1920, h: 1080 },
  { label: "Paddy view room, grounds and pool", src: "/images/accommodation/rooms/family-room-paddy-view/paddyview-grounds-pool-lawn.jpg", w: 1600, h: 1200 },
  { label: "Waterfall massage", src: "/images/day-outing/activities/waterfall-massage/couple-waterfall-romantic.jpg", w: 2560, h: 1920 },
  { label: "A garden lizard, spotted on the grounds", src: "/images/garden-lizard-wildlife.jpg", w: 1440, h: 2560 },
  { label: "The buffet spread, wide", src: "/images/Buffet-Wide.jpg", w: 1920, h: 1080 },
  { label: "The A-frame among the trees", src: "/images/accommodation/a-frame-villa/a-frame-exterior-day-trees.jpg", w: 720, h: 1280 },
  { label: "Up in the tree house", src: "/images/treehouse-canopy-professional.jpg", w: 1707, h: 2133 },
  { label: "A jackfruit, opened by hand", src: "/images/jackfruit-opened-hands.jpg", w: 1928, h: 2560 },
  { label: "Family eating together", src: "/images/food/final-cta/Eating-Family.jpg", w: 1920, h: 1080 },
  { label: "Apartment triple room, mezzanine", src: "/images/accommodation/rooms/apartment-style-triple-room/apt-triple-mezzanine-wide.jpg", w: 963, h: 1280 },
  { label: "Splashdown off the slide", src: "/images/day-outing/moments/woman-slide-splashdown.jpg", w: 960, h: 1280 },
  { label: "Wandering the jungle with a camera", src: "/images/woman-jungle-photography.jpg", w: 1440, h: 2560 },
  { label: "Starfruit, picked straight from the tree", src: "/images/starfruit-picking-tree.jpg", w: 1440, h: 2560 },
  { label: "The A-frame's marble bathroom", src: "/images/accommodation/a-frame-villa/a-frame-bathroom-marble.jpg", w: 1440, h: 2560 },
  { label: "Ceylon cinnamon", src: "/images/Cinnamon.jpg", w: 1200, h: 1380 },
];

// Masonry by hand: each photo goes to the currently shortest column, so the
// wall reads left to right in PHOTOS order.
function distribute(count: number): number[][] {
  const cols: number[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  PHOTOS.forEach((p, i) => {
    const shortest = heights.indexOf(Math.min(...heights));
    cols[shortest].push(i);
    heights[shortest] += p.h / p.w;
  });
  return cols;
}

const COLS_WIDE = distribute(3);
const COLS_NARROW = distribute(2);
const NARROW_QUERY = "(max-width: 900px)";

// Server render and first paint use the 3-column wall; phones swap to 2
// columns on hydration (the wall starts below a full-height hero, so the
// swap happens off screen).
function subscribeNarrow(onChange: () => void) {
  const mq = window.matchMedia(NARROW_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
const isNarrow = () => window.matchMedia(NARROW_QUERY).matches;

const Chevron =({ dir }: { dir: "left" | "right" }) =>
  dir === "left" ? (
    <CaretLeftIcon size="100%" weight="bold" aria-hidden="true" />
  ) : (
    <CaretRightIcon size="100%" weight="bold" aria-hidden="true" />
  );

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Lock page scroll, Escape to close, arrow keys to move through every photo.
  useEffect(() => {
    if (lightbox === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : Math.min(i + 1, PHOTOS.length - 1)));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : Math.max(i - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const narrow = useSyncExternalStore(subscribeNarrow, isNarrow, () => false);
  const cols = narrow ? COLS_NARROW : COLS_WIDE;
  const open = lightbox !== null ? PHOTOS[lightbox] : null;

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

      <section className="gallery-band" aria-label="Photo gallery">
        <div className="gallery-wrap">
          <div className="gallery-wall">
            {cols.map((col, ci) => (
              <div key={ci} className="gallery-col">
                {col.map((i, row) => {
                  const p = PHOTOS[i];
                  return (
                    <button
                      type="button"
                      key={p.src}
                      className="gallery-tile"
                      onClick={() => setLightbox(i)}
                      aria-label={`Open photo: ${p.label}`}
                    >
                      {/* Top two rows sit right under the hero: load them
                          eagerly, native lazy-loading sometimes never starts
                          images already in view on first paint. */}
                      <Image
                        src={p.src}
                        alt={`${p.label} at Leisure Land, Galle`}
                        width={p.w}
                        height={p.h}
                        sizes="(max-width: 900px) 50vw, (max-width: 1380px) 33vw, 440px"
                        loading={row < 2 ? "eager" : "lazy"}
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {open && lightbox !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${open.label}, photo ${lightbox + 1} of ${PHOTOS.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <figure className="glb">
            <Image
              key={open.src}
              src={open.src}
              alt={`${open.label} at Leisure Land, Galle`}
              width={open.w}
              height={open.h}
              sizes="90vw"
              priority
            />
            <figcaption>{open.label}</figcaption>
          </figure>
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
            onClick={() => setLightbox(Math.min(lightbox + 1, PHOTOS.length - 1))}
            disabled={lightbox === PHOTOS.length - 1}
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
            {lightbox + 1} / {PHOTOS.length}
          </span>
        </div>
      ) : null}
    </>
  );
}
