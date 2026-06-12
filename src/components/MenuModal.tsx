import Modal from "@/components/Modal";
import { menu } from "@/lib/constants";

/**
 * "View the menu" pop-up (Doc 07 D5 + F1). Shows the current buffet line-up
 * from lib/constants until the founder's full food-and-drinks menu file lands,
 * at which point the [ASSET] note is swapped for the real menu (PDF/images).
 */
export default function MenuModal({ label = "View the menu" }: { label?: string }) {
  return (
    <Modal label={label} title="The menu">
      <div className="menu" style={{ marginTop: 0 }}>
        {menu.map((m) => (
          <div className="mrow" key={m.dish}>
            <b>{m.dish}</b>, {m.note}
          </div>
        ))}
      </div>
      <p style={{ marginTop: 18 }}>
        <span className="confirm-note">
          [ASSET] full food and drinks menu coming from the founder; this is the current buffet until it lands
        </span>
      </p>
    </Modal>
  );
}
