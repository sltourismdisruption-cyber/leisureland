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
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 9 C20 9 17 24 28 26 C37 27.5 41 33 41 39" />
        <path d="M7 15 C17 15 15.5 28 25 30" />
        <path d="M16 42c3-3 6-3 9 0" />
        <path d="M28 42c3-3 6-3 9 0" />
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
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 9v31" />
        <path d="M39 9v31" />
        <path d="M9 16 C19 22.5 29 22.5 39 16" />
        <path d="M9 30 C19 36.5 29 36.5 39 30" />
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
