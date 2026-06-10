import Shot from "@/components/Shot";
import WhatsAppPill from "@/components/WhatsAppPill";
import { EdgeOverlay } from "@/components/SectionEdge";
import { messages } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="final">
      <div className="bg">
        <Shot
          tone="gold"
          label="shot 20: golden hour over the paddy"
          src="/assets/photos/aerial-pools.jpg"
          chipRight
        />
      </div>
      <EdgeOverlay fill="card" position="top" />
      <div className="wrap rv">
        <h2>Other places give you a bed. We give you Galle.</h2>
        <p>Tell us how long you&apos;re around. We&apos;ll plan the day, the stay, or the whole week.</p>
        <WhatsAppPill message={messages.finalCta} big>
          Start the chat
        </WhatsAppPill>
      </div>
      <div className="treeline" aria-hidden="true">
        <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
          <path
            fill="#27523D"
            opacity=".55"
            d="M0 88 C40 62 70 54 105 68 C125 38 160 32 185 56 C210 36 240 44 265 66 C300 48 335 66 370 60 C388 30 422 24 448 50 C478 32 505 46 530 66 C565 52 600 70 635 62 C652 36 688 30 712 54 C742 40 772 52 800 68 C835 54 868 72 900 64 C918 38 952 32 978 56 C1006 42 1036 56 1065 70 C1098 58 1130 74 1162 66 C1178 42 1212 36 1235 58 C1262 46 1295 60 1325 72 C1358 62 1395 70 1440 64 L1440 130 L0 130 Z"
          />
          <g stroke="#143026" strokeWidth="6" fill="none" strokeLinecap="round">
            <path d="M310 70 C300 48 284 40 266 40" />
            <path d="M310 70 C306 44 296 28 280 20" />
            <path d="M310 70 C312 42 312 26 308 12" />
            <path d="M310 70 C316 44 328 30 344 22" />
            <path d="M310 70 C320 50 338 44 356 44" />
            <path d="M310 70 L310 96" />
          </g>
          <g stroke="#143026" strokeWidth="5" fill="none" strokeLinecap="round">
            <path d="M1135 76 C1127 58 1114 52 1100 52" />
            <path d="M1135 76 C1132 54 1124 42 1112 35" />
            <path d="M1135 76 C1137 52 1137 40 1134 28" />
            <path d="M1135 76 C1141 54 1151 44 1164 38" />
            <path d="M1135 76 C1143 60 1158 54 1172 54" />
            <path d="M1135 76 L1135 100" />
          </g>
          <path
            fill="#143026"
            d="M0 100 C35 80 62 74 92 84 C108 60 138 56 158 74 C180 58 206 64 228 82 C258 68 290 82 320 78 C335 54 364 50 386 70 C412 56 436 68 458 84 C488 72 518 86 548 80 C562 58 592 52 614 72 C640 60 666 70 690 86 C720 74 750 88 780 82 C795 60 824 54 846 74 C872 62 898 74 922 88 C950 78 978 90 1006 84 C1020 62 1050 56 1072 76 C1098 64 1126 76 1152 90 C1180 80 1208 92 1236 86 C1250 66 1280 60 1302 78 C1328 68 1356 80 1382 92 C1404 86 1424 90 1440 86 L1440 130 L0 130 Z"
          />
        </svg>
      </div>
    </section>
  );
}
