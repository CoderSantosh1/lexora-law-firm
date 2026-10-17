import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner, PageHero } from "../components/Blocks";
import { ArrowRight, PracticeIcon } from "../components/Icons";
import { Reveal } from "../components/Motion";
import { IMAGES, PRACTICE } from "../lib/data";

export const metadata: Metadata = { title: "Practice Areas" };

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Practice Areas" line="Five disciplines. One standard." image={IMAGES.library} />

      {/* Zig-zag photo rows */}
      <section className="shell space-y-24 py-24 sm:space-y-32 sm:py-32">
        {PRACTICE.map((p, i) => (
          <div key={p.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal
              variant="clip"
              className={`aspect-[16/11] overflow-hidden rounded-2xl lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}
              innerClassName="group"
            >
              <Link href={`/practice-areas/${p.slug}`} aria-label={p.title}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
                />
              </Link>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-5">
              <p className="flex items-center gap-4 text-gold">
                <span className="font-serif text-6xl leading-none font-semibold text-stone">0{i + 1}</span>
                <PracticeIcon name={p.icon} className="size-9" />
              </p>
              <h2 className="mt-5 font-serif text-[clamp(38px,4.5vw,60px)] leading-[1] font-semibold">{p.title}</h2>
              <p className="mt-4 text-lg text-muted">{p.line}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.services.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full border border-line bg-white px-4 py-1.5 text-xs text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                href={`/practice-areas/${p.slug}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-deep"
              >
                Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        ))}
      </section>

      <CtaBanner image={IMAGES.justiceBronze} />
    </>
  );
}
