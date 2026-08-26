import {
  REVIEWS_ENABLED,
  GOOGLE_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT,
  GOOGLE_REVIEWS_RATING,
} from "@/lib/constants";

const STAR_PATH =
  "M12 3.2 L14.6 9.6 L21.4 10.2 L16.3 14.6 L17.8 21.2 L12 17.8 L6.2 21.2 L7.7 14.6 L2.6 10.2 L9.4 9.6 Z";

// Per-star fill fraction for a 5-star row at the real rating — e.g. 4.2
// renders 4 full stars and a 5th star filled 20%, not a rounded whole star.
const RATING = Number(GOOGLE_REVIEWS_RATING);
const STAR_FRACTIONS = [0, 1, 2, 3, 4].map((i) => Math.min(Math.max(RATING - i, 0), 1));

function Star({ fraction }: { fraction: number }) {
  return (
    <span className="rv-star">
      <svg className="rv-star-base" viewBox="0 0 24 24" aria-hidden="true">
        <path d={STAR_PATH} />
      </svg>
      <span className="rv-star-fill-mask" style={{ width: `${fraction * 100}%` }}>
        <svg className="rv-star-fill" viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      </span>
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      />
    </svg>
  );
}

/**
 * Reviews shell. Stays unrendered until real Google / TripAdvisor / Instagram
 * handles exist (handoff §7). Never shows placeholder ratings. Flip
 * REVIEWS_ENABLED in lib/constants once listings are live, then drop in handles.
 * TripAdvisor and Instagram rows come back once their real URLs are confirmed —
 * only Google is wired up for now.
 */
export default function Reviews() {
  if (!REVIEWS_ENABLED) return null;

  return (
    <section className="reviews-band" id="reviews">
      <div className="wrap rv-grid">
        <div>
          <h2 className="rv">What guests say.</h2>
          <p className="lede rv">
            We didn&apos;t write these — visitors did. See what people are saying on Google.
          </p>
          <a className="rv-cta rv" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Read the reviews on Google
          </a>
        </div>
        <a
          className="rv-card rv"
          style={{ transitionDelay: "90ms" }}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Rated ${GOOGLE_REVIEWS_RATING} out of 5 from ${GOOGLE_REVIEWS_COUNT} Google reviews`}
        >
          <span className="rv-score">{GOOGLE_REVIEWS_RATING}</span>
          <span className="rv-stars" aria-hidden="true">
            {STAR_FRACTIONS.map((f, i) => (
              <Star key={i} fraction={f} />
            ))}
          </span>
          <span className="rv-count">{GOOGLE_REVIEWS_COUNT} reviews</span>
          <span className="rv-badge">
            <GoogleG />
            Google Reviews
          </span>
        </a>
      </div>
    </section>
  );
}
