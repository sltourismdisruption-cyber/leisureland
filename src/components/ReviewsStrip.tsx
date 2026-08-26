import { REVIEWS_ENABLED, GOOGLE_REVIEWS_URL, GOOGLE_REVIEWS_COUNT } from "@/lib/constants";

/**
 * Per-page reviews strip (Doc 05 wants 2-3 best quotes on every page).
 * Real per-page quotes aren't confirmed yet, so this shows the confirmed
 * Google review count + link rather than an empty section or invented
 * testimonials (handoff §7 and hard rule 9). Swap in real quotes once
 * they're picked; flip REVIEWS_ENABLED off again if the count link alone
 * shouldn't ship on every page.
 */
export default function ReviewsStrip() {
  if (!REVIEWS_ENABLED) return null;

  return (
    <section className="day" id="reviews">
      <div className="wrap">
        <h2 className="rv">What guests say.</h2>
        <p className="lede rv">
          {GOOGLE_REVIEWS_COUNT} reviews on Google.{" "}
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Read them
          </a>
        </p>
      </div>
    </section>
  );
}
