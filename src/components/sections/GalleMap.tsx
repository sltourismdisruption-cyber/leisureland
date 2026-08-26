import type { CSSProperties, ReactNode } from "react";
import { WavesIcon, FlagIcon, RoadHorizonIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import { GALLE_DISTANCES } from "@/lib/constants";

/**
 * Journey rows: each place's dotted tuk tuk trail is as long as the ride
 * (minutes), so near and far read at a glance. The places and times come from
 * lib/constants (GALLE_DISTANCES) so this list and the homepage "getting here"
 * section always agree; the icon per place is matched by name below.
 *
 * Generic places (roads, flags, beaches) use Phosphor icons; Turtle Hatchery
 * and Stilt Fisherman stay hand-drawn — no icon library has a turtle or a
 * stilt-fisherman glyph, and a generic stand-in would lose what makes them
 * recognizable. See .lib-icon in globals.css.
 */

const ICONS: Record<string, { icon: ReactNode; lib?: boolean }> = {
  "Katugoda Surfing Beach": { lib: true, icon: <WavesIcon size="100%" weight="regular" /> },
  "Galle Highway exit": { lib: true, icon: <RoadHorizonIcon size="100%" weight="regular" /> },
  "Galle Fort": { lib: true, icon: <FlagIcon size="100%" weight="regular" /> },
  "Unawatuna Beach": { lib: true, icon: <WavesIcon size="100%" weight="regular" /> },
  "Jungle Beach": { lib: true, icon: <WavesIcon size="100%" weight="regular" /> },
  "Turtle Hatchery": {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 14a6.5 5.5 0 0 1 13 0" />
        <path d="M3.5 14h17" />
        <path d="M18.5 11.5l2-1.5" />
      </svg>
    ),
  },
  "Stilt Fisherman": {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 19V5" />
        <path d="M6.5 9.5h7" />
        <circle cx="15.5" cy="7" r="1.8" />
        <path d="M4 19q4-4 8 0t8 0" />
      </svg>
    ),
  },
};

// Trail length ratio: minutes over the farthest ride (15), so the longest
// trail fills the space left after the time text and the rest stay proportional.
const trailRatio = (min: number) => String(min / 15);

export default function GalleMap() {
  return (
    <section className="galle" id="galle">
      <div className="wrap">
        <h2 className="rv">Stay with us, see all of Galle.</h2>
        <p className="lede rv">
          Almost everything worth seeing is 10 to 15 minutes away. Tell us what you like and
          we&apos;ll arrange a vehicle.
        </p>

        <div className="mappanel rv">
          <div className="gx-base">
            <MapPinIcon className="gx-pin" weight="fill" aria-hidden="true" />
            <b>Leisure Land</b>
            <span className="hand">deep in the jungle, 6 min off the highway</span>
          </div>
          <ul className="gx-list">
            {GALLE_DISTANCES.map((d, i) => (
              <li
                className="gx-row rv"
                key={d.name}
                style={{ transitionDelay: `${i * 70}ms`, "--ratio": trailRatio(d.min) } as CSSProperties}
              >
                <span className="gx-name">
                  <span className={ICONS[d.name]?.lib ? "gx-ic lib-icon" : "gx-ic"}>{ICONS[d.name]?.icon}</span>
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
