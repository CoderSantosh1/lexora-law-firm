
import type { Metadata } from "next";
import Reveal from "../components/motion/Reveal";
import PageHero from "../components/sections/PageHero";
import category from "@/data/category.json";
import BookingForm from "./BookingForm";

const { IMAGES } = category;

export const metadata: Metadata = {
  title: "Book Consultation",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Get Started"
        title="Book Consultation"
        line="Let's discuss your legal needs."
        image={IMAGES.officeWindow}
      />

      <section className="shell py-[clamp(48px,7vw,88px)]">
        <Reveal className="mx-auto w-full max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Schedule a Meeting
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Share a few details and our team will get in touch.
            </p>
          </div>

          <BookingForm />
        </Reveal>
      </section>
    </>
  );
}
