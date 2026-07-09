import Image from "next/image";
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
  sizes = "100vw",
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
   * SEO Plan doc 09, Phase 2 / Perf doc Phase 1.
   */
  priority?: boolean;
  /**
   * Responsive `sizes` hint for the optimizer. Defaults to full-bleed (100vw),
   * correct for the heroes; grid tiles can pass a tighter value to shrink the
   * downloaded variant further. Perf doc Phase 1, Path B.
   */
  sizes?: string;
}) {
  return (
    <div className={`ph ph-${tone}`} data-tina-field={tinaField}>
      {src ? (
        // next/image + `fill`: the .ph container is always CSS-sized (aspect-
        // ratio / inset:0 in a sized frame), so fill matches the old absolute
        // <img> exactly and CLS stays ~0. `className="ph-img"` keeps object-fit:
        // cover and the hero Ken Burns animation. Tina editing is unaffected —
        // the data-tina-field handle stays on the wrapper, not the image.
        <Image
          className="ph-img"
          src={asset(src)}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
        />
      ) : null}
    </div>
  );
}
