import Icon from "@/components/Icon";
import { site, whatsappLink } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="f-logo" src="/assets/logo/leisureland-white.png" alt="Leisure Land" />
            <p>
              Sri Lanka&apos;s nature-inspired water park, 10 minutes from Galle. Day passes from $13
              — slides, traditional games and authentic Sri Lankan food.
            </p>
            <div className="f-social">
              <a href="#" aria-label="Instagram">
                <Icon name="camera" />
              </a>
              <a href="#" aria-label="Facebook">
                <Icon name="thumbs-up" />
              </a>
              <a
                href={whatsappLink("Hi! I'd like to book a day pass at Leisure Land.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon name="message-circle" />
              </a>
            </div>
          </div>
          <div>
            <h5>Quick links</h5>
            <ul>
              <li><a href="#included">Day Pass</a></li>
              <li><a href="#stay">Accommodation</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <div className="f-contact"><Icon name="message-circle" /><span>WhatsApp: +94 — — (add number)</span></div>
            <div className="f-contact"><Icon name="mail" /><span>{site.email}</span></div>
            <div className="f-contact"><Icon name="map-pin" /><span>Galle District, Southern Province, Sri Lanka</span></div>
            <div className="f-contact"><Icon name="clock" /><span>Open daily · 9 AM – 10 PM</span></div>
          </div>
        </div>
        <div className="footer__base">
          <p>© 2026 Leisure Land. All rights reserved.</p>
          <p>Built with love in Galle 🌴</p>
        </div>
      </div>
    </footer>
  );
}
