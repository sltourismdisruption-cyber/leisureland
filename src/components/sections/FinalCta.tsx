import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import { EdgeOverlay, type EdgeColor } from "@/components/SectionEdge";
import { messages } from "@/lib/constants";

/**
 * The golden-hour closer. The site's signature wavy edge carries the photo
 * into the night-green footer, so the seam speaks the same language as every
 * other band transition (it replaced the old scalloped treeline). Every page
 * ends with this section so the footer seam is identical sitewide (handoff v2
 * rule 10). Props let each page bring its own copy; defaults are the homepage.
 */
export default function FinalCta({
  heading = "Skip the boring landmarks. Come and collect stories you'll tell for a lifetime.",
  body = "Tell us how long you're around. We'll plan the day, the stay, or the whole week.",
  ctaLabel = "Start the chat",
  message = messages.finalCta,
  edgeFill = "card",
  src = "/assets/photos/aerial-pools.jpg",
  tinaField,
}: {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  message?: string;
  edgeFill?: EdgeColor;
  /** Background image. Defaults to the shared golden-hour aerial used sitewide. */
  src?: string;
  /** Optional Tina visual-editing handle for the CTA background image. */
  tinaField?: string;
}) {
  return (
    <section className="final">
      <div className="bg">
        <Shot
          tone="gold"
          label="shot 20: golden hour over the paddy"
          src={src}
          chipRight
          tinaField={tinaField}
        />
      </div>
      <EdgeOverlay fill={edgeFill} position="top" />
      <div className="wrap rv">
        <h2>{heading}</h2>
        <p>{body}</p>
        <WhatsAppPill message={message} big>
          {ctaLabel}
        </WhatsAppPill>
      </div>
      <EdgeOverlay fill="night" position="bottom" />
    </section>
  );
}
