const SERIF = { fontFamily: "var(--font-young-serif), serif" };
const CURSIVE = { fontFamily: "var(--font-kalam), cursive" };

export default function GalleMap() {
  return (
    <section className="galle" id="galle">
      <div className="wrap">
        <h2 className="rv">Stay with us, see all of Galle.</h2>
        <p className="lede rv">
          Almost everything worth seeing is 10 to 25 minutes away. Tell us what you like and we&apos;ll
          arrange the tuk tuk.
        </p>

        <div className="mappanel rv">
          <div className="mapwrap">
            <svg
              viewBox="0 0 1100 600"
              role="img"
              aria-label="A sketched map: Leisure Land in the jungle, with tuk tuk routes down to Galle Fort, Unawatuna Beach, Jungle Beach and the turtle hatchery along the coast"
            >
              <path d="M0 444 C 90 432 180 452 270 442 C 360 432 450 452 540 444 C 630 436 720 454 810 446 C 900 438 990 454 1100 446 L1100 600 L0 600 Z" fill="#D9E8ED" />
              <path d="M0 444 C 90 432 180 452 270 442 C 360 432 450 452 540 444 C 630 436 720 454 810 446 C 900 438 990 454 1100 446" fill="none" stroke="#2C4A3B" strokeWidth={3} strokeLinecap="round" />
              <path d="M120 505 q14 -8 28 0 q14 8 28 0" fill="none" stroke="#7FB0C4" strokeWidth={2.5} strokeLinecap="round" />
              <path d="M610 545 q14 -8 28 0 q14 8 28 0" fill="none" stroke="#7FB0C4" strokeWidth={2.5} strokeLinecap="round" />
              <path d="M880 560 q14 -8 28 0 q14 8 28 0" fill="none" stroke="#7FB0C4" strokeWidth={2.5} strokeLinecap="round" />

              <g stroke="#8A6B47" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeDasharray="1 9">
                <path d="M548 162 C 430 240 300 330 178 424" />
                <path d="M552 168 C 510 260 460 350 424 430" />
                <path d="M568 168 C 610 260 640 350 658 432" />
                <path d="M572 162 C 700 240 820 330 898 426" />
              </g>

              <g transform="translate(468,298) rotate(14)" stroke="#6A5037" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M-16 4 L-11 -11 H9 L15 4 Z" />
                <path d="M-2 -11 V4" />
                <circle cx="-8" cy="10" r="5" />
                <circle cx="8" cy="10" r="5" />
              </g>

              <g stroke="#3E7E57" strokeWidth={3.2} fill="none" strokeLinecap="round">
                <g transform="translate(480,178)"><path d="M0 14 V0" /><path d="M-9 0 C -7 -10 7 -10 9 0" /></g>
                <g transform="translate(642,170)"><path d="M0 14 V0" /><path d="M-9 0 C -7 -10 7 -10 9 0" /></g>
                <g transform="translate(525,116)"><path d="M0 14 V0" /><path d="M-9 0 C -7 -10 7 -10 9 0" /></g>
                <g transform="translate(606,212)"><path d="M0 14 V0" /><path d="M-9 0 C -7 -10 7 -10 9 0" /></g>
                <g transform="translate(672,118)"><path d="M0 14 V0" /><path d="M-9 0 C -7 -10 7 -10 9 0" /></g>
              </g>

              <circle cx="560" cy="155" r="18" fill="none" stroke="#E8973B" strokeWidth={2.5} />
              <circle cx="560" cy="155" r="10" fill="#E8973B" stroke="#FBFDFC" strokeWidth={3} />
              <text x="560" y="86" textAnchor="middle" style={SERIF} fontSize={32} fill="#1E3A2C">Leisure Land</text>
              <text x="560" y="115" textAnchor="middle" style={CURSIVE} fontSize={19} fill="#7A5B3C">deep in the jungle, 10 min off the highway</text>

              <g style={SERIF} fontSize={25} fill="#1E3A2C" textAnchor="middle">
                <circle cx="178" cy="440" r="7" fill="#1E3A2C" />
                <text x="178" y="490">Galle Fort</text>
                <circle cx="424" cy="446" r="7" fill="#1E3A2C" />
                <text x="424" y="496">Unawatuna Beach</text>
                <circle cx="658" cy="444" r="7" fill="#1E3A2C" />
                <text x="658" y="528">Jungle Beach</text>
                <circle cx="898" cy="442" r="7" fill="#1E3A2C" />
                <text x="898" y="492">Turtle hatchery</text>
              </g>
              <g style={CURSIVE} fontSize={18.5} fill="#7A5B3C" textAnchor="middle">
                <text x="178" y="517">about 20 minutes</text>
                <text x="424" y="523">about 15 minutes</text>
                <text x="658" y="555">about 20 minutes</text>
                <text x="898" y="519">about 20 minutes</text>
              </g>
            </svg>
          </div>
        </div>
        <p className="after rv">
          Bicycles, custom day plans, and the spots most tourists never find. Just ask.
        </p>
      </div>
    </section>
  );
}
