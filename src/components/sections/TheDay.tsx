import type { ReactNode } from "react";
import Link from "next/link";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

// Moment-based flow per Doc 05 §2: no clock times anywhere in this section.
// Operating hours live in the /day-outing pricing section, FAQ and footer.
type Moment = { icon: ReactNode; title: string; body: string };

const MOMENTS: Moment[] = [
  {
    title: "Arrive and breathe.",
    body: "Fresh fruit juice in hand, jungle all around.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M16 15h16l-2.4 22.5c-.3 3-2.4 4.5-5.6 4.5s-5.3-1.5-5.6-4.5L16 15z" />
        <path d="M27 15l6-10" />
        <path d="M18.5 23.5h11" />
        <path d="M16.5 12.5c-3.5-4-8-5-10.5-3" />
      </svg>
    ),
  },
  {
    title: "Play.",
    body: "Slides, waterfall pools, cable bridges, tree house. Go at your own pace.",
    // tree house: a house nested in a round canopy, trunk dropping to the ground
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="18" r="13" />
        <path d="M24 31v11" />
        <path d="M18 22l6-5 6 5" />
        <path d="M20 21v6h8v-6" />
        <path d="M23 27v-3h2v3" />
        <path d="M18 42h12" />
      </svg>
    ),
  },
  {
    title: "Feast.",
    body: "A Sri Lankan lunch buffet, ask for spicy or mild, both authentic.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 23h24v5.5C36 36 31 41 24 41s-12-5-12-12.5V23z" />
        <path d="M9.5 23h29" />
        <path d="M21.5 18h5" />
        <path d="M19 13c0-3 2-3 2-6" />
        <path d="M28 13c0-3 2-3 2-6" />
      </svg>
    ),
  },
  {
    title: "More play.",
    body: "Kotta Pora pillow fights, Tarzan jumps, rope walking, paddy swings.",
    // Tarzan: a rope from above with a figure gripping it, mid-swing
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M34 5C31 14 27 19 22 22" />
        <circle cx="19" cy="24" r="3" />
        <path d="M21 22c3-1 6-4 9-7" />
        <path d="M19 27v6" />
        <path d="M16 29l5 1" />
        <path d="M19 33l-4 6M19 33l4 5" />
      </svg>
    ),
  },
  {
    title: "Wind down.",
    body: "Black tea or coffee as the light goes golden.",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M11 24h20v5.5c0 6-4 10.5-10 10.5s-10-4.5-10-10.5V24z" />
        <path d="M31 26c4.5 0 6.5 2 6.5 4.2S35.5 34.5 31 34.5" />
        <path d="M9 43h26" />
        <path d="M18 18c0-3 2-3 2-6" />
        <path d="M26 18c0-3 2-3 2-6" />
      </svg>
    ),
  },
];

export default function TheDay() {
  return (
    <section className="day" id="day">
      <div className="wrap">
        <h2 className="rv">Here&apos;s how the day goes.</h2>
        <p className="lede rv">One price, one full day, zero hidden costs. Roughly, it looks like this:</p>

        <div className="timeline">
          {MOMENTS.map((m, i) => (
            <div className="stop rv" key={m.title} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="ic">{m.icon}</span>
              <div>
                <b>{m.title}</b>
                <p>{m.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="price-block rv">
          <div className="amount">
            All of it: <Underline variant="price">4,200 LKR</Underline> <em>(about $14)</em>
          </div>
          <p>The whole day, per person. Nothing to add on. Just bring swimwear and a towel.</p>
          <WhatsAppPill message={messages.checkDate} big>
            Check a date on WhatsApp
          </WhatsAppPill>
          <p className="rv">
            <Link className="section-link" href="/day-outing">
              Full details on our day outing page
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
