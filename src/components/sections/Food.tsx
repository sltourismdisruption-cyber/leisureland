import Icon from "@/components/Icon";

const ITEMS = [
  { icon: "check", text: "Coconut-based curries — mild, creamy, traditional" },
  { icon: "check", text: "Rice, string hoppers and Sri Lankan staples" },
  { icon: "check", text: "Fresh tropical fruits picked from our own land" },
  { icon: "check", text: "Vegan, vegetarian & gluten-free options always available" },
  { icon: "leaf", text: "Zero artificial flavours — everything made from scratch" },
  { icon: "utensils-crossed", text: "All-you-can-eat buffet, included in your day pass" },
];

export default function Food() {
  return (
    <section className="section section--cream" id="food" data-screen-label="Food">
      <div className="wrap">
        <div className="split">
          <div className="split__media reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photos/bbq-bonfire.jpg" alt="Sri Lankan food and bonfire BBQ at night" />
          </div>
          <div className="reveal">
            <span className="ll-eyebrow"><Icon name="soup" />The food</span>
            <h2 className="sec-title">Real Sri Lankan Food. Foreigner-Friendly Spice.</h2>
            <p className="sec-intro">
              Authentic flavours of Sri Lanka — minus the chili sweat. Made fresh in our kitchen with
              zero artificial flavours.
            </p>
            <ul className="food-list">
              {ITEMS.map((it) => (
                <li key={it.text}>
                  <Icon name={it.icon} />
                  <span>{it.text}</span>
                </li>
              ))}
            </ul>
            <p className="pull-quote">
              &quot;Food made the way grandma would — from scratch, in our kitchen, with nothing fake.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
