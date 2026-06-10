import Shot from "@/components/Shot";

const DETAILS = [
  { tone: "food" as const, shot: "shot 10", src: "/assets/photos/bbq-bonfire.jpg", hand: "the curry pots" },
  { tone: "food" as const, shot: "shot 11", src: "/assets/photos/coconut-climb.jpg", hand: "string hoppers, fresh" },
  { tone: "gold" as const, shot: "shot 12", src: "/assets/photos/wildlife-lizard.jpg", hand: "picked this morning" },
];

export default function Food() {
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
            src="/assets/photos/bbq-bonfire.jpg"
          />
          <p className="grandma">
            {'"made the way grandma would, from scratch, in our kitchen, with nothing fake."'}
          </p>
        </div>
        <div className="food-details">
          {DETAILS.map((d, i) => (
            <div className="detail rv" key={d.shot} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="frame">
                <Shot tone={d.tone} label={d.shot} src={d.src} />
              </div>
              <span className="hand">{d.hand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
