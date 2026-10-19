import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/motion/Reveal";
import { IMAGES, INSIGHTS } from "../lib/data";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <>
      <PageHero eyebrow="Journal" title="Insights" line="Short reads from our attorneys." image={IMAGES.documents} />

      <section className="shell py-16 px-10">
        {/* Featured article */}
        <Reveal as="article" className="group grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={featured.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-105"
            />
          </div>
          <div>
            <span className="rounded-full bg-sand px-3 py-1 text-[11px] font-medium text-gold-deep">Featured · {featured.tag}</span>
            <h2 className="mt-5 font-serif text-[clamp(36px,4vw,56px)] leading-[1.02] font-semibold">{featured.title}</h2>
            <p className="mt-4 text-sm text-muted">{featured.date}</p>
          </div>
        </Reveal>

        {/* Article grid */}
        <div className="mt-[clamp(72px,9vw,128px)] grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal key={a.title} as="article" delay={(i % 3) * 120} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-ivory/95 px-3 py-1 text-[11px] font-medium">{a.tag}</span>
              </div>
              <p className="mt-4 text-xs text-muted">{a.date}</p>
              <h3 className="mt-1 font-serif text-2xl leading-snug font-semibold transition-colors group-hover:text-gold-deep">
                {a.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={IMAGES.laptopDesk} />
    </>
  );
}
