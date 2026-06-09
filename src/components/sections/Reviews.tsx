import Icon from "@/components/Icon";
import Avatar from "@/components/ui/Avatar";
import { REVIEWS } from "@/lib/content";

export default function Reviews() {
  return (
    <section className="section section--cream" id="reviews" data-screen-label="Reviews">
      <div className="wrap">
        <div className="sec-head sec-head--center reveal">
          <span className="ll-eyebrow" style={{ justifyContent: "center" }}>
            <Icon name="heart" />Reviews
          </span>
          <h2 className="sec-title">Don&apos;t Take Our Word For It</h2>
          <p className="sec-intro">Real reviews from real travellers.</p>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <article className="review-card reveal" key={r.name} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="stars">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Icon key={s} name="star" className="star-filled" fill="var(--marigold-500)" />
                ))}
              </div>
              <p className="review-quote">&ldquo;{r.quote}&rdquo;</p>
              <div className="review-by">
                <Avatar name={r.name} />
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-from">
                    <Icon name="map-pin" style={{ width: 12, height: 12, display: "inline-flex", verticalAlign: "-2px" }} />{" "}
                    {r.from}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="platforms reveal">
          <a className="platform" href="#" target="_blank" rel="noopener noreferrer"><Icon name="star" />See us on Google</a>
          <a className="platform" href="#" target="_blank" rel="noopener noreferrer"><Icon name="map-pin" />See us on TripAdvisor</a>
          <a className="platform" href="#" target="_blank" rel="noopener noreferrer"><Icon name="camera" />Tag us @leisureland.lk</a>
        </div>
        <p className="reviews-note">
          Real photos of real people &gt; any star rating. Tag us on Instagram and we&apos;ll feature you.
        </p>
      </div>
    </section>
  );
}
