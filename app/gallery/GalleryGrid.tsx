
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "../components/ui/Icons";
import category from "@/data/category.json";
const { GALLERY } = category;

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) =>
        i === null || GALLERY.length === 0
          ? i
          : (i + dir + GALLERY.length) % GALLERY.length,
      ),
    [],
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
      <section className="shell py-16">
        {/* Gallery Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-gold-deep uppercase sm:text-xs">
            <span className="h-px w-8 bg-gold" />
            Our Gallery
          </p>
        </div>

        {/* All Images — Masonry Grid */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {GALLERY.map((g, i) => (
            <button
              key={g.image}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View photo: ${g.alt}`}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group relative mb-4 block w-full animate-rise cursor-zoom-in overflow-hidden rounded-xl bg-ink/5 text-left break-inside-avoid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:mb-5"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  g.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && GALLERY[open] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[open].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-10"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative h-full w-full max-w-6xl animate-rise"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY[open].image}
              alt={GALLERY[open].alt}
              fill
              sizes="100vw"
              className="rounded-xl object-contain"
            />
          </div>

          <p className="absolute bottom-5 left-1/2 max-w-[75%] -translate-x-1/2 text-center text-xs text-white/80 sm:bottom-7 sm:text-sm">
            {GALLERY[open].alt} · {open + 1}/{GALLERY.length}
          </p>

          <LightboxButton
            label="Close"
            className="top-4 right-4 sm:top-6 sm:right-6"
            onClick={() => setOpen(null)}
          >
            <Close className="size-5" />
          </LightboxButton>

          {GALLERY.length > 1 && (
            <>
              <LightboxButton
                label="Previous photo"
                className="top-1/2 left-3 -translate-y-1/2 sm:left-6"
                onClick={() => step(-1)}
              >
                <ArrowLeft className="size-5" />
              </LightboxButton>

              <LightboxButton
                label="Next photo"
                className="top-1/2 right-3 -translate-y-1/2 sm:right-6"
                onClick={() => step(1)}
              >
                <ArrowRight className="size-5" />
              </LightboxButton>
            </>
          )}
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
      className={`absolute grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:size-12 ${className}`}
    >
      {children}
    </button>
  );
}
