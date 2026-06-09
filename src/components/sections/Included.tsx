import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { WA } from "@/lib/content";

const ROWS = [
  { icon: "waves", title: "Full Water Park Access", body: "Speed slide, family slide, waterfall pools, pool volleyball & basketball, traditional games and the full jungle adventure." },
  { icon: "utensils", title: "Sri Lankan Lunch Buffet", body: "Authentic flavours of Sri Lanka, made foreigner-friendly. Non-spicy options always available." },
  { icon: "glass-water", title: "Welcome Drink", body: "A fresh tropical greeting waiting for you on arrival." },
  { icon: "coffee", title: "Evening Tea or Coffee", body: "Sri Lankan style — the perfect way to wind down your day." },
];

export default function Included() {
  return (
    <section className="section section--cream" id="included" data-screen-label="What's included">
      <div className="wrap">
        <div className="sec-head sec-head--center reveal">
          <span className="ll-eyebrow"><Icon name="ticket" />The day pass</span>
          <h2 className="sec-title">Everything for 4,000 LKR / $13</h2>
          <p className="sec-intro">One price. One full day. Zero hidden costs.</p>
        </div>

        <div className="ticket reveal">
          <div className="ticket__stub">
            <span className="ticket__kicker">Leisure Land · Day Pass</span>
            <div className="ticket__price">$13</div>
            <div className="ticket__lkr">4,000 LKR</div>
            <div className="ticket__per">per person</div>
            <p className="ticket__note">No upsells. No surprises.<br />Just bring your swimwear.</p>
          </div>
          <div className="ticket__list">
            {ROWS.map((r) => (
              <div className="ticket__row" key={r.title}>
                <span className="ticket__ic"><Icon name={r.icon} /></span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ticket-foot reveal">
          <p>One ticket. The whole jungle.</p>
          <Button variant="cta" size="lg" leadingIcon="message-circle" wa={WA.book}>
            Book your day pass
          </Button>
        </div>
      </div>
    </section>
  );
}
