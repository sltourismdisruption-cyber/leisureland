"use client";

/**
 * Homepage "Watch" section (Round 3 H1). Perf doc Phase 3 — FACADE.
 *
 * The property video used to embed the Vimeo <iframe> eagerly, which pulled the
 * Vimeo player JS (~217KB), vendor JS (~94KB), its CSS and a third-party cookie
 * on every page load (the cookie was holding Best Practices at 77). Now a
 * lightweight poster (optimized via next/image) with a play button shows first;
 * the real player loads ONLY after the visitor clicks — so none of that Vimeo
 * weight or the cookie is on the initial load. The video stays in place and
 * stays Tina-editable (the Vimeo ID is still content/pages/home.json).
 */
import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/constants";

// Poster: a no-faces, landscape aerial of the pools + jungle (brand rule).
// Served resized/WebP by next/image, not as a heavy raw image.
const POSTER = "/images/home/final-cta/aerial-drone-compact-view.jpg";

export default function VideoWatch({
  videoId,
  tinaField,
}: {
  /** Vimeo video ID (digits). A full Vimeo URL is tolerated — we read the id. */
  videoId?: string;
  /** Tina visual-editing handle (focuses the video field on click-to-edit). */
  tinaField?: string;
}) {
  // Accept either a bare id ("1205956354") or a pasted Vimeo URL — take digits.
  const id = (videoId ?? "").match(/\d+/)?.[0] ?? "";
  const [playing, setPlaying] = useState(false);
  // autoplay=1: the click itself is the user gesture, so it starts at once.
  const src =
    `https://player.vimeo.com/video/${id}` +
    `?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&quality=1080p`;

  return (
    <section className="watch" id="watch">
      <div className="wrap">
        <h2 className="rv">See the place for yourself.</h2>
        <p className="lede rv">
          A quick look around the park, the pools, and the jungle it all sits in.
        </p>

        <div className="watch-frame rv" data-tina-field={tinaField}>
          {!id ? null : playing ? (
            <iframe
              className="watch-player"
              src={src}
              title="Leisure Land property video"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="watch-facade"
              onClick={() => setPlaying(true)}
              aria-label="Play the Leisure Land property video"
            >
              <Image
                className="ph-img"
                src={asset(POSTER)}
                alt=""
                fill
                sizes="(max-width: 960px) 100vw, 960px"
              />
              <span className="watch-play" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
