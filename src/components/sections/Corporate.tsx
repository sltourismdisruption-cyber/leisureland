import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

export default function Corporate() {
  return (
    <section className="corporate" id="corporate">
      <div className="wrap">
        <h2 className="rv">Bring the team, the class, or the whole crew.</h2>
        <div className="prose rv">
          <p>
            Outbound training in the jungle, birthdays and weddings under the canopy, a school trip the
            kids actually remember. We host groups of every shape, from a company offsite to a family
            reunion, and the rates are built around your numbers.
          </p>
          <p>
            Tell us who&apos;s coming, your dates, and what you&apos;re hoping for, and we&apos;ll put
            together a plan and a quote that fits.
          </p>
        </div>
        <div className="mailcta rv">
          <WhatsAppPill message={messages.group} big>
            WhatsApp us for a group quote
          </WhatsAppPill>
        </div>
      </div>
    </section>
  );
}
