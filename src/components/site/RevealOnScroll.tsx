"use client";

import { useEffect } from "react";

/**
 * Adds `.is-visible` to any `.reveal` element as it scrolls into view, driving
 * the fade-and-rise animation. Watches for elements added later (client-rendered
 * carousels, future page navigations) via a MutationObserver, and fully respects
 * `prefers-reduced-motion`.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    };

    observeAll();
    const t = setTimeout(observeAll, 250);

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
