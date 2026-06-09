import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { LODGES, STAY_EXPERIENCES, PHOTO } from "@/lib/content";

export default function Stay() {
  return (
    <section className="section" id="stay" data-screen-label="Accommodation">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="ll-eyebrow"><Icon name="bed-double" />Accommodation</span>
          <h2 className="sec-title">Stay Overnight. Live Sri Lanka.</h2>
          <p className="sec-intro">
            Ten rooms across an A-frame and a bungalow. Paddy-field views, jungle sounds, and
            hands-on experiences you can&apos;t get at a regular hotel.
          </p>
        </div>

        <div className="price-guarantee reveal">
          <Icon name="badge-percent" />
          <div>
            <b>Best Price Guarantee.</b>{" "}
            <span>Book direct via WhatsApp and save up to 30% vs Booking.com &amp; Airbnb.</span>
          </div>
        </div>

        <div className="lodge-grid">
          {LODGES.map((l, i) => (
            <article className="lodge-card reveal" key={l.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="lodge-photo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lodge-photo" src={PHOTO + l.img} alt={l.name} loading="lazy" />
                <span className="lodge-place">{l.place}</span>
              </div>
              <div className="lodge-body">
                <h3>{l.name}</h3>
                <div className="lodge-sleeps"><Icon name="users" /><span>{l.sleeps}</span></div>
                <div className="lodge-tags">
                  {l.tags.map((t) => (
                    <span className="lodge-chip" key={t}>{t}</span>
                  ))}
                </div>
                <div className="lodge-price">
                  <div>
                    <span className="lodge-from">From</span>
                    <span className="lodge-amt">{l.price}</span>
                    <span className="lodge-night">/night</span>
                    <span className="lodge-lkr">{l.lkr}</span>
                  </div>
                </div>
                <div className="lodge-peak">{l.peak}</div>
                <div style={{ marginTop: "auto" }}>
                  <Button
                    variant="cta"
                    size="md"
                    fullWidth
                    leadingIcon="message-circle"
                    wa={`Hi! I'd like to check availability for the ${l.name}.`}
                  >
                    WhatsApp to book
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Hands-on experiences */}
        <div className="exp-band">
          <div className="exp-band__head reveal">
            <h3>Every stay is hands-on</h3>
            <p>
              Beyond the water park and meals, overnight guests get the experiences that turn a trip
              into a story.
            </p>
          </div>
          <div className="exp-grid">
            {STAY_EXPERIENCES.map((x, i) => (
              <div className="exp-item reveal" key={x.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="exp-icon"><Icon name={x.icon} /></div>
                <div>
                  <h4>{x.title}</h4>
                  <p>{x.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="meal-note reveal">
            <Icon name="utensils" />
            <p>
              <b>Choose how you eat</b> — full board (all meals), half board (breakfast + dinner), or
              room only. Just tell us your preference when you book.
            </p>
          </div>
        </div>

        <p className="stay-close reveal">
          &quot;You came for a slide. You leave with cinnamon-stained hands, tea leaves in your pocket,
          and the kind of memories no five-star hotel could give you.&quot;
        </p>
      </div>
    </section>
  );
}
