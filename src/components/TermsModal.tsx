import Modal from "@/components/Modal";

/**
 * "Full rules and booking terms" pop-up (Doc 07 D7). Opens on the page instead
 * of navigating away. Built from the known operational rules; the formal
 * booking terms (Doc 04) drop in where the [CONFIRM] note sits.
 */
export default function TermsModal({ label = "Full rules and booking terms" }: { label?: string }) {
  return (
    <Modal label={label} title="Rules & booking terms" buttonClassName="rules-link">
      <div className="terms">
        <h4>Before you arrive</h4>
        <ul>
          <li>Anyone 18 or over should carry photo ID: NIC, license or passport.</li>
          <li>Swimwear or silk suits only in the pools. No denim, cotton or shawls, they are unsafe on the slides.</li>
          <li>Towels are not included. Bring your own, or purchase one on site.</li>
          <li>We do not serve alcohol. You are welcome to enjoy your own after 2 pm. No pools or activities after drinking.</li>
          <li>Children under 18 must come along with a parent or guardian.</li>
        </ul>
        <h4>Safety</h4>
        <ul>
          <li>Lifeguards are on duty all day. Please follow their instructions at all times.</li>
          <li>The deep pool closes at 6:30 pm, once the light goes.</li>
          <li>Activities are taken at your own pace; please use the safety equipment provided.</li>
        </ul>
        <h4>Booking</h4>
        <ul>
          <li>Book on WhatsApp with your date, number of people and name. Walk-ins are welcome; a message ahead secures busy days.</li>
          <li>Booking direct with us is the best rate.</li>
          <li>Pool-only tickets are available on non-holidays, and on holidays only if check-in is after 2 pm.</li>
        </ul>
        <p style={{ marginTop: 6 }}>
          <span className="confirm-note">
            [CONFIRM] full formal booking terms from the founder (Doc 04) to be added here
          </span>
        </p>
      </div>
    </Modal>
  );
}
