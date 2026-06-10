import { contact } from "@/lib/constants";

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
          <a className="pill" href={`mailto:${contact.email}?subject=Group%20outing%20enquiry`}>
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="M3 6.5h18v11H3z" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
            Email us about your group
          </a>
        </div>
      </div>
    </section>
  );
}
