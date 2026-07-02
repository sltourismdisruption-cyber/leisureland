import Link from "next/link";
import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

export default function Corporate() {
  return (
    <section className="corporate" id="corporate">
      <div className="wrap">
        <h2 className="rv">Group Events &amp; Corporate Experiences</h2>
        <div className="prose rv">
          <p>
            <strong>Bring the team, the class, or the whole crew.</strong>
          </p>
          <p>
            From corporate day outings and outbound training programs to school excursions,
            birthdays, and private celebrations, we help you plan experiences that bring people
            together. Our team can assist with activity arrangements, event coordination, meals, and
            customized schedules to suit your group&apos;s goals.
          </p>
          <p>
            Share your group size, preferred dates, and what you&apos;re looking to achieve, and
            we&apos;ll help create an experience tailored to your needs.
          </p>
        </div>
        <div className="mailcta rv">
          <WhatsAppPill message={messages.group} big>
            WhatsApp us for a group quote
          </WhatsAppPill>
          <p className="corporate-events-link">
            <Link className="section-link" href="/events">
              Plan your event →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
