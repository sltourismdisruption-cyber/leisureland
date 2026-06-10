import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionEdge from "@/components/SectionEdge";
import Shot from "@/components/Shot";
import Underline from "@/components/Underline";
import WhatsAppPill from "@/components/WhatsAppPill";
import ReviewsStrip from "@/components/ReviewsStrip";
import FinalCta from "@/components/sections/FinalCta";
import { messages, dayPricing, dayHours, poolOnlyEntry, type Tone } from "@/lib/constants";

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

// Doc 06 §1: the six-beat journey. Emotional, no clock times anywhere on this
// page outside the pricing section. (Doc 06 em dashes become commas/colons
// per the locked no-dash rule from the v1 handoff.)
const MOMENTS: { title: string; body: string; tone: Tone; shot: string; src: string }[] = [
  {
    title: "Arrive to Another World",
    body: "Step off the road and into the jungle. A cold welcome juice in your hand, birdsong overhead, the air suddenly greener. You made it.",
    tone: "jungle",
    shot: "moments set: welcome juice being handed over, portrait",
    src: "/assets/photos/hero-lagoon.jpg",
  },
  {
    title: "Chase the Rush",
    body: "Hit the slides. Feel your stomach drop as you race through the canopy and crash into cool water. Again? Obviously again.",
    tone: "water",
    shot: "The Jungle Plunge: splashdown, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    title: "Play Like a Kid Again",
    body: "Knock a friend off the log into the pool. Swing in like Tarzan. Balance the ancient rope walk. This is the stuff you'll still be laughing about next year.",
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
  {
    title: "Feast Together",
    body: "Gather around a real Sri Lankan spread, cooked from scratch. Spicy or mild, your call. Eat until you're happy.",
    tone: "food",
    shot: "moments set: buffet being served onto a plate, portrait",
    src: "/assets/photos/bbq-bonfire.jpg",
  },
  {
    title: "Let the Water Heal You",
    body: "Stand under the waterfall and let it massage your shoulders. Float. Breathe. Let the jungle do the rest.",
    tone: "water",
    shot: "waterfall massage shot: under the falls, shoulders and back, portrait",
    src: "/assets/photos/natural-waterfall.jpg",
  },
  {
    title: "Leave Lighter Than You Came",
    body: "A last cup of Ceylon tea as the light turns gold. You'll already be planning the next visit.",
    tone: "gold",
    shot: "moments set: evening tea at golden hour, portrait",
    src: "/assets/photos/aerial-pools.jpg",
  },
];

// All 12 activities. Doc 06: slides renamed (The Jungle Plunge / The Twister),
// pool sports split into two cards, the waterfall gets the therapeutic angle,
// Coconut Tree Climbing added. The flag labels are inline content, not badges.
const ACTIVITIES: {
  name: string;
  body: string;
  tag?: string;
  confirmNote?: string;
  tone: Tone;
  shot: string;
  src: string;
}[] = [
  {
    name: "The Jungle Plunge",
    body: "The fast one. A steep run, a big splash, and a story to tell. For the daredevils in the group.",
    tone: "water",
    shot: "The Jungle Plunge: splashdown, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    name: "The Twister",
    body: "Wider and gentler, built for everyone. Race your kids down it, then go again.",
    tone: "water",
    shot: "The Twister: mid-ride, portrait",
    src: "/assets/photos/slide.jpg",
  },
  {
    name: "The Waterfall: Nature's Massage",
    body: "Step beneath the cascading water and let it work. The falls pour over your shoulders and back like a natural massage, water therapy the way nature intended. Close your eyes, feel the rush, and let the tension melt into the pool. Surrounded by jungle, there's no spa quite like it.",
    tone: "water",
    shot: "waterfall massage shot: under the falls, blissful, portrait",
    src: "/assets/photos/natural-waterfall.jpg",
  },
  {
    name: "Pool Volleyball",
    body: "A net strung over the water. Pick teams, serve, and settle it properly.",
    tone: "water",
    shot: "pool volleyball, separate action shot, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
  {
    name: "Pool Basketball",
    body: "A hoop above the pool. Shoot, splash, and go again.",
    tone: "water",
    shot: "pool basketball, separate action shot, portrait",
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
    tag: "🇱🇰 Traditional Sri Lankan game",
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
    tag: "🇱🇰 Traditional Sri Lankan game",
    tone: "water",
    shot: "shot 03: mid pillow swing, both balanced, portrait",
    src: "/assets/photos/pool-volleyball.jpg",
  },
  {
    name: "Coconut Tree Climbing",
    body: "A traditional Sri Lankan skill, nearly lost to time and reintroduced here. Learn how generations scaled the palms, a real cultural adventure you won't find at any regular water park.",
    tag: "🇱🇰 Traditional Sri Lankan experience",
    confirmNote: '[CONFIRM] credit wording: original note said "reintroduced by National Inn"',
    tone: "jungle",
    shot: "coconut tree climbing: action, the climber up the palm, portrait",
    src: "/assets/photos/coconut-climb.jpg",
  },
];

// The photos that replace the text menu (Doc 06 §7): photography sells the
// food here; the full menu lives only on /food.
const FOOD_SHOTS: { tone: Tone; shot: string; src: string }[] = [
  { tone: "food", shot: "appealing food photo: dishes being served, squarish", src: "/assets/photos/bbq-bonfire.jpg" },
  { tone: "food", shot: "appealing food photo: drinks and bites by the pool, squarish", src: "/assets/photos/hero-lagoon.jpg" },
  { tone: "gold", shot: "appealing food photo: fresh fruit and juices, squarish", src: "/assets/photos/wildlife-lizard.jpg" },
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
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="activities">
        <div className="wrap">
          <h2 className="rv">Every activity, properly.</h2>
          <p className="lede rv">
            Twelve ways to spend the day, from the slides you know to the old games you don&apos;t.
          </p>
          <div className="allacts">
            {ACTIVITIES.map((a, i) => (
              <div className="act-card rv" key={a.name} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
                <div className="frame">
                  <Shot tone={a.tone} label={a.shot} src={a.src} />
                </div>
                <h3>{a.name}</h3>
                {a.tag ? <span className="tag">{a.tag}</span> : null}
                <p>{a.body}</p>
                {a.confirmNote ? <span className="confirm-note">{a.confirmNote}</span> : null}
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
            Tell us your preference, fiery Sri Lankan-style, or a gentler version loved by guests
            from around the world. Same dishes, same soul, your spice.
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

          <h3 className="sub rv" style={{ marginTop: 70 }}>Hungry? We&apos;ve got you, all day.</h3>
          <p className="sub-lede rv">
            Beyond the buffet, you can order food and drinks throughout the day. Just here for the
            pool? You can still grab whatever you fancy, food and beverages are available to all
            visitors.
          </p>
          <div className="food-details">
            {FOOD_SHOTS.map((f, i) => (
              <div className="detail rv" key={f.shot} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="frame">
                  <Shot tone={f.tone} label={f.shot} src={f.src} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionEdge from="mist" to="card" />

      <section className="band-card" id="pricing">
        <div className="wrap">
          <h2 className="rv">What your day costs.</h2>
          <p className="lede rv">Two simple options, side by side. Pick the day you want.</p>
          <div className="price-options">
            <div className="price-option rv">
              <h3>Full Day Pass</h3>
              <p className="opt-sub">
                Water park, buffet, welcome drink and evening tea. Everything included, no hidden
                costs. Priced by height.
              </p>
              <div className="price-rows">
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
            </div>
            <div className="price-option alt rv" style={{ transitionDelay: "90ms" }}>
              <h3>Pool-Only Ticket</h3>
              <p className="opt-sub">
                Just here for the water? Grab a pool-only ticket and order food and drinks from the
                menu whenever you like. Buffet not included.
              </p>
              <p className="entry-line">Entry: {poolOnlyEntry}</p>
              <span className="confirm-note">[PRICE] founder to provide the pool-only ticket price</span>
            </div>
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
