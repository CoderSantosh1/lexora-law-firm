import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner, PageHero, SectionHeading } from "../components/Blocks";
import { Parallax, Reveal } from "../components/Motion";
import { IMAGES, TEAM } from "../lib/data";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="The counsel" title="Our Team" line="Forty minds. One table." image={IMAGES.meetingTeam} />

      <section className="shell py-24 sm:py-32">
        <SectionHeading eyebrow="Partners & associates" title="Meet the" accent="Attorneys" />
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
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

      {/* Full-bleed photo with card */}
      <section className="relative h-[80svh] min-h-[480px] overflow-hidden">
        <Parallax>
          <Image src={IMAGES.meetingTable} alt="" fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="shell relative flex h-full items-end pb-10 sm:pb-16">
          <Reveal className="max-w-md rounded-2xl bg-ivory/95 p-8 backdrop-blur-sm sm:p-10">
            <p className="font-serif text-[clamp(30px,3.6vw,46px)] leading-[1.1]">
              Every case gets <em className="text-gold">a partner</em>, not a file number.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner image={IMAGES.suitAdjust} />
    </>
  );
}
