import { asset, type Tone } from "@/lib/constants";

/**
 * Image slot. Renders the photo in `src` over the tinted gradient (an empty
 * `src` shows just the gradient). The photographer's dashed "shot brief" chip
 * that used to overlay every image has been removed so the site shows clean for
 * client review. `label` and `chipRight` are still accepted — callers and the
 * underlying data are unchanged — but are no longer rendered as an overlay.
 */
export default function Shot({
  tone,
  src,
  tinaField,
  priority = false,
}: {
  tone: Tone;
  /** Photographer brief; retained as data, no longer rendered as an overlay. */
  label: string;
  src?: string;
  /** Formerly aligned the brief chip to the right; retained for caller compatibility. */
  chipRight?: boolean;
  /** Optional Tina visual-editing handle, set by `tinaField(...)`. */
  tinaField?: string;
  /**
   * Above-the-fold hero image (the LCP element): load eagerly at high priority.
   * Leave false (default) for every below-the-fold image so they stay lazy.
   * SEO Plan doc 09, Phase 2.
   */
  priority?: boolean;
}) {
  return (
    <div className={`ph ph-${tone}`} data-tina-field={tinaField}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="ph-img"
          src={asset(src)}
          alt=""
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      ) : null}
    </div>
  );
}
