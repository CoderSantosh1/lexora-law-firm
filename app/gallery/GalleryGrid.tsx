"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "../components/Icons";
import { GALLERY, type GalleryTag } from "../lib/data";

const FILTERS: ("All" | GalleryTag)[] = ["All", "Office", "Courtroom", "Moments"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter);

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter photos">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
              filter === f ? "bg-ink text-ivory" : "border border-line bg-white text-ink-soft hover:border-gold hover:text-gold-deep"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry via CSS columns; `key` re-mounts so the stagger replays on filter change */}
      <div key={filter} className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((g, i) => (
          <button
            key={g.image}
            type="button"
            onClick={() => setOpen(i)}
            style={{ animationDelay: `${i * 70}ms` }}
            className="group relative mb-4 block w-full animate-rise cursor-zoom-in overflow-hidden rounded-2xl break-inside-avoid"
          >
            <div className={`relative w-full ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
              />
            </div>
            <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-lg bg-ivory/95 px-4 py-2 text-left text-sm opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {g.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[open].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ivory/95 p-4 backdrop-blur-md sm:p-10"
          onClick={() => setOpen(null)}
        >
          <div className="relative h-full w-full max-w-6xl animate-rise" onClick={(e) => e.stopPropagation()}>
            <Image src={items[open].image} alt={items[open].alt} fill sizes="100vw" className="rounded-xl object-contain" />
          </div>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted">
            {items[open].alt} · {open + 1}/{items.length}
          </p>
          <LightboxButton label="Close" className="top-5 right-5" onClick={() => setOpen(null)}>
            <Close className="size-5" />
          </LightboxButton>
          <LightboxButton label="Previous photo" className="top-1/2 left-3 -translate-y-1/2 sm:left-6" onClick={() => step(-1)}>
            <ArrowLeft className="size-5" />
          </LightboxButton>
          <LightboxButton label="Next photo" className="top-1/2 right-3 -translate-y-1/2 sm:right-6" onClick={() => step(1)}>
            <ArrowRight className="size-5" />
          </LightboxButton>
        </div>
      )}
    </>
  );
}

function LightboxButton({
  label,
  className,
  onClick,
  children,
}: {
  label: string;
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute grid size-12 place-items-center rounded-full bg-white text-ink shadow-lg transition-colors hover:bg-gold hover:text-white ${className}`}
    >
      {children}
    </button>
  );
}
