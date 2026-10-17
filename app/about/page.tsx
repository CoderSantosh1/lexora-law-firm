import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner, ImageMarquee, PageHero, SectionHeading } from "../components/Blocks";
import { Counter, Reveal } from "../components/Motion";
import { IMAGES, MILESTONES, STATS, VALUES } from "../lib/data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Built on trust." line="Three decades of counsel, one promise." image={IMAGES.boardroom} />

      {/* Story — overlapping photos */}
      <section className="shell grid items-center gap-16 py-24 sm:py-32 lg:grid-cols-2">
        <div className="relative pb-16 sm:pb-24">
          <Reveal variant="clip" className="aspect-[4/5] w-[80%] overflow-hidden rounded-2xl">
            <Image src={IMAGES.libraryLadder} alt="Our library" fill sizes="(max-width: 1024px) 80vw, 40vw" className="object-cover" />
          </Reveal>
          <Reveal
            variant="clip"
            delay={250}
            className="absolute right-0 bottom-0 aspect-square w-[48%] overflow-hidden rounded-2xl border-8 border-ivory"
          >
            <Image src={IMAGES.suitCuff} alt="Partner preparing for court" fill sizes="(max-width: 1024px) 48vw, 24vw" className="object-cover" />
          </Reveal>
        </div>
        <div>
          <SectionHeading eyebrow="Our story" title="Since" accent="1998." />
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-lg text-muted">
              Founded by two litigators in Delhi. Today, forty attorneys across three cities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values — word over photo */}
      <section className="shell">
        <SectionHeading eyebrow="What guides us" title="Our" accent="Values" align="center" />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.word} delay={i * 120} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={v.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute bottom-6 left-6 font-serif text-5xl font-semibold text-white">
                <span className="mr-3 align-top font-sans text-xs tracking-[0.2em] text-gold-soft">0{i + 1}</span>
                {v.word}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="shell py-24 sm:py-32">
        <SectionHeading eyebrow="Our journey" title="Milestones" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 140}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={m.image} alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <span className="mt-5 flex items-center gap-3">
                <span className="size-3 shrink-0 rounded-full bg-gold" />
                <span className="h-px flex-1 bg-line" />
              </span>
              <p className="mt-4 font-serif text-5xl font-semibold text-gold">{m.year}</p>
              <p className="mt-1 text-sm text-muted">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats on sand */}
      <section className="bg-sand py-20">
        <div className="shell grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="text-center">
              <p className="font-serif text-[clamp(48px,5vw,72px)] leading-none font-semibold text-gold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[11px] tracking-[0.28em] text-muted uppercase">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pt-24 sm:pt-32">
        <ImageMarquee />
      </div>

      <CtaBanner image={IMAGES.meetingRoom} />
    </>
  );
}
