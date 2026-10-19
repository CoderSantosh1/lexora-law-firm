import Image from "next/image";
import Parallax from "../motion/Parallax";

/** Inner-page hero (Wix-style): a framed full-width photo with a light card floating over it. */
export default function PageHero({
  eyebrow,
  title,
  line,
  image,
}: {
  eyebrow: string;
  title: string;
  line?: string;
  image: string;
}) {
  return (
    <section className="shell pt-24">
      <div className="relative h-[min(78svh,760px)] min-h-[460px] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 animate-zoom-out">
          <Parallax speed={0.12}>
            <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
          </Parallax>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] animate-rise rounded-xl bg-ivory/95 p-6 backdrop-blur-sm [animation-delay:250ms] sm:bottom-8 sm:left-8 sm:max-w-xl sm:p-10">
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-[clamp(44px,7vw,92px)] leading-[0.95] font-semibold text-ink">{title}</h1>
          {line && <p className="mt-4 max-w-sm text-[15px] text-muted">{line}</p>}
        </div>
      </div>
    </section>
  );
}
