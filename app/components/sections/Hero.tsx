"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import category from "@/data/category.json";
const { IMAGES } = category;
import { ArrowLeft, ArrowRight } from "../ui/Icons";

const SLIDES = [
  {
    image: "/images/hero/consultation.png",
    alt: "Lexora attorneys in a client consultation",
    line1: "Guiding Your",
    line2: "Next Chapter",
    position: "object-[62%_center]",
  },
  {
    image: IMAGES.justiceBronze,
    alt: "Bronze statue of Lady Justice",
    line1: "Standing Firm",
    line2: "For Your Rights",
    position: "object-[60%_30%]",
  },
  {
    image: IMAGES.libraryLadder,
    alt: "Lexora law library",
    line1: "Wisdom Behind",
    line2: "Every Decision",
    position: "object-center",
  },
];

// Thin gold arcs framing the banner (viewBox 2000 × 692, stretched to the edges)
const ARCS = [
  "M300 692 C 330 520, 500 330, 760 312",
  "M0 420 C 120 470, 230 560, 300 692",
  "M1740 0 C 1840 90, 1900 200, 1905 320",
  "M1755 692 C 1840 600, 1940 470, 2000 380",
];

const DURATION = 6500; // ms per slide
const SHUTTERS = 6;
const INTRO_MS = 900; // headline waits for the shutters on first load

// Full-bleed photo banner: shutter intro, wipe-in slideshow with slow zoom, centred two-line headline.
export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  // Bumped each time a slide becomes active, so only that slide remounts (restarting its wipe + zoom)
  const [entries, setEntries] = useState(() => SLIDES.map(() => 0));

  const go = useCallback(
    (next: number) => {
      const n = (next + SLIDES.length) % SLIDES.length;
      setPrev(active);
      setActive(n);
      setEntries((e) => e.map((v, i) => (i === n ? v + 1 : v)));
    },
    [active],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1), DURATION);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  const slide = SLIDES[active];
  const textDelay = prev === null ? INTRO_MS : 450; // later slides wait for the wipe

  return (
    <section id="home" className="relative isolate h-svh min-h-[640px] overflow-hidden bg-ink text-white">
      {/* Slides — the active one wipes in over the previous, both keep slowly zooming */}
      {SLIDES.map((s, i) => {
        const isActive = i === active;
        const isPrev = i === prev;
        return (
          <div key={s.alt} className={`absolute inset-0 ${isActive ? "z-2" : isPrev ? "z-1" : "z-0 opacity-0"}`} aria-hidden={!isActive}>
            <div key={entries[i]} className={`absolute inset-0 ${isActive && prev !== null ? "animate-hero-wipe-x" : ""}`}>
              <div className={`absolute inset-0 ${isActive || isPrev ? "animate-kenburns" : ""}`}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  preload={i === 0}
                  loading={i === 0 ? undefined : "eager"}
                  sizes="100vw"
                  className={`object-cover ${s.position}`}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Cinematic shade — darkest behind the centred headline */}
      <div className="pointer-events-none absolute inset-0 z-3 bg-[radial-gradient(ellipse_45%_40%_at_50%_50%,rgba(12,9,6,0.45)_0%,rgba(12,9,6,0)_100%),linear-gradient(0deg,rgba(12,9,6,0.6)_0%,rgba(12,9,6,0.25)_45%,rgba(12,9,6,0.35)_100%)] max-md:bg-[linear-gradient(0deg,rgba(12,9,6,0.65)_0%,rgba(12,9,6,0.45)_50%,rgba(12,9,6,0.4)_100%)]" />

      {/* Gold arcs — redraw on every slide */}
      <svg
        key={active}
        viewBox="0 0 2000 692"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 z-3 size-full drop-shadow-[0_0_6px_rgba(232,184,104,0.55)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arcGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f3d9a4" />
            <stop offset="100%" stopColor="#c99a52" />
          </linearGradient>
        </defs>
        {ARCS.map((d, i) => (
          // Native SVG animation: the stroke draws itself in; the keyed <svg> restarts it each slide
          <path key={d} d={d} pathLength={1} strokeDasharray={1} strokeDashoffset={1} strokeWidth={1.6} fill="none" stroke="url(#arcGold)">
            <animate
              attributeName="stroke-dashoffset"
              from="1"
              to="0"
              dur="2.6s"
              begin={`${((prev === null ? 500 : 250) + i * 180) / 1000}s`}
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.65 0 0.35 1"
              fill="freeze"
            />
          </path>
        ))}
      </svg>

      {/* Centred headline */}
      <div className="absolute inset-0 z-4 flex flex-col items-center justify-center px-(--pad) text-center">
        <h1 key={active} className="font-serif text-[clamp(46px,6.6vw,108px)] leading-[1.06] font-medium tracking-[0.005em]">
          <span className="block overflow-hidden pb-[0.04em]">
            <span style={{ animationDelay: `${textDelay}ms` }} className="block animate-hero-word">
              {slide.line1}
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span style={{ animationDelay: `${textDelay + 150}ms` }} className="block animate-hero-word text-gold-soft">
              {slide.line2}
            </span>
          </span>
        </h1>
        <span
          key={`rule-${active}`}
          style={{ animationDelay: `${textDelay + 450}ms` }}
          className="mt-6 h-px w-16 origin-center animate-hero-progress bg-gold-soft [animation-duration:900ms]"
        />
      </div>

      {/* Slide counter + controls */}
      <div
            style={{ animationDelay: `${INTRO_MS + 700}ms` }}
            className="absolute inset-x-0 bottom-[clamp(32px,6svh,64px)] z-4 flex animate-hero-rise justify-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
                  
        <div className="flex items-center justify-center gap-3 max-md:hidden">
        {[
          { label: "Previous slide", dir: -1, Icon: ArrowLeft },
          { label: "Next slide", dir: 1, Icon: ArrowRight },
          ].map(({ label, dir, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => go(active + dir)}
              className="grid size-11 place-items-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-gold-soft hover:bg-gold-soft hover:text-ink"
            >
              <Icon className="size-4" />
            </button>
          ))}
        </div>
            </div>

      {/* Shutter intro: ivory panels lift away one after another */}
      <div className="pointer-events-none absolute inset-0 z-20 flex" aria-hidden="true">
        {Array.from({ length: SHUTTERS }, (_, i) => (
          <span
            key={i}
            style={{ animationDelay: `${150 + i * 80}ms` }}
            className="h-full flex-1 animate-hero-shutter border-r border-gold/20 bg-ivory last:border-r-0"
          />
        ))}
      </div>
    </section>
  );
}
