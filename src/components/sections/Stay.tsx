import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import { rooms, roomMessage, waLink, messages, type Tone } from "@/lib/constants";

const STAY_ONLY: { tone: Tone; shot: string; nm: string; ds: string }[] = [
  { tone: "jungle", shot: "shot 16: hands on the cinnamon branch, portrait", nm: "Pluck Ceylon cinnamon", ds: "straight from the tree" },
  { tone: "jungle", shot: "shot 17: picking tea leaves, portrait", nm: "Pick & brew your own tea", ds: "your own cup, your own hands" },
  { tone: "gold", shot: "shot 18: hibiscus drink in the making, portrait", nm: "Hibiscus drink from scratch", ds: "the traditional shoe-flower way" },
  { tone: "food", shot: "shot 19: fruit picking, portrait", nm: "Fruit off the branch", ds: "picked, then eaten on the spot" },
];

export default function Stay() {
  return (
    <section className="stay" id="stay">
      <div className="wrap">
        <h2 className="rv">Stay the night. Wake to paddy fields.</h2>
        <p className="lede rv">
          Ten rooms across a bungalow and an A-frame, with the whole park included in your stay.
        </p>

        <div className="roomcards">
          {rooms.map((r) => (
            <a
              className="roomtile rv"
              key={r.name}
              href={waLink(roomMessage(r.name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ask about the ${r.name} on WhatsApp`}
            >
              <Shot tone={r.tone} label={r.shot} />
              <div className="cap">
                <span className="nm">{r.name}</span>
                <span className="ds">{r.meta}</span>
                <span className="pr">{r.price}</span>
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
        </div>

        <h3 className="sub rv">Only if you stay the night</h3>
        <p className="sub-lede rv">The hands-on part no day visitor gets, and no hotel in Galle offers.</p>
        <div className="stay2">
          {STAY_ONLY.map((s) => (
            <div className="bigplace rv" key={s.shot}>
              <Shot tone={s.tone} label={s.shot} />
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
