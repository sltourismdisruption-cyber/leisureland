import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { NEARBY, ARRANGE, WA } from "@/lib/content";

export default function Basecamp() {
  return (
    <section className="section section--jungle" id="basecamp" data-screen-label="Galle Basecamp">
      <div className="wrap">
        <div className="sec-head sec-head--center reveal">
          <span className="ll-eyebrow" style={{ justifyContent: "center" }}>
            <Icon name="compass" />Your Galle basecamp
          </span>
          <h2 className="sec-title">Stay With Us, Explore All of Galle</h2>
          <p className="sec-intro">
            Almost everything worth seeing in Galle is just 10–15 minutes away. We&apos;ll help you
            find the hidden gems too.
          </p>
        </div>
        <div className="gl-cols">
          <div className="gl-col reveal">
            <h3><Icon name="map-pinned" />What&apos;s nearby</h3>
            <ul className="gl-list">
              {NEARBY.map((n) => (
                <li key={n.name}>
                  <Icon name={n.icon} />
                  <span className="gl-name">{n.name}</span>
                  <span className="gl-time">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="gl-col reveal">
            <h3><Icon name="hand-helping" />What we arrange</h3>
            <ul className="gl-list gl-list--arrange">
              {ARRANGE.map((a) => (
                <li key={a.text}>
                  <Icon name={a.icon} />
                  <span className="gl-name">{a.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="gl-close reveal">&quot;Other places give you a bed. We give you Galle.&quot;</p>
        <div className="gl-cta reveal">
          <Button variant="cta" size="lg" leadingIcon="message-circle" wa={WA.galle}>
            Tell us how long you&apos;re in Galle
          </Button>
        </div>
      </div>
    </section>
  );
}
