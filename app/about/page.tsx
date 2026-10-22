import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "../components/sections/CtaBanner";
import ImageMarquee from "../components/sections/ImageMarquee";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import Counter from "../components/motion/Counter";
import Reveal from "../components/motion/Reveal";
import category from "@/data/category.json";
const { IMAGES, MILESTONES, STATS, VALUES } = category;
import Link from "next/link";
import { ArrowRight } from "../components/ui/Icons";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Built on trust." line="Three decades of counsel, one promise." image={IMAGES.boardroom} />

      {/* Story — overlapping photos */}
    
        <section className="shell grid items-center gap-16 py-16 lg:grid-cols-2">
          <div className="relative pb-[clamp(40px,4.5vw,56px)]">
            <Reveal
              variant="clip"
              className="aspect-[4/5] w-[80%] overflow-hidden rounded-2xl"
            >
              <Image
                src={IMAGES.libraryLadder}
                alt="Lexora law library"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal
              variant="clip"
              delay={250}
              className="absolute right-0 bottom-0 aspect-square w-[48%] overflow-hidden rounded-2xl border-8 border-ivory"
            >
              <Image
                src={IMAGES.suitCuff}
                alt="Legal professional preparing for court"
                fill
                sizes="(max-width: 1024px) 48vw, 24vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built on"
              accent="Trust."
            />

            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                Since 1998, we have helped individuals and businesses navigate
                complex legal challenges with clarity, integrity and purpose.
                Our approach combines thoughtful strategy with personal attention,
                keeping your interests at the heart of every decision.
              </p>

            
            </Reveal>
          </div>
        </section>


      {/* Values — word over photo */}
      <section className="shell px-10 py-10">
        <SectionHeading eyebrow="What guides us" title="Our" accent="Values" align="center" />
        <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-4 md:grid-cols-3">
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
      {/* <section className="shell py-16 px-10">
        <SectionHeading eyebrow="Our journey" title="Milestones" />
        <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      </section> */}

    
     

      <CtaBanner image={IMAGES.meetingRoom} />
    </>
  );
}
