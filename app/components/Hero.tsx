"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "./Icons";

const HERO_IMAGE =
  "/home/Collaborative%20Legal%20Consultation%20in%20a%20Modern%20Office.png";

// Light, Wix-style hero: a framed photo with a light card floating over it.
export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    // `data-loaded` drives every `group-data-loaded:` entrance animation below
    <section id="home" data-loaded={loaded || undefined} className="group shell pt-[96px]">
      <div className="relative isolate h-[calc(100svh-120px)] max-h-[860px] min-h-[600px] overflow-hidden rounded-2xl max-sm:h-[82svh] max-sm:min-h-[560px]">
        {/* Photo */}
        <Image
          src={HERO_IMAGE}
          alt="Legal professionals in a private consultation"
          fill
          preload
          sizes="(max-width: 1320px) 100vw, 1320px"
          className="-z-2 scale-[1.12] object-cover object-[62%_center] [transition:scale_8s_cubic-bezier(0.2,0.65,0.3,1)] group-data-loaded:scale-[1.02] max-sm:object-[64%_center] motion-reduce:scale-100!"
        />
        {/* Soft ivory wash on the card side keeps the photo light and the card readable */}
        <div className="pointer-events-none absolute inset-0 -z-1 bg-[linear-gradient(90deg,rgba(250,247,242,0.55)_0%,rgba(250,247,242,0.15)_40%,transparent_65%)] max-sm:bg-[linear-gradient(0deg,rgba(250,247,242,0.5)_0%,transparent_55%)]" />

        {/* Animated gold curves */}
        <svg
          className="pointer-events-none absolute inset-0 size-full opacity-80 max-sm:opacity-50"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arcGold">
              <stop offset="0%" stopColor="#dcbd85" stopOpacity="0" />
              <stop offset="50%" stopColor="#f3dcae" />
              <stop offset="100%" stopColor="#dcbd85" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="fill-none stroke-[1.4] [stroke-dasharray:1800] [stroke-dashoffset:1800] [stroke:url(#arcGold)] group-data-loaded:animate-hero-arc"
            d="M-100 720 C180 420 300 330 550 420 S980 780 1540 100"
          />
          <path
            className="fill-none stroke-[1.4] [stroke-dasharray:1800] [stroke-dashoffset:1800] [stroke:url(#arcGold)] group-data-loaded:animate-hero-arc-late group-data-loaded:opacity-60"
            d="M-100 100 C260 580 640 700 900 400 S1250 100 1540 500"
          />
        </svg>

        {/* Light card */}
        <div className="absolute top-1/2 left-10 w-[min(560px,calc(100%-5rem))] -translate-y-1/2 rounded-2xl bg-ivory/95 p-12 shadow-[0_40px_80px_-40px_rgba(29,27,24,0.45)] backdrop-blur-sm max-lg:left-6 max-lg:p-10 max-sm:top-auto max-sm:right-3 max-sm:bottom-3 max-sm:left-3 max-sm:w-auto max-sm:translate-y-0 max-sm:p-7">
          <p className="flex translate-y-4 items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase opacity-0 group-data-loaded:animate-hero-eyebrow max-sm:text-[10px] max-sm:tracking-[0.22em] motion-reduce:translate-y-0 motion-reduce:opacity-100">
            <span className="h-px w-8 bg-gold" />
            Trust • Advise • Represent
          </p>

          <h1 className="mt-5 font-serif text-[clamp(56px,7vw,104px)] leading-[0.92] font-semibold tracking-[-0.02em] text-ink">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="block translate-y-[115%] opacity-0 group-data-loaded:animate-hero-line-1 motion-reduce:translate-y-0 motion-reduce:opacity-100">
                Justice,
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <em className="block translate-y-[115%] font-medium text-gold opacity-0 group-data-loaded:animate-hero-line-2 motion-reduce:translate-y-0 motion-reduce:opacity-100">
                Redefined.
              </em>
            </span>
          </h1>

          <div className="mt-6 h-px w-0 bg-[linear-gradient(90deg,var(--color-gold),transparent)] group-data-loaded:animate-hero-divider" />

          {/* <p className="mt-6 max-w-sm translate-y-4 text-[15px] text-muted opacity-0 group-data-loaded:animate-hero-cta motion-reduce:translate-y-0 motion-reduce:opacity-100">
            Trusted counsel for business, family and property — since 1998.
          </p> */}

          <Link
            href="/contact"
            className="group/cta mt-8 inline-flex translate-y-4 items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory opacity-0 transition-[background-color,box-shadow] duration-500 group-data-loaded:animate-hero-cta hover:bg-gold-deep hover:shadow-[0_12px_30px_-12px_rgba(134,97,44,0.7)] max-sm:mt-6 motion-reduce:translate-y-0 motion-reduce:opacity-100"
          >
            Book Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
          </Link>
        </div>

     
      </div>
    </section>
  );
}
