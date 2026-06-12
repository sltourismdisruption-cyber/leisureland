"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

/**
 * The ruled accordion used by every FAQ (home, /day-outing rules links,
 * /accommodation stay FAQ). Question in Albert Sans 600 ink, thin rules,
 * a plus that rotates to a cross. One panel open at a time.
 */
export default function Accordion({ items, idPrefix }: { items: QA[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faqs">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            className="faq rv"
            key={f.q}
            data-open={isOpen ? "true" : "false"}
            style={{ transitionDelay: `${Math.min(i * 45, 360)}ms` }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-ans-${i}`}
            >
              <span>{f.q}</span>
              <span className="plus" aria-hidden="true" />
            </button>
            <div className="ans-wrap" id={`${idPrefix}-ans-${i}`} role="region" aria-hidden={!isOpen}>
              <div className="ans">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
