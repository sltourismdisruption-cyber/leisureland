import { waLink, messages } from "@/lib/constants";
import WaIcon from "@/components/WaIcon";

/** Floating WhatsApp button, the only place #25D366 green is used. */
export default function Fab() {
  return (
    <a
      className="fab"
      href={waLink(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <WaIcon />
    </a>
  );
}
