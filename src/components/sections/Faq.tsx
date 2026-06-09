"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section--cream" id="faq" data-screen-label="FAQ">
      <div className="wrap wrap--md">
        <div className="sec-head sec-head--center reveal">
          <span className="ll-eyebrow" style={{ justifyContent: "center" }}>
            <Icon name="messages-square" />FAQ
          </span>
          <h2 className="sec-title">Quick Questions, Quick Answers</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className="faq reveal" key={f.q} data-open={open === i ? "true" : "false"}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <Icon name="plus" className="faq__icon" />
              </button>
              <div className="faq__a-wrap">
                <p className="faq__a">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
