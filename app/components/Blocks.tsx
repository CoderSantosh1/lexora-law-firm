import Image from "next/image";
import Link from "next/link";
import { CONTACT, GALLERY, IMAGES, NAV, PRACTICE } from "../lib/data";
import { ArrowRight, ArrowUpRight, Logo } from "./Icons";
import { Parallax, Reveal } from "./Motion";

/** Small gold label + big serif title. Keep titles to a few words. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p
        className={`flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(40px,6vw,80px)] leading-[1] font-semibold text-ink">
        {title} {accent && <em className="font-medium text-gold">{accent}</em>}
      </h2>
    </Reveal>
  );
}

/**
 * Inner-page hero (Wix-style): a framed full-width photo with a light card floating over it.
 */
export function PageHero({
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
    <section className="shell pt-[96px]">
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

/** Full-bleed photo with a floating card — closes most pages. */
export function CtaBanner({ image = IMAGES.courthouse }: { image?: string }) {
  return (
    <section className="relative mt-24 h-[80svh] min-h-[520px] overflow-hidden sm:mt-32">
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
            href="/contact"
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

/** Endless row of photos, Wix "image strip" style. */
export function ImageMarquee({ images = GALLERY.map((g) => g.image) }: { images?: string[] }) {
  const row = [...images, ...images];
  return (
    <div className="group overflow-hidden py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee-slow gap-4 group-hover:[animation-play-state:paused]">
        {row.map((src, i) => (
          <div
            key={i}
            className={`relative shrink-0 overflow-hidden rounded-xl ${i % 3 === 1 ? "h-[300px] w-[230px]" : "h-[300px] w-[400px]"} max-sm:h-[200px] max-sm:w-[260px]`}
          >
            <Image src={src} alt="" fill sizes="400px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const thumbs = GALLERY.slice(0, 6);
  return (
    <footer className="bg-sand pt-20">
      <div className="shell">
        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {thumbs.map((g) => (
            <Link key={g.image} href="/gallery" className="group relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-lux group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/0 text-ivory opacity-0 transition-all duration-500 group-hover:bg-ink/30 group-hover:opacity-100">
                <ArrowUpRight className="size-6" />
              </span>
            </Link>
          ))}
        </div>

        <div className="grid gap-12 border-b border-line py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-serif text-2xl leading-snug text-ink-soft">
              Trusted counsel since 1998.
            </p>
          </div>
          <FooterCol title="Firm" links={NAV.filter((n) => !n.mega).map((n) => ({ label: n.label, href: n.href }))} />
          <FooterCol
            title="Practice"
            links={PRACTICE.map((p) => ({ label: p.title, href: `/practice-areas/${p.slug}` }))}
          />
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">Visit</p>
            <ul className="mt-5 space-y-2 text-sm text-ink-soft">
              <li>{CONTACT.address}</li>
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold-deep">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-deep">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-muted sm:flex-row">
          <p>© 2026 Lexora Law Firm. All rights reserved.</p>
          <div className="flex gap-6">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <a key={s} href="#" className="transition-colors hover:text-gold-deep">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">{title}</p>
      <ul className="mt-5 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-soft transition-colors hover:text-gold-deep">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
