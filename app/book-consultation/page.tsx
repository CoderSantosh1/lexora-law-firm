import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/motion/Reveal";
import PageHero from "../components/sections/PageHero";
import { Clock, Pin, Star } from "../components/ui/Icons";
import { IMAGES } from "../lib/data";
import BookingForm from "./BookingForm";

export const metadata: Metadata = { title: "Book Consultation" };

const PERKS = [
  { Icon: Star, title: "First 30 minutes free", text: "Understand your options before you commit." },
  { Icon: Clock, title: "Confirmed in 1 day", text: "We reply within one working day." },
  { Icon: Pin, title: "In person or online", text: "Meet at our office, on video or by phone." },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero compact eyebrow="Get started" title="Book Consultation" line="Pick a time that suits you." image={IMAGES.officeWindow} />

      <section className="shell grid items-start gap-12 py-[clamp(72px,9vw,128px)] lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        {/* Why book */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={IMAGES.meetingTable} alt="Consultation at Lexora" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" />
          </div>
          <ul className="mt-6 space-y-3">
            {PERKS.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-xl border border-line bg-white p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand text-gold-deep">
                  <Icon className="size-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg font-semibold">{title}</span>
                  <span className="text-sm text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <BookingForm />
        </Reveal>
      </section>
    </>
  );
}
