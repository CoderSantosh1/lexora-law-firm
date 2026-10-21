
import Image from "next/image";
import Link from "next/link";
import category from "@/data/category.json";
const { IMAGES } = category;
import Banner from "@/public/images/cta/golden-hour-neoclassical.png";
import Parallax from "../motion/Parallax";
import Reveal from "../motion/Reveal";
import { ArrowRight } from "../ui/Icons";

export default function CtaBanner({
  image = IMAGES.courthouse,
}: {
  image?: string;
}) {
  return (
    <section className="relative h-[360px] min-h-[320px] overflow-hidden sm:h-[200px] lg:h-[300px]">
      <Parallax>
        <Image
          src={Banner}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>

      <div className="absolute inset-0 bg-ink/45" />

      <div className="shell relative flex h-full items-center justify-center py-5">
        <Reveal className="mx-auto max-w-2xl text-center text-ivory">
          <h2 className="mt-2 font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.08] font-medium">
            The Right Guidance.
            <br />
            <em className="font-medium text-white">
              A Stronger Way Forward.
            </em>
          </h2>

          
          <Link
            href="/book-consultation"
            className="group mt-6 inline-flex items-center gap-3 rounded-full border border-ivory/40 bg-ivory px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
          >
            Book a Consultation
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
