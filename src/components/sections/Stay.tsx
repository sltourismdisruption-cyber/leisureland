import Link from "next/link";
import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import { rooms, roomMessage, waLink, messages, type Tone, type ImgField } from "@/lib/constants";

// Exported: /accommodation renders the same four experiences in the same grid
// (handoff v2, hands-on Ceylon section).
export const STAY_ONLY: { tone: Tone; shot: string; src: string; nm: string; ds: string }[] = [
  { tone: "jungle", shot: "shot 16: hands on the cinnamon branch, portrait", src: "/assets/photos/wildlife-lizard.jpg", nm: "Pluck Ceylon cinnamon", ds: "straight from the tree" },
  { tone: "jungle", shot: "shot 17: picking tea leaves, portrait", src: "/assets/photos/natural-waterfall.jpg", nm: "Pick & brew your own tea", ds: "your own cup, your own hands" },
  { tone: "gold", shot: "shot 18: hibiscus drink in the making, portrait", src: "/assets/photos/hero-lagoon.jpg", nm: "Hibiscus drink from scratch", ds: "the traditional shoe-flower way" },
  { tone: "food", shot: "shot 19: fruit picking, portrait", src: "/assets/photos/coconut-climb.jpg", nm: "Fruit off the branch", ds: "picked, then eaten on the spot" },
];

// Images come from the home doc via Tina (3 room tiles + 4 experiences, by
// index); room/experience copy stays in `rooms` and STAY_ONLY. Falls back to the
// original srcs if un-wired.
export default function Stay({
  roomImgs,
  experienceImgs,
}: {
  roomImgs?: ImgField[];
  experienceImgs?: ImgField[];
}) {
  return (
    <section className="stay" id="stay">
      <div className="wrap">
        <h2 className="rv">Stay the night. Wake to paddy fields.</h2>
        <p className="lede rv">
          Ten rooms tucked into the jungle, paddy views, pool views, and the entire park included with every stay.
        </p>

        <div className="roomcards">
          {rooms.map((r, i) => (
            <a
              className="roomtile rv"
              key={r.name}
              style={{ transitionDelay: `${i * 90}ms` }}
              href={waLink(roomMessage(r.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about the ${r.name} on WhatsApp`}
            >
              <Shot tone={r.tone} label={r.shot} src={roomImgs?.[i]?.src ?? r.img} tinaField={roomImgs?.[i]?.tinaField} />
              <div className="cap">
                <span className="nm">{r.name}</span>
                <span className="ds">{r.meta}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="stay-cta rv">
          <WhatsAppPill message={messages.stay} big>
            WhatsApp us with your dates
          </WhatsAppPill>
          <p>
            Tell us your dates and group size, we&apos;ll match you to the right room. Booking direct
            saves up to 30% versus Booking.com and Airbnb.
          </p>
          <Link className="section-link" href="/accommodation">
            See all rooms and availability
          </Link>
        </div>

        <h3 className="sub rv">Only if you stay the night</h3>
        <p className="sub-lede rv">The hands-on part no day visitor gets, and no hotel in Galle offers.</p>
        <div className="stay2">
          {STAY_ONLY.map((s, i) => (
            <div className="bigplace rv" key={s.shot} style={{ transitionDelay: `${(i % 2) * 90}ms` }}>
              <Shot tone={s.tone} label={s.shot} src={experienceImgs?.[i]?.src ?? s.src} tinaField={experienceImgs?.[i]?.tinaField} />
              <div className="cap">
                <span className="nm">{s.nm}</span>
                <span className="ds">{s.ds}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
