import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../lib/data";
import Parallax from "../motion/Parallax";
import Reveal from "../motion/Reveal";
import { ArrowRight } from "../ui/Icons";

/** Full-bleed photo with a floating card — closes most pages. */
export default function CtaBanner({ image = IMAGES.courthouse }: { image?: string }) {
  return (
    <section className="relative h-[80svh] min-h-[520px] overflow-hidden">
      <Parallax>
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-ink/20" />
      <div className="shell relative flex h-full items-center">
        <Reveal className="max-w-lg rounded-2xl bg-ivory/95 p-8 backdrop-blur-sm sm:p-12">
          <p className="text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">Let&apos;s talk</p>
          <h2 className="mt-4 font-serif text-[clamp(40px,5.5vw,72px)] leading-[0.98] font-semibold">
            Your case deserves <em className="font-medium text-gold">excellence.</em>
          </h2>
          <Link
            href="/book-consultation"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-deep"
          >
            Book Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
