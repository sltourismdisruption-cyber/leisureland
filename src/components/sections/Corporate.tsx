import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";

const POINTS = [
  { icon: "trees", text: "Team-building outbound training in the jungle" },
  { icon: "tag", text: "Group rates available (custom quote)" },
  { icon: "party-popper", text: "Birthdays, weddings, anniversaries — we can host" },
  { icon: "graduation-cap", text: "Schools, corporate retreats & friend groups all welcome" },
];

export default function Corporate() {
  return (
    <section className="section section--sunken" id="corporate" data-screen-label="Corporate">
      <div className="wrap">
        <div className="corp">
          <div className="reveal">
            <span className="ll-eyebrow"><Icon name="users-round" />Corporate &amp; groups</span>
            <h2 className="sec-title">Outbound Training, Team Trips &amp; Group Outings</h2>
            <p className="sec-intro">
              Bring your team, your school or your tribe. Custom pricing, custom experiences.
            </p>
            <ul className="corp-points">
              {POINTS.map((p) => (
                <li key={p.text}>
                  <Icon name={p.icon} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="lg"
              leadingIcon="mail"
              href="mailto:hello@leisureland.lk?subject=Group%20outing%20enquiry"
            >
              Email us for a custom quote
            </Button>
          </div>
          <div className="corp-visual reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photos/pool-volleyball.jpg" alt="Group enjoying pool games at Leisure Land" />
          </div>
        </div>
      </div>
    </section>
  );
}
