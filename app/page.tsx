import Image from "next/image";
import Link from "next/link";
import CtaBanner from "./components/sections/CtaBanner";
import ImageMarquee from "./components/sections/ImageMarquee";
import SectionHeading from "./components/sections/SectionHeading";
import Hero from "./components/sections/Hero";
import { ArrowRight, PracticeIcon } from "./components/ui/Icons";
import Counter from "./components/motion/Counter";
import Parallax from "./components/motion/Parallax";
import Reveal from "./components/motion/Reveal";
import category from "@/data/category.json";
import type { PracticeArea } from "@/types";
const { IMAGES, INSIGHTS, STATS, TEAM } = category;
const PRACTICE = category.PRACTICE as PracticeArea[];


export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro — three-photo collage */}
      <section id="intro" className="shell grid scroll-mt-20 items-center gap-16 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Since 1998" title="Counsel with" accent="character." />
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-lg text-muted">Strategy, care and courtroom strength — under one roof.</p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium transition-colors hover:border-gold hover:text-gold-deep"
            >
              Our story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Reveal variant="clip" className="row-span-2 h-full overflow-hidden rounded-2xl">
            <Image src={IMAGES.justiceLight} alt="Lady Justice" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </Reveal>
          <Reveal variant="clip" delay={150} className="aspect-square overflow-hidden rounded-2xl">
            <Image src={IMAGES.meetingTable} alt="Client meeting" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </Reveal>
          <Reveal variant="clip" delay={300} className="aspect-square overflow-hidden rounded-2xl">
            <Image src={IMAGES.libraryLadder} alt="Law library" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Practice areas — tall photo cards */}
      <section className="shell pb-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What we do" title="Practice" accent="Areas" />
          <Reveal>
            <Link href="/practice-areas" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-gold-deep">
              View all <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PRACTICE.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link
                href={`/practice-areas/${p.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                {/* <span className="absolute top-4 left-4 text-xs tracking-[0.2em] text-white/80">0{i + 1}</span> */}
                <span className="absolute inset-x-5 bottom-5 text-white">
                  <PracticeIcon name={p.icon} className="size-7 text-gold-soft" />
                  <span className="mt-3 block font-serif text-2xl leading-tight font-semibold">{p.title}</span>
                  <span className="mt-2 flex translate-y-3 items-center gap-2 text-xs text-gold-soft opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore <ArrowRight className="size-3.5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Parallax photo + quote card */}
      <section className="relative h-[85svh] min-h-[520px] overflow-hidden">
        <Parallax>
          <Image src={IMAGES.columns} alt="" fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="shell relative flex h-full items-end justify-end pb-16">
          <Reveal className="max-w-md rounded-2xl bg-ivory/95 p-8 backdrop-blur-sm sm:p-10">
            <p className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1] italic">
              “Excellence is not an act, <span className="text-gold">it is our habit.</span>”
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="shell grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 120}
            className={`py-16 text-center ${i % 2 ? "border-l border-line" : ""} ${i === 2 ? "lg:border-l" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
          >
            <p className="font-serif text-[clamp(48px,5vw,72px)] leading-none font-semibold text-gold">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[11px] tracking-[0.28em] text-muted uppercase">{s.label}</p>
          </Reveal>
        ))}
      </section>

      {/* Team preview */}
      <section className="shell pb-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The counsel" title="Meet the" accent="Team" />
          <Reveal>
            <Link href="/team" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-gold-deep">
            View  All <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-[clamp(40px,4.5vw,56px)] grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TEAM.slice(0, 4).map((m, i) => (
            <Reveal key={m.name} as="figure" delay={i * 120} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 ease-lux group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-4">
                <span className="block font-serif text-2xl font-semibold">{m.name}</span>
                <span className="text-[11px] tracking-[0.24em] text-gold-deep uppercase">{m.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

     

      {/* Insights preview */}
      <section className="shell pb-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Journal" title="Latest" accent="Insights" />
          <Reveal>
            <Link href="/insights" className="group inline-flex items-center gap-2 text-sm font-medium hover:text-gold-deep">
              Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-8 md:grid-cols-3">
          {INSIGHTS.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} as="article" delay={i * 120} className="group">
              <Link href={`/insights/${a.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-ivory/95 px-3 py-1 text-[11px] font-medium text-ink">
                    {a.tag}
                  </span>
                </div>
                <p className="mt-4 text-xs text-muted">
                  {a.date} · {a.readTime}
                </p>
                <h3 className="mt-1 font-serif text-2xl leading-snug font-semibold transition-colors group-hover:text-gold-deep">
                  {a.title}
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
