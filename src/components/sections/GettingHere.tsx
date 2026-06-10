import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

// Times unverified (handoff flags them) — confirm with the founder before launch.
const ROUTES = [
  { place: "From Galle Fort", note: "about Rs. 1,500 by tuk tuk", time: "20 min" },
  { place: "From Unawatuna", note: "a short run down the coast", time: "30 min" },
  { place: "From Mirissa", note: "straight along the coast road", time: "45 min" },
  { place: "From Colombo", note: "via the Southern Expressway, 10 min from the exit", time: "2 hrs" },
];

export default function GettingHere() {
  return (
    <section className="galle" id="getting-here">
      <div className="wrap">
        <h2 className="rv">Easier to reach than it sounds.</h2>
        <p className="lede rv">
          Ten minutes off the Southern Expressway exit, then a short run through the village.
        </p>

        <div className="routes rv">
          {ROUTES.map((r) => (
            <div className="route-row" key={r.place}>
              <div>
                <b>{r.place}</b>
                <div className="from">{r.note}</div>
              </div>
              <span className="time">about {r.time}</span>
            </div>
          ))}
        </div>

        <div className="mapembed rv">
          <iframe
            title="Map to Leisure Land, near Galle"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Galle,+Sri+Lanka&output=embed"
          />
        </div>

        <p className="galle-after-line rv">
          Want a hand getting here? Message us and we&apos;ll arrange a tuk tuk to bring you in.
        </p>
        <div className="rv" style={{ marginTop: 22 }}>
          <WhatsAppPill message={messages.directions} big>
            Ask us for a pickup
          </WhatsAppPill>
        </div>
      </div>
    </section>
  );
}
