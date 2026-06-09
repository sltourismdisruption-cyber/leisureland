import Button from "@/components/ui/Button";
import { WA } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="final" id="book" data-screen-label="Final CTA">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="final__photo" src="/assets/photos/aerial-pools.jpg" alt="" />
      <div className="final__scrim" />
      <div className="final__inner wrap wrap--md">
        <h2 className="reveal">Ready For Your Day?</h2>
        <p className="reveal">Message us on WhatsApp and we&apos;ll get you sorted in minutes.</p>
        <div className="final__cta reveal">
          <Button variant="cta" size="lg" leadingIcon="message-circle" wa={WA.book}>
            WhatsApp to Book Your Day
          </Button>
        </div>
      </div>
    </section>
  );
}
