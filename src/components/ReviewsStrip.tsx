import { REVIEWS_ENABLED } from "@/lib/constants";

/**
 * Per-page reviews strip (Doc 05 wants 2-3 best quotes on every page).
 * Stays unrendered until real reviews exist; never show placeholder ratings
 * or invented testimonials (handoff §7 and hard rule 9). When listings are
 * live, flip REVIEWS_ENABLED in lib/constants and drop the real quotes in.
 */
export default function ReviewsStrip() {
  if (!REVIEWS_ENABLED) return null;

  return (
    <section className="day" id="reviews">
      <div className="wrap">
        <h2 className="rv">What guests say.</h2>
        {/* Real quotes land here: 2-3 short ones, attributed, with links to
            the Google / TripAdvisor listings they came from. */}
      </div>
    </section>
  );
}
