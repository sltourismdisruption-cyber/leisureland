import Link from "next/link";
import Shot from "@/components/Shot";
import type { ImgField } from "@/lib/constants";

const DETAILS = [
  { tone: "food" as const, shot: "shot 10", src: "/assets/photos/bbq-bonfire.jpg" },
  { tone: "food" as const, shot: "shot 11", src: "/assets/photos/coconut-climb.jpg" },
  { tone: "gold" as const, shot: "shot 12", src: "/assets/photos/wildlife-lizard.jpg" },
];

// Images come from the home doc via Tina (buffet hero + 3 detail tiles, by
// index); copy/tones stay in DETAILS. Falls back to the original srcs if un-wired.
export default function Food({
  hero,
  details,
}: {
  hero?: ImgField;
  details?: ImgField[];
}) {
  return (
    <section className="food" id="food">
      <div className="wrap">
        <h2 className="rv">Cooked from scratch, gentle on the spice.</h2>
        <p className="lede rv">
          Real Sri Lankan food without the chili sweat. Mild coconut curries, rice and string hoppers,
          fruit from our own land. Vegan, vegetarian and gluten free are always covered, and it&apos;s
          all you can eat, included in your pass.
        </p>
        <div className="food-hero rv">
          <Shot
            tone="food"
            label="shot 09: the buffet spread, wide, steam and all"
            src={hero?.src ?? "/assets/photos/bbq-bonfire.jpg"}
            tinaField={hero?.tinaField}
          />
          <p className="grandma">
            {'"made the way grandma would, from scratch, in our kitchen, with nothing fake."'}
          </p>
        </div>
        <div className="food-details">
          {DETAILS.map((d, i) => (
            <div className="detail rv" key={d.shot} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="frame">
                <Shot tone={d.tone} label={d.shot} src={details?.[i]?.src ?? d.src} tinaField={details?.[i]?.tinaField} />
              </div>
            </div>
          ))}
        </div>
        <p className="rv">
          <Link className="section-link" href="/food">
            More about our food
          </Link>
        </p>
      </div>
    </section>
  );
}
