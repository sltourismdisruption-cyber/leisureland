import Modal from "@/components/Modal";
import WhatsAppPill from "@/components/WhatsAppPill";
import { messages } from "@/lib/constants";

/**
 * "View the full menu" pop-up (Doc 07 D5 + Round 3 F1). The full food & drinks
 * menu will be supplied by the founder as photos/PDF; until it lands the modal
 * shows a tidy "coming soon" placeholder (not the old text dish list), with a
 * WhatsApp shortcut to ask for today's menu.
 */
export default function MenuModal({ label = "View the menu" }: { label?: string }) {
  return (
    <Modal label={label} title="The menu">
      <div className="menu-soon">
        <p>
          <strong>Our full food &amp; drinks menu is coming soon.</strong>
        </p>
        <p>
          We&apos;re putting it together now. In the meantime, message us and we&apos;ll tell you
          exactly what&apos;s cooking today.
        </p>
        <WhatsAppPill message={messages.menu}>Ask us for the menu</WhatsAppPill>
      </div>
    </Modal>
  );
}
