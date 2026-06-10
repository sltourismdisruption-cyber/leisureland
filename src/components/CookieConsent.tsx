"use client";

import { useEffect, useState } from "react";

const KEY = "ll-cookie-ok";

/** Lightweight cookie notice. Remembers the choice; analytics hooks land later. */
export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // localStorage blocked — just don't nag
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p>
        We use a couple of cookies to understand how the site is used. Nothing creepy. <a href="#">Learn more</a>.
      </p>
      <button className="pill" onClick={accept}>Okay</button>
    </div>
  );
}
