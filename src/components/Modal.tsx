"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

/**
 * Generic pop-up dialog with its own trigger button. Reuses the lightbox
 * behaviour (lock page scroll, close on Escape, close on backdrop click) so
 * menus, terms and any other "open in a modal" content stay on the page
 * instead of navigating away.
 */
export default function Modal({
  label,
  title,
  children,
  buttonClassName = "btn-outline",
}: {
  label: ReactNode;
  title: string;
  children: ReactNode;
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" className={buttonClassName} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open ? (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="modal-panel">
            <div className="modal-head">
              <h3 id={titleId}>{title}</h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setOpen(false)}
                aria-label="Close"
                autoFocus
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
