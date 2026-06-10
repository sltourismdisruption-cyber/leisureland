"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to `.rv` elements as they scroll into view (fade + 20px rise),
 * and drives the price underline draw. Runs once per element. Visuals are
 * already forced static under prefers-reduced-motion via CSS.
 */
export default function RevealObserver() {
  useEffect(() => {
    // No IntersectionObserver (very old browser)? Show everything immediately.
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () =>
      document.querySelectorAll(".rv:not(.in)").forEach((el) => io.observe(el));

    observe();
    const t = setTimeout(observe, 200);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
