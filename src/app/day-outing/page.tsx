import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { messages, dayPricing, dayHours, menu, type Tone } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your Day at Leisure Land · Water Park Day Outing near Galle",
  description:
    "One ticket, a full day: slides, waterfall pools, traditional Sri Lankan games and an all-you-can-eat buffet, 10 minutes from Galle. 4,200 LKR per person.",
};

/*
  Band order: hero(photo) > day flow(mist) > every activity(card) >
  buffet(mist) > pricing(card) > know before you go(mist-deep) >
  final(photo) > footer via treeline
*/

// Doc 05 §2: moments, never a schedule. No clock times anywhere on this page
// outside the pricing section.
const MOMENTS: { title: string; body: string; tone: Tone; shot: string; src: string }[] = [
  {
    title: "Arrive and breathe.",
    body: "Fresh fruit juice in hand, jungle all around.",
    tone: "gold",
    shot: "moments set: welcome juice being handed over, portrait",
    src: "/assets/photos/hero-lagoon.jpg",
  },
  {
    title: "Play.",
    body: "Slides, waterfall pools, cable bridges, tree house. Go at your own pace.",
    tone: "water",
    shot: "shot 08: splashdown, speed slide, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    title: "Feast.",
    body: "A Sri Lankan lunch buffet, ask for spicy or mild, both authentic.",
    tone: "food",
    shot: "moments set: buffet being served onto a plate, portrait",
    src: "/assets/photos/bbq-bonfire.jpg",
  },
  {
    title: "More play.",
    body: "Kotta Pora pillow fights, Tarzan jumps, rope walking, paddy swings.",
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
  {
    title: "Wind down.",
    body: "Black tea or coffee as the light goes golden.",
    tone: "gold",
    shot: "moments set: evening tea at golden hour, portrait",
    src: "/assets/photos/aerial-pools.jpg",
  },
];

// All 10 activities in Doc 05 order. The two traditional games carry the
// inline flag label (the one allowed emoji, treated as content).
const ACTIVITIES: {
  name: string;
  body: string;
  traditional?: boolean;
  tone: Tone;
  shot: string;
  src: string;
}[] = [
  {
    name: "Speed slide",
    body: "The fast one. A steep run, a big splash, and a story to tell. For the daredevils in the group.",
    tone: "water",
    shot: "shot 08: splashdown, speed slide, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    name: "Family slide",
    body: "Wider and gentler, built for everyone. Race your kids down it, then go again.",
    tone: "water",
    shot: "family slide, everyone racing, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    name: "Waterfall pools",
    body: "Bathe under flowing water with the jungle overhead. As close to a wild river bath as a pool gets.",
    tone: "water",
    shot: "shot 06: under the waterfall, portrait",
    src: "/assets/photos/natural-waterfall.jpg",
  },
  {
    name: "Pool volleyball & basketball",
    body: "A net, a hoop, and water where the floor should be. Pick teams and settle it properly.",
    tone: "water",
    shot: "pool volleyball mid-rally, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
  {
    name: "Cable bridges",
    body: "Wobble your way across cables strung through the trees. Part walk, part balance test.",
    tone: "jungle",
    shot: "cable bridge crossing, portrait",
    src: "/assets/photos/coconut-climb.jpg",
  },
  {
    name: "Tree house",
    body: "Climb into the canopy and take in the whole park from above. The quiet spot when you need a breather.",
    tone: "jungle",
    shot: "shot 07: up in the tree house, portrait",
    src: "/assets/photos/coconut-climb.jpg",
  },
  {
    name: "Rope walking",
    body: "For generations, toddy tappers crossed between coconut palms on two ropes, feet on one, hands on the other. Ours is strung over the pool. Make it across, or make a splash trying.",
    traditional: true,
    tone: "jungle",
    shot: "shot 02: feet on the lower rope, hands on the top rope, halfway across",
    src: "/assets/photos/rope-swing.jpg",
  },
  {
    name: "Paddy field swings",
    body: "Swing out over the rice fields with the jungle at your back. The view does the talking.",
    tone: "gold",
    shot: "shot 05, portrait crop: swing out over the paddy",
    src: "/assets/photos/aerial-pools.jpg",
  },
  {
    name: "Tarzan jump",
    body: "Grab the rope, swing wide, let go. The splash is half the fun, the flight is the other half.",
    tone: "jungle",
    shot: "shot 04: mid air, rope released, portrait",
    src: "/assets/photos/waterfall-jump.jpg",
  },
  {
    name: "Kotta Pora",
    body: "A pillow fight on a log above the water, the game villages played at Avurudu, the Sri Lankan New Year. Last one dry wins.",
    traditional: true,
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
];

// Know before you go: the warm version of the rules (Doc 05 §6). Emoji in the
// brief are editorial notes, not UI, so these are plain prose rows.
const RULES: { rule: string; detail: string }[] = [
  { rule: "Bring ID", detail: "Anyone 18 or over needs one: NIC, license or passport." },
  { rule: "Swimwear in the pools", detail: "Swimwear or silk suits only. No denim, cotton or shawls, they're unsafe on the slides." },
  { rule: "Towels", detail: "Not included, bring your own." },
  { rule: "Alcohol", detail: "After 2 pm only, never before or during activities. No activities after drinking, safety first." },
  { rule: "Lifeguards", detail: "On duty all day. The deep pool closes at 6:30 pm, once the light goes." },
  { rule: "Under 18s", detail: "Come along with a parent or guardian." },
  { rule: "Gold jewelry", detail: "Best left at home." },
];

export default function DayOuting() {
  return (
    <>
      <PageHero
        tone="water"
        shotLabel="day-outing hero: best action or joy shot from the shoot"
        src="/assets/photos/slide.jpg"
        title="Your Day at Leisure Land"
        sub="One ticket. A full day of slides, traditional games, jungle, and a proper Sri Lankan feast."
        ctaLabel="WhatsApp to book your day"
        message={messages.book}
        edgeFill="mist"
      />

      <section id="day-flow">
        <div className="wrap">
          <h2 className="rv">How your day flows.</h2>
          <p className="lede rv">No schedule, no rush. The day moves the way you want it to.</p>
          <div className="moments">
            {MOMENTS.map((m) => (
              <div className="moment rv" key={m.title}>
                <div className="m-photo">
                  <Shot tone={m.tone} label={m.shot} src={m.src} />
                </div>
                <div className="m-txt">
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="moments-after rv">
            Leave happy. Or ask us about the evening session instead.
          </p>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="activities">
        <div className="wrap">
          <h2 className="rv">Every activity, properly.</h2>
          <p className="lede rv">
            Ten ways to spend the day, from the slides you know to the old games you don&apos;t.
          </p>
          <div className="allacts">
            {ACTIVITIES.map((a, i) => (
              <div className="act-card rv" key={a.name} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <div className="frame">
                  <Shot tone={a.tone} label={a.shot} src={a.src} />
                </div>
                <h3>{a.name}</h3>
                {a.traditional ? <span className="tag">🇱🇰 Traditional Sri Lankan game</span> : null}
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mist" />

      <section id="buffet">
        <div className="wrap">
          <h2 className="rv">One buffet, your way.</h2>
          <p className="lede rv">
            Our buffet is authentic Sri Lankan, cooked from scratch with zero artificial flavors.
            Tell us your preference, fiery Sri Lankan-style or the milder version foreigners love.
            Same dishes, same soul, your spice.
          </p>
          <div className="food-hero rv">
            <Shot
              tone="food"
              label="shot 09: the buffet spread, wide, steam and all"
              src="/assets/photos/bbq-bonfire.jpg"
            />
          </div>
          <div className="pair">
            <div className="rv">
              <div className="pframe">
                <Shot tone="food" label="food set: the spicy plate, portrait" src="/assets/photos/bbq-bonfire.jpg" />
              </div>
              <p className="pcap">Spicy, the Sri Lankan way</p>
            </div>
            <div className="rv" style={{ transitionDelay: "90ms" }}>
              <div className="pframe">
                <Shot tone="gold" label="food set: the mild plate, portrait" src="/assets/photos/hero-lagoon.jpg" />
              </div>
              <p className="pcap">Mild, and still authentic</p>
            </div>
          </div>
          <ul className="menu-list rv">
            {menu.map((m) => (
              <li key={m.dish}>
                <b>{m.dish}</b>
                <span>{m.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="pricing">
        <div className="wrap">
          <h2 className="rv">What your day costs.</h2>
          <p className="lede rv">Priced by height, and everything above is included. No hidden costs.</p>
          <div className="price-rows rv">
            {dayPricing.map((p) => (
              <div className="price-row" key={p.height}>
                <div>
                  <b>{p.height}</b>
                  <span className="pr-note">{p.note}</span>
                </div>
                <span className="pr-price">
                  {p.price === "4,200 LKR" ? (
                    <Underline variant="price">{p.price}</Underline>
                  ) : (
                    p.price
                  )}
                </span>
              </div>
            ))}
          </div>
          <p className="hours-line rv">
            {dayHours.regular}. {dayHours.evening}.
          </p>
          <div className="book-box rv">
            <b>To book, WhatsApp us:</b>
            <p>Date · Number of people · Your name</p>
            <WhatsAppPill message={messages.book} big>
              WhatsApp to book your day
            </WhatsAppPill>
          </div>
        </div>
      </section>

      <SectionEdge from="card" to="mistDeep" />

      <section className="band-deep" id="rules">
        <div className="wrap">
          <h2 className="rv">Know before you go.</h2>
          <p className="lede rv">
            A few things that keep the day safe and easy for everyone.
          </p>
          <div className="rules-list">
            {RULES.map((r, i) => (
              <div className="rule-row rv" key={r.rule} style={{ transitionDelay: `${i * 50}ms` }}>
                <b>{r.rule}</b>
                <p>{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsStrip />
      <FinalCta edgeFill="mistDeep" />
    </>
  );
}
