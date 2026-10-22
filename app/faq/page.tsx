import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/motion/Reveal";
import PageHero from "../components/sections/PageHero";
import { ArrowRight } from "../components/ui/Icons";
import category from "@/data/category.json";
const { CONTACT, IMAGES } = category;
import FaqList from "./FaqList";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Help centre" title="FAQ" line="Quick answers to common questions." image={IMAGES.library} />

      <section className="shell grid items-start gap-12 py-16 lg:grid-cols-[1fr_2fr] lg:gap-16">
        {/* Still have questions? */}
        <Reveal className="overflow-hidden rounded-2xl border border-line bg-white lg:sticky lg:top-28">
          <div className="relative h-48">
            <Image src={IMAGES.meetingWomen} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="p-8">
            <p className="text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">Still have questions?</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-semibold">Talk to a lawyer</h2>
            <p className="mt-3 text-[15px] text-muted">Your first 30-minute consultation is on us.</p>
            <Link
              href="/book-consultation"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-colors duration-500 hover:bg-gold-deep"
            >
              Book Consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
              Or call{" "}
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="font-medium text-ink hover:text-gold-deep">
                {CONTACT.phone}
              </a>
            </p>
          </div>
        </Reveal>

        <FaqList />
      </section>
    </>
  );
}
