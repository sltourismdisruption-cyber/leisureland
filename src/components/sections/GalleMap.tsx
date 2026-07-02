import type { CSSProperties, ReactNode } from "react";

/**
 * Journey rows: each destination's dotted tuk tuk trail is as long as the ride
 * (minutes), so near and far read at a glance. Replaces the earlier schematic
 * map, which implied a geography it didn't actually have.
 */

type Dest = { name: string; min: number; icon: ReactNode };

const DESTS: Dest[] = [
  {
    name: "Unawatuna Beach",
    min: 10,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 15q4.5-5 9 0t9 0" />
      </svg>
    ),
  },
  {
    name: "Galle Fort",
    min: 15,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 19V5" />
        <path d="M8 6l7 2.5L8 11" />
        <path d="M4.5 19h8" />
      </svg>
    ),
  },
  {
    name: "Jungle Beach",
    min: 10,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18C5 10.5 11 5.5 19 6c-.5 7.5-6.5 12.5-14 12Z" />
        <path d="M7.5 15.5C10 12 13.5 9.5 17.5 8" />
      </svg>
    ),
  },
  {
    name: "Turtle Hatchery",
    min: 15,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 14a6.5 5.5 0 0 1 13 0" />
        <path d="M3.5 14h17" />
        <path d="M18.5 11.5l2-1.5" />
      </svg>
    ),
  },
  {
    name: "Stilt Fisherman",
    min: 15,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 19V5" />
        <path d="M6.5 9.5h7" />
        <circle cx="15.5" cy="7" r="1.8" />
        <path d="M4 19q4-4 8 0t8 0" />
      </svg>
    ),
  },
  {
    name: "Coconut Tree Hill",
    min: 20,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V8" />
        <path d="M12 8C9.5 5 6 5 4.5 7.5" />
        <path d="M12 8c2.5-3 6-3 7.5-.5" />
        <path d="M5 19h14" />
      </svg>
    ),
  },
];

// Trail length ratio: minutes over the farthest ride (20), so the longest
// trail fills the space left after the time text and the rest stay proportional.
const trailRatio = (min: number) => String(min / 20);

export default function GalleMap() {
  return (
    <section className="galle" id="galle">
      <div className="wrap">
        <h2 className="rv">Stay with us, see all of Galle.</h2>
        <p className="lede rv">
          Almost everything worth seeing is 10 to 20 minutes away. Tell us what you like and we&apos;ll
          arrange a vehicle.
        </p>

        <div className="mappanel rv">
          <div className="gx-base">
            <svg className="gx-pin" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" fill="none" stroke="var(--cta)" strokeWidth="2.5" />
              <circle cx="12" cy="12" r="4" fill="var(--cta)" />
            </svg>
            <b>Leisure Land</b>
            <span className="hand">deep in the jungle, 10 min off the highway</span>
          </div>
          <ul className="gx-list">
            {DESTS.map((d, i) => (
              <li
                className="gx-row rv"
                key={d.name}
                style={{ transitionDelay: `${i * 70}ms`, "--ratio": trailRatio(d.min) } as CSSProperties}
              >
                <span className="gx-name">
                  <span className="gx-ic">{d.icon}</span>
                  {d.name}
                </span>
                <span className="gx-bar">
                  <span className="gx-trail" aria-hidden="true" />
                  <span className="gx-time hand">about {d.min} minutes</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="after rv">
          Bicycles, custom day plans, and the spots most tourists never find. Just ask.
        </p>
        <p className="after rv">
          Landing in Colombo or Mattala? We arrange airport pickups and drop-offs too, just tell us
          your flight when you book.
        </p>
        <p className="after rv" style={{ color: "var(--ink)", fontWeight: 600 }}>
          Skip the boring landmarks. Come and collect stories you&apos;ll tell for a lifetime.
        </p>
      </div>
    </section>
  );
}
