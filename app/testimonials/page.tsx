import type { Metadata } from "next";
import Counter from "../components/motion/Counter";
import Reveal from "../components/motion/Reveal";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import { IMAGES, TESTIMONIALS } from "../lib/data";
import TestimonialCarousel from "./TestimonialCarousel";

export const metadata: Metadata = { title: "Testimonials" };

const STATS = [
  { value: 49, suffix: "", label: "Average rating", display: "4.9 / 5" },
  { value: 1200, suffix: "+", label: "Cases won" },
  { value: 98, suffix: "%", label: "Would recommend" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Client stories" title="Testimonials" line="In our clients' own words." image={IMAGES.handshake} />

      {/* All reviews — one auto-scrolling row */}
      <section className="shell py-[clamp(72px,9vw,128px)]">
        <SectionHeading eyebrow="Reviews" title="What clients" accent="say" />
        <Reveal className="mt-[clamp(40px,4.5vw,56px)]">
          <TestimonialCarousel items={TESTIMONIALS} />
        </Reveal>
      </section>

      {/* Numbers */}
      <section className="bg-sand py-[clamp(72px,9vw,128px)]">
        <div className="shell grid gap-y-10 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className={`text-center ${i ? "sm:border-l sm:border-line" : ""}`}>
              <p className="font-serif text-[clamp(48px,5vw,72px)] leading-none font-semibold text-gold">
                {s.display ?? <Counter value={s.value} suffix={s.suffix} />}
              </p>
              <p className="mt-3 text-[11px] tracking-[0.28em] text-muted uppercase">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={IMAGES.meetingTable} />
    </>
  );
}
