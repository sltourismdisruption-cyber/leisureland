import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { WA } from "@/lib/content";

// Staggered entrance for each line of hero content.
const rise = (delay: number) => ({ animationDelay: `${delay}ms` });

export default function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero__photo" src="/assets/photos/hero-lagoon.jpg" alt="Jungle-fringed pools at Leisure Land" />
      <div className="hero__scrim" />
      <div className="hero__inner">
        <div className="hero__eyebrow hero-anim" style={rise(120)}>
          <Icon name="map-pin" />
          <span className="ll-eyebrow">10 minutes from Galle · Sri Lanka</span>
        </div>
        <h1 className="hero__title hero-anim" style={rise(220)}>
          Sri Lanka&apos;s Nature-Inspired Water Park
        </h1>
        <p className="hero__sub hero-anim" style={rise(340)}>
          A full day of slides, pools, traditional games &amp; authentic Sri Lankan food — deep in the
          jungle, 10 minutes from Galle.
        </p>
        <div className="hero__price hero-anim" style={rise(440)}>
          <b>From $13</b>
          <span>per person · all-in day pass</span>
        </div>
        <div className="hero__cta hero-anim" style={rise(540)}>
          <Button variant="cta" size="lg" trailingIcon="arrow-right" wa={WA.book}>
            WhatsApp to Book Your Day
          </Button>
          <Button variant="secondary" size="lg" glass leadingIcon="list-checks" href="#included">
            See what&apos;s included
          </Button>
        </div>
        <div className="hero__trust hero-anim" style={rise(660)}>
          <span className="trust"><Icon name="message-circle-heart" />Replies within 15 mins on WhatsApp</span>
          <span className="trust"><Icon name="map-pin" />10 min from Galle Highway exit</span>
          <span className="trust"><Icon name="utensils" />Foreigner-friendly Sri Lankan buffet</span>
        </div>
      </div>
    </section>
  );
}
