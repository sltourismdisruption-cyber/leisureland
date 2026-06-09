"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/Icon";
import { ACTIVITIES, PHOTO } from "@/lib/content";

function ActivityCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  // Duplicate the list so the auto-scroll can loop seamlessly.
  const items = [...ACTIVITIES, ...ACTIVITIES];

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const step = () => {
      if (!paused.current) {
        el.scrollLeft += 0.6;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pause = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  return (
    <div className="carousel">
      <div
        className="carousel__track"
        ref={scroller}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onPointerDown={pause}
        onPointerUp={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        {items.map((a, i) => (
          <article className="act-card" key={i} aria-hidden={i >= ACTIVITIES.length ? "true" : undefined}>
            <div className="act-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO + a.img} alt={a.title} loading="lazy" />
              <span className="act-card__tag" data-kind={a.kind}>{a.tag}</span>
            </div>
            <div className="act-card__body">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="carousel__hint">
        <Icon name="move-horizontal" />
        <span>Swipe to explore all 10</span>
      </div>
    </div>
  );
}

export default function Activities() {
  return (
    <section className="section" id="activities" data-screen-label="Activities">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="ll-eyebrow"><Icon name="sparkles" />The activities</span>
          <h2 className="sec-title">Built for Splashing, Sliding &amp; Showing Off</h2>
          <p className="sec-intro">
            Water slides, traditional Sri Lankan games and jungle adventure — all in one
            nature-immersed park.
          </p>
        </div>
      </div>
      <div className="wrap">
        <ActivityCarousel />
      </div>
      <div className="wrap">
        <p className="act-close reveal">
          &quot;Whether you&apos;re 8 or 80, there&apos;s a slide, swing or traditional game with your
          name on it.&quot;
        </p>
      </div>
    </section>
  );
}
