import type { Metadata } from "next";
import Image from "next/image";
import { ImageMarquee } from "../components/Blocks";
import { Clock, Mail, Phone, Pin } from "../components/Icons";
import { Parallax, Reveal } from "../components/Motion";
import { CONTACT, IMAGES } from "../lib/data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

const DETAILS = [
  { icon: Phone, label: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Pin, label: CONTACT.address },
  { icon: Clock, label: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <>
      {/* Split: photo left, form right */}
      <section className="shell grid gap-10 pt-[96px] lg:grid-cols-2 lg:gap-16">
        <div className="relative h-[60svh] min-h-[420px] overflow-hidden rounded-2xl lg:sticky lg:top-24 lg:h-[calc(100svh-120px)]">
          <div className="absolute inset-0 animate-zoom-out">
            <Image src={IMAGES.officeWindow} alt="Lexora reception" fill preload sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 animate-rise rounded-xl bg-ivory/95 px-5 py-4 [animation-delay:300ms]">
            <p className="text-[11px] tracking-[0.3em] text-gold-deep uppercase">Reply within</p>
            <p className="font-serif text-3xl font-semibold">24 hours</p>
          </div>
        </div>

        <div className="py-6 lg:py-16">
          <div className="animate-rise">
            <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">
              <span className="h-px w-8 bg-gold" />
              Contact
            </p>
            <h1 className="mt-4 font-serif text-[clamp(48px,7vw,96px)] leading-[0.95] font-semibold">
              Let&apos;s <em className="font-medium text-gold">talk.</em>
            </h1>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {DETAILS.map(({ icon: Icon, label, href }, i) => (
              <Reveal as="li" key={label} delay={i * 90}>
                {href ? (
                  <a href={href} className="group flex items-center gap-4 rounded-xl border border-line bg-white p-4 transition-colors hover:border-gold">
                    <DetailIcon Icon={Icon} />
                    <span className="text-sm text-ink-soft group-hover:text-gold-deep">{label}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-xl border border-line bg-white p-4">
                    <DetailIcon Icon={Icon} />
                    <span className="text-sm text-ink-soft">{label}</span>
                  </div>
                )}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-14">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Where to find us */}
      <section className="relative mt-24 h-[70svh] min-h-[420px] overflow-hidden sm:mt-32">
        <Parallax>
          <Image src={IMAGES.glassTowers} alt="One Horizon Centre" fill sizes="100vw" className="object-cover" />
        </Parallax>
        <div className="shell relative flex h-full items-end pb-10">
          <Reveal className="rounded-2xl bg-ivory/95 p-8 backdrop-blur-sm">
            <p className="text-[11px] tracking-[0.3em] text-gold-deep uppercase">Find us</p>
            <p className="mt-2 font-serif text-3xl font-semibold">{CONTACT.address}</p>
          </Reveal>
        </div>
      </section>

      <div className="py-24 sm:py-32">
        <ImageMarquee />
      </div>
    </>
  );
}

function DetailIcon({ Icon }: { Icon: (p: { className?: string }) => React.ReactNode }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sand text-gold-deep">
      <Icon className="size-5" />
    </span>
  );
}
