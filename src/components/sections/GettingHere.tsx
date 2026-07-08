import WhatsAppPill from "@/components/WhatsAppPill";
import { messages, GALLE_DISTANCES } from "@/lib/constants";

// Distances come from lib/constants (GALLE_DISTANCES) so this list and the
// /accommodation journey list always show the same places and times.
export default function GettingHere() {
  return (
    <section className="getting" id="getting-here">
      <div className="wrap">
        <h2 className="rv">Just 6 minutes from the Galle Expressway exit.</h2>
        <p className="lede rv">
          Close enough for a spontaneous day out, far enough to feel like you&apos;ve escaped into
          nature.
        </p>

        <div className="gh-grid">
          <div className="rv">
            {GALLE_DISTANCES.map((d) => (
              <div className="route-row" key={d.name}>
                <b>{d.name}</b>
                <span className="time">about {d.min} minutes</span>
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
