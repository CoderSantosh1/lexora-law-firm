"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "../components/ui/Icons";
import Stars from "../components/ui/Stars";
import category from "@/data/category.json";

const { TESTIMONIALS } = category;

type Testimonial = (typeof TESTIMONIALS)[number];

const AUTOPLAY_MS = 4500;

export default function TestimonialCarousel({
  items,
}: {
  items: Testimonial[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pageRef = useRef(0);

  const pages = Math.max(1, Math.ceil(items.length / perView));

  // Measure the number of visible cards
  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const measure = () => {
      const card = el.children[0] as HTMLElement | undefined;
      if (!card) return;

      const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
      const count = Math.max(
        1,
        Math.round((el.clientWidth + gap) / (card.offsetWidth + gap)),
      );

      setPerView(count);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [items.length]);

  // Navigate between pages
  const goTo = useCallback(
    (p: number) => {
      const el = track.current;
      if (!el) return;

      const target = ((p % pages) + pages) % pages;
      const card = el.children[target * perView] as HTMLElement | undefined;
      const first = el.children[0] as HTMLElement | undefined;

      if (!card || !first) return;

      pageRef.current = target;
      setPage(target);

      el.scrollTo({
        left: card.offsetLeft - first.offsetLeft,
        behavior: "smooth",
      });
    },
    [pages, perView],
  );

  // Update pagination when scrolling manually
  const onScroll = () => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const second = el?.children[1] as HTMLElement | undefined;

    if (!el || !first || !second) return;

    const atEnd =
      el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;

    const stride = (second.offsetLeft - first.offsetLeft) * perView;

    const next = atEnd
      ? pages - 1
      : Math.min(pages - 1, Math.round(el.scrollLeft / stride));

    pageRef.current = next;
    setPage(next);
  };

  // Autoplay
  useEffect(() => {
    if (
      paused ||
      pages < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = setInterval(() => {
      goTo(pageRef.current + 1);
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [paused, pages, goTo]);

  const arrow =
    "grid size-10 shrink-0 place-items-center rounded-full border border-line bg-white text-ink shadow-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white disabled:pointer-events-none disabled:opacity-30 sm:size-11";

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Slider with arrows outside the cards */}
      <div className="relative px-12 sm:px-14">
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
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc((100%-20px)/2)] sm:p-7 lg:w-[calc((100%-60px)/3)]"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <Quote className="size-7 text-stone" />
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>

                <span className="min-w-0">
                  <span className="block font-serif text-lg font-semibold leading-tight">
                    {t.name}
                  </span>

                  <span className="block truncate text-[13px] text-muted">
                    {t.role}
                  </span>
                </span>
              </figcaption>

              <span className="mt-4 w-fit rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-gold-deep">
                {t.area}
              </span>
            </figure>
          ))}
        </div>

        {/* Previous arrow — outside the left card edge */}
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => goTo(page - 1)}
          disabled={pages < 2}
          className={`${arrow} absolute left-0 top-1/2 z-10 -translate-y-1/2`}
        >
          <ArrowLeft className="size-4" />
        </button>

        {/* Next arrow — outside the right card edge */}
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => goTo(page + 1)}
          disabled={pages < 2}
          className={`${arrow} absolute right-0 top-1/2 z-10 -translate-y-1/2`}
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center">
        <div
          className="flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Testimonial pages"
        >
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ease-lux ${
                i === page
                  ? "w-10 bg-gold"
                  : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}