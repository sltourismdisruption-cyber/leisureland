import Shot from "@/components/Shot";
import { waLink, messages, type Tone } from "@/lib/constants";

type Tile = { cls: "sq6" | "pt4" | "pano"; tone: Tone; shot: string; src: string; nm: string; ds: string };

const TILES: Tile[] = [
  { cls: "sq6", tone: "water", shot: "shot 03: mid pillow swing, both balanced, portrait", src: "/assets/photos/pool-volleyball.jpg", nm: "Kotta Pora", ds: "pillow fight on a log, last one dry wins" },
  { cls: "sq6", tone: "jungle", shot: "shot 04: mid air, rope released, portrait", src: "/assets/photos/waterfall-jump.jpg", nm: "Tarzan jump", ds: "grab, swing wide, let go" },
  { cls: "pano", tone: "gold", shot: "shot 05: the one wide frame, swing out over the paddy", src: "/assets/photos/aerial-pools.jpg", nm: "Paddy field swings", ds: "out over the rice, jungle at your back" },
  { cls: "pt4", tone: "water", shot: "shot 06: under the waterfall, portrait", src: "/assets/photos/natural-waterfall.jpg", nm: "Waterfall pools", ds: "bathe under flowing water" },
  { cls: "pt4", tone: "jungle", shot: "shot 07: up in the tree house, portrait", src: "/assets/photos/coconut-climb.jpg", nm: "Tree house & cable bridges", ds: "a walk through the canopy" },
  { cls: "pt4", tone: "water", shot: "shot 08: splashdown, speed slide, portrait", src: "/assets/photos/slide.jpg", nm: "Speed & family slides", ds: "one for the daredevils, one for everyone" },
];

export default function Activities() {
  return (
    <section className="acts" id="acts">
      <div className="wrap">
        <h2 className="rv">The slides pull you in. The old games keep you.</h2>
        <p className="lede rv">
          Some of this you&apos;ve done before. The best of it you can only do here: games Sri Lankan
          kids have played for generations, strung over a pool.
        </p>

        <div className="spot rv">
          <div className="anno spot-a hand">
            harder than it looks
            <svg viewBox="0 0 70 54" aria-hidden="true">
              <path d="M8 6 C 22 18, 38 26, 52 42 M52 42 l -11 -3 M52 42 l -2 -11" />
            </svg>
          </div>
          <div className="frame">
            <Shot
              tone="jungle"
              label="shot 02: feet on the lower rope, hands on the top rope, halfway across"
              src="/assets/photos/rope-swing.jpg"
            />
          </div>
          <div className="spot-txt">
            <h3>The toddy tapper&apos;s rope walk</h3>
            <p>
              For generations, toddy tappers crossed between coconut palms on two ropes. Feet on one,
              hands on the other. Ours is strung over the pool. Make it across, or make a splash trying.
              Either way, it&apos;s the story you&apos;ll tell at dinner.
            </p>
            <a
              className="more"
              href={waLink(messages.ropeWalk)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask us about it on WhatsApp
            </a>
          </div>
        </div>

        <div className="biggrid">
          {TILES.map((t) => (
            <div className={`tile ${t.cls} rv`} key={t.shot}>
              <Shot tone={t.tone} label={t.shot} src={t.src} />
              <div className="cap">
                <span className="nm">{t.nm}</span>
                <span className="ds">{t.ds}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="closing rv">
          Whether you&apos;re eight or eighty, there&apos;s a slide, a swing, or an old game with your
          name on it.
        </p>
      </div>
    </section>
  );
}
