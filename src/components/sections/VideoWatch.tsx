/**
 * Homepage "Watch" section (Round 3 H1). The property video is embedded
 * directly so it shows its first frame straight away (Vimeo's poster) and plays
 * in place, starting around 1080p. The Vimeo ID is Tina content
 * (content/pages/home.json), so the founder can swap the film in /admin without
 * touching code.
 */
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
  // Loaded on the page showing the first frame (no autoplay); start playback
  // around 1080p. Vimeo still adapts to the viewer's connection.
  const src =
    `https://player.vimeo.com/video/${id}` +
    `?title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&quality=1080p`;

  return (
    <section className="watch" id="watch">
      <div className="wrap">
        <h2 className="rv">See the place for yourself.</h2>
        <p className="lede rv">
          A quick look around the park, the pools, and the jungle it all sits in.
        </p>

        <div className="watch-frame rv" data-tina-field={tinaField}>
          {id ? (
            <iframe
              className="watch-player"
              src={src}
              title="Leisure Land property video"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
