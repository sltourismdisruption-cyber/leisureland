import Icon from "@/components/Icon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={whatsappLink("Hi! I'd like to book a day pass at Leisure Land.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon name="message-circle" />
      <span className="wa-label">WhatsApp us</span>
    </a>
  );
}
