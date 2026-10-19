"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "../components/ui/Icons";
import Stars from "../components/ui/Stars";
import { TESTIMONIALS } from "../lib/data";

type Testimonial = (typeof TESTIMONIALS)[number];

const AUTOPLAY_MS = 4500;

/**
 * One-row testimonial slider: 4 cards on desktop, 2 on tablet, 1 on mobile.
 * Native scroll-snap handles swipe/drag; dots and arrows jump a full "page" of cards;
 * autoplay advances a page and pauses on hover, focus or touch.
 */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(4);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pageRef = useRef(0); // latest page for the autoplay interval

  const pages = Math.max(1, Math.ceil(items.length / perView));

  // How many cards fit, from the real card + gap widths
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => {
      const card = el.children[0] as HTMLElement | undefined;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      setPerView(Math.max(1, Math.round((el.clientWidth + gap) / (card.offsetWidth + gap))));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (p: number) => {
      const el = track.current;
      if (!el) return;
      const target = ((p % pages) + pages) % pages;
      const card = el.children[target * perView] as HTMLElement | undefined;
      const first = el.children[0] as HTMLElement | undefined;
      if (!card || !first) return;
      el.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: "smooth" });
    },
    [pages, perView],
  );

  // Keep the active dot in sync with manual swipes too.
  // One page = perView × (card width + gap), measured from the real card positions.
  const onScroll = () => {
    const el = track.current;
    const a = el?.children[0] as HTMLElement | undefined;
    const b = el?.children[1] as HTMLElement | undefined;
    if (!el || !a || !b) return;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
    const stride = (b.offsetLeft - a.offsetLeft) * perView;
    const next = atEnd ? pages - 1 : Math.round(el.scrollLeft / stride);
    pageRef.current = next;
    setPage(next);
  };

  // Autoplay on a steady interval, so an interrupted scroll can never stall it
  useEffect(() => {
    if (paused || pages < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => goTo(pageRef.current + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, pages, goTo]);

  const arrow =
    "grid size-11 place-items-center rounded-full border border-line bg-white transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-white";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={track}
        onScroll={onScroll}
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-7 sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
          >
            <div className="flex items-center justify-between">
              <Stars />
              <Quote className="size-7 text-stone" />
            </div>
            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">“{t.quote}”</blockquote>
            <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
                <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
              </span>
              <span className="min-w-0">
                <span className="block font-serif text-lg leading-tight font-semibold">{t.name}</span>
                <span className="block truncate text-[13px] text-muted">{t.role}</span>
              </span>
            </figcaption>
            <span className="mt-4 w-fit rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-gold-deep">{t.area}</span>
          </figure>
        ))}
      </div>

      {/* Pagination: dots + arrows */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Testimonial pages">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-lux ${i === page ? "w-10 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40"}`}
            />
          ))}
        </div>
        {/* <div className="flex gap-2">
          <button type="button" aria-label="Previous testimonials" onClick={() => goTo(page - 1)} className={arrow}>
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" aria-label="Next testimonials" onClick={() => goTo(page + 1)} className={arrow}>
            <ArrowRight className="size-4" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
