import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { DIRECTIONS, WA } from "@/lib/content";

export default function GettingHere() {
  return (
    <section className="section" id="getting-here" data-screen-label="How to get here">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="ll-eyebrow"><Icon name="route" />How to get here</span>
          <h2 className="sec-title">Easier to Reach Than You&apos;d Think</h2>
          <p className="sec-intro">
            10 minutes from the Galle Highway exit. Easy from anywhere on the south coast.
          </p>
        </div>
        <div className="route">
          <ul className="dir-list reveal">
            {DIRECTIONS.map((d) => (
              <li key={d.from}>
                <Icon name="car-front" />
                <div className="dir-main">
                  <b>From {d.from}</b>
                  <span>{d.note}</span>
                </div>
                <span className="dir-time">{d.time}</span>
              </li>
            ))}
          </ul>
          <div className="route-aside reveal">
            <div className="map-embed">
              <iframe
                title="Map to Leisure Land near Galle"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Galle,+Sri+Lanka&output=embed"
              />
            </div>
            <div className="route-help">
              <Icon name="message-circle" />
              <p>Need help getting here? Message us on WhatsApp — we can arrange a tuk tuk pickup.</p>
              <Button variant="cta" size="md" leadingIcon="navigation" wa={WA.directions}>
                Get directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
