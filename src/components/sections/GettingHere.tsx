import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

// Drive times mirror the /accommodation "see all of Galle" journey list
// (founder-confirmed, Round 3 ST2) so the two pages agree. Colombo removed.
const ROUTES = [
  { place: "From Galle Fort", note: "about Rs. 1,500 by vehicle", time: "15 min" },
  { place: "From Unawatuna", note: "a short run down the coast", time: "10 min" },
  { place: "From Mirissa", note: "straight along the coast road", time: "45 min" },
];

export default function GettingHere() {
  return (
    <section className="getting" id="getting-here">
      <div className="wrap">
        <h2 className="rv">Just 10 minutes from the Galle Expressway exit.</h2>
        <p className="lede rv">
          Close enough for a spontaneous day out, far enough to feel like you&apos;ve escaped into
          nature.
        </p>

        <div className="gh-grid">
          <div className="rv">
            {ROUTES.map((r) => (
              <div className="route-row" key={r.place}>
                <div>
                  <b>{r.place}</b>
                  <div className="from">{r.note}</div>
                </div>
                <span className="time">about {r.time}</span>
              </div>
            ))}
            <p className="gh-note">
              <strong>Need transport? We can help arrange it.</strong> Message us and we&apos;ll
              arrange a vehicle to bring you in.
            </p>
            <div className="gh-cta">
              <WhatsAppPill message={messages.directions} big>
                Ask us for a pickup
              </WhatsAppPill>
            </div>
          </div>

          <div className="gh-map rv">
            <iframe
              title="Map to Leisure Land, near Galle"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sLeisure+Land+Water+Park,+Galle,+Sri+Lanka"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
