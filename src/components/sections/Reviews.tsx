import { REVIEWS_ENABLED } from "@/lib/constants";

/**
 * Reviews shell. Stays unrendered until real Google / TripAdvisor / Instagram
 * handles exist (handoff §7). Never shows placeholder ratings. Flip
 * REVIEWS_ENABLED in lib/constants once listings are live, then drop in handles.
 */
export default function Reviews() {
  if (!REVIEWS_ENABLED) return null;

  return (
    <section className="day" id="reviews">
      <div className="wrap">
        <h2 className="rv">What guests say.</h2>
        <p className="lede rv">Real words from real visitors. See the full picture where you book your trips.</p>
        <div className="routes rv">
          <div className="route-row">
            <div><b>Google</b><div className="from">Read the reviews and find us on the map</div></div>
            <a className="time" href="#" target="_blank" rel="noopener noreferrer">Open</a>
          </div>
          <div className="route-row">
            <div><b>TripAdvisor</b><div className="from">Our listing and traveller photos</div></div>
            <a className="time" href="#" target="_blank" rel="noopener noreferrer">Open</a>
          </div>
          <div className="route-row">
            <div><b>Instagram</b><div className="from">Tagged moments from guests</div></div>
            <a className="time" href="#" target="_blank" rel="noopener noreferrer">Open</a>
          </div>
        </div>
      </div>
    </section>
  );
}
