"use client";

import { useEffect, useRef, useState } from "react";
import { QuotesIcon } from "@phosphor-icons/react/ssr";
import {
  REVIEWS_ENABLED,
  GOOGLE_REVIEWS_URL,
  GOOGLE_REVIEWS_COUNT,
  GOOGLE_REVIEWS_RATING,
  GOOGLE_REVIEWS_FEATURABLE_ID,
} from "@/lib/constants";

const STAR_PATH =
  "M12 3.2 L14.6 9.6 L21.4 10.2 L16.3 14.6 L17.8 21.2 L12 17.8 L6.2 21.2 L7.7 14.6 L2.6 10.2 L9.4 9.6 Z";

function starFractions(rating: number) {
  return [0, 1, 2, 3, 4].map((i) => Math.min(Math.max(rating - i, 0), 1));
}

// Per-star fill fraction for a 5-star row at the real rating — e.g. 4.2
// renders 4 full stars and a 5th star filled 20%, not a rounded whole star.
const STAR_FRACTIONS = starFractions(Number(GOOGLE_REVIEWS_RATING));

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

type FeaturableReview = {
  id: string;
  name: string;
  photoUrl: string;
  rating: number;
  comment: string;
  createTime: string | null;
};

/** "3 months ago" style, no date-library dependency. */
function relativeTime(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const days = Math.round((Date.now() - date.getTime()) / 86_400_000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (days < 30) return rtf.format(-days, "day");
  const months = Math.round(days / 30);
  if (months < 12) return rtf.format(-months, "month");
  return rtf.format(-Math.round(months / 12), "year");
}

/**
 * Pulls real reviews client-side from Featurable's public widget API
 * (api.featurable.com — the same endpoint the `react-google-reviews`
 * package calls under the hood; hitting it directly here avoids pulling
 * that package's emotion + react-slick bundle into a site that otherwise
 * ships zero animation/carousel libraries). Returns null while loading or
 * unconfigured/unavailable — callers must keep the non-live fallback in
 * that case rather than show a placeholder as if it were real.
 */
function useLiveReviews(featurableId: string): FeaturableReview[] | null {
  const [reviews, setReviews] = useState<FeaturableReview[] | null>(null);

  useEffect(() => {
    if (!featurableId) return;
    let cancelled = false;

    fetch(`https://api.featurable.com/v2/widgets/${featurableId}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled || !data?.success || !Array.isArray(data.widget?.reviews)) return;
        const mapped: FeaturableReview[] = data.widget.reviews
          .filter((r: { text?: string }) => !!r.text?.trim())
          .map((r: { id: string; author?: { name?: string; photoUrl?: string }; rating?: { value?: number }; text: string; createdAt?: string }) => ({
            id: r.id,
            name: r.author?.name || "Google user",
            photoUrl: r.author?.photoUrl || "",
            rating: r.rating?.value ?? 0,
            comment: r.text,
            createTime: r.createdAt ?? null,
          }));
        if (mapped.length > 0) setReviews(mapped);
      })
      .catch(() => {
        // Stay null — Reviews falls back to the aggregate rating card.
      });

    return () => {
      cancelled = true;
    };
  }, [featurableId]);

  return reviews;
}

function ReviewCard({ review }: { review: FeaturableReview }) {
  return (
    <div className="rv-review-card">
      <QuotesIcon className="rv-quote" size={30} weight="fill" aria-hidden="true" />
      <span className="rv-review-stars" aria-hidden="true">
        {starFractions(review.rating).map((f, i) => (
          <Star key={i} fraction={f} />
        ))}
      </span>
      <p className="rv-review-text">{review.comment}</p>
      <div className="rv-review-by">
        {review.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- external Google avatar, not an optimizable local/CMS asset
          <img className="rv-avatar" src={review.photoUrl} alt="" width={44} height={44} referrerPolicy="no-referrer" />
        ) : (
          <span className="rv-avatar rv-avatar-fallback" aria-hidden="true">
            {review.name.charAt(0)}
          </span>
        )}
        <div>
          <span className="rv-review-name">{review.name}</span>
          <span className="rv-review-date">{relativeTime(review.createTime)}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Reviews. Aggregate rating card by default (handoff §7 — never show
 * invented testimonials). Once GOOGLE_REVIEWS_FEATURABLE_ID is set, swaps in
 * real per-review quotes as a manually swipeable single-card track (native
 * scroll-snap — no animation library, matches the rest of the site) with dot
 * navigation next to the heading, same pattern as the nature-walk carousel.
 */
export default function Reviews() {
  // Hooks must run unconditionally (REVIEWS_ENABLED is a build-time
  // constant, but the early return below still can't precede any hook).
  const liveReviews = useLiveReviews(REVIEWS_ENABLED ? GOOGLE_REVIEWS_FEATURABLE_ID : "");
  const hasLive = !!liveReviews && liveReviews.length > 0;

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  if (!REVIEWS_ENABLED) return null;

  const onScroll = () => {
    const t = trackRef.current;
    if (!t || !liveReviews) return;
    setActive(Math.min(Math.round(t.scrollLeft / t.clientWidth), liveReviews.length - 1));
  };

  const goTo = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    t.scrollTo({ left: i * t.clientWidth, behavior });
  };

  return (
    <section className="reviews-band" id="reviews">
      <div className="wrap rv-grid">
        <div>
          <h2 className="rv">What guests say.</h2>
          <p className="lede rv">
            We didn&apos;t write these. Visitors did. See what people are saying on Google.
          </p>

          {hasLive && (
            <span className="rv-score-line rv" aria-hidden="true">
              <span className="rv-stars">
                {STAR_FRACTIONS.map((f, i) => (
                  <Star key={i} fraction={f} />
                ))}
              </span>
              <span>
                {GOOGLE_REVIEWS_RATING} from {GOOGLE_REVIEWS_COUNT} reviews
              </span>
            </span>
          )}

          {hasLive && liveReviews.length > 1 && (
            <div className="rv-dots rv">
              {liveReviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  className={i === active ? "active" : undefined}
                  onClick={() => goTo(i)}
                  aria-label={`View review ${i + 1} of ${liveReviews.length}`}
                  aria-current={i === active ? "true" : undefined}
                />
              ))}
            </div>
          )}

          <a className="rv-cta rv" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Read {hasLive ? "all " : ""}reviews on Google
          </a>
        </div>

        {hasLive ? (
          <div className="rv-track" ref={trackRef} onScroll={onScroll}>
            {liveReviews.map((r, i) => (
              <div className="rv-slide rv" key={r.id} style={{ transitionDelay: `${Math.min(i, 2) * 90}ms` }}>
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
}
