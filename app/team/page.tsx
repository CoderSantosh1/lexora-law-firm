import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import Parallax from "../components/motion/Parallax";
import Reveal from "../components/motion/Reveal";
import category from "@/data/category.json";
const { IMAGES, TEAM } = category;

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="The counsel" title="Our Team" line="Forty minds. One table." image={IMAGES.meetingTeam} />

      <section className="shell py-16">
        <SectionHeading eyebrow="Partners & associates" title="Meet the" accent="Attorneys" />
        <div className="mt-[clamp(40px,4.5vw,56px)] grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} as="figure" delay={(i % 4) * 110} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition-all duration-700 ease-lux group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute inset-3 rounded-xl border border-white/80 opacity-0 transition-all duration-700 ease-lux group-hover:inset-4 group-hover:opacity-100" />
              </div>
              <figcaption className="mt-4">
                <span className="block font-serif text-2xl font-semibold">{m.name}</span>
                <span className="text-[11px] tracking-[0.24em] text-gold-deep uppercase">{m.role}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      
      <CtaBanner image={IMAGES.suitAdjust} />
    </>
  );
}
