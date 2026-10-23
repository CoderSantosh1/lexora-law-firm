
import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";
import { ArrowRight } from "../ui/Icons";

type OurMissionProps = {
  image: string;
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
  secondaryText?: string;
  href?: string;
};

export default function OurMission({
  image,
  eyebrow = "Our Mission",
  title = "Justice with",
  accent = "Purpose.",
  description = "We make the law easier to navigate through thoughtful guidance, clear communication and dedicated representation.",
  secondaryText = "Every client deserves to be heard, understood and represented with integrity.",
  href = "/about",
}: OurMissionProps) {
  return (
    <section className="overflow-hidden bg-ivory pb-16">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <Reveal variant="clip" className="relative">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4]">
            <Image
              src={image}
              alt="Lexora legal team working together"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 h-12 w-12 rounded-full border border-white/60" />
            <span className="absolute bottom-8 left-8 h-6 w-6 rounded-full border border-gold-soft" />
          </div>

          <div className="absolute -right-3 -top-3 -z-0 h-24 w-24 rounded-tr-3xl border-r border-t border-gold/60 sm:-right-4 sm:-top-4" />
        </Reveal>

        {/* Content */}
        <Reveal delay={150} className="lg:py-8">
          <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-gold-deep uppercase">
            <span className="h-px w-9 bg-gold" />
            {eyebrow}
          </p>

          <h2 className="mt-6 font-serif text-[clamp(40px,5vw,68px)] font-medium leading-[1.08] tracking-tight text-ink">
            {title}
            <br />
            <em className="font-normal text-gold">{accent}</em>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>

          <p className="mt-4 max-w-lg text-sm leading-7 text-ink-soft">
            {secondaryText}
          </p>

         
        </Reveal>
      </div>
    </section>
  );
}
