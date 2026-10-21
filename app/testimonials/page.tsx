import type { Metadata } from "next";
import Counter from "../components/motion/Counter";
import Reveal from "../components/motion/Reveal";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/sections/SectionHeading";
import category from "@/data/category.json";
const { IMAGES, TESTIMONIALS } = category;
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

     

      <CtaBanner image={IMAGES.meetingTable} />
    </>
  );
}
