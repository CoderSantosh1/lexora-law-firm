import type { Metadata } from "next";
import Image from "next/image";
import ImageMarquee from "../components/sections/ImageMarquee";
import { Clock, Mail, Phone, Pin } from "../components/ui/Icons";
import Parallax from "../components/motion/Parallax";
import { ArrowRight } from "../components/ui/Icons";
import Reveal from "../components/motion/Reveal";
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
      <section className="shell grid gap-10 pt-24 pb-[clamp(72px,9vw,128px)] lg:grid-cols-2 lg:gap-16">
        <div className="relative h-[60svh] min-h-[420px] overflow-hidden rounded-2xl lg:sticky lg:top-24 lg:h-[calc(100svh-120px)]">
          <div className="absolute inset-0 animate-zoom-out">
            <Image src={IMAGES.officeWindow} alt="Lexora reception" fill preload sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 animate-rise rounded-xl bg-ivory/95 px-5 py-4 [animation-delay:300ms]">
            <p className="text-[11px] tracking-[0.3em] text-gold-deep uppercase">Reply within</p>
            <p className="font-serif text-3xl font-semibold">24 hours</p>
          </div>
        </div>

        <div className="lg:py-[clamp(40px,4.5vw,56px)]">
          <div className="animate-rise">
            <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">
              <span className="h-px w-8 bg-gold" />
              Contact
            </p>
            <h1 className="mt-4 font-serif text-[clamp(48px,7vw,96px)] leading-[0.95] font-semibold">
              Let&apos;s <em className="font-medium text-gold">talk.</em>
            </h1>
          </div>

          <ul className="mt-[clamp(40px,4.5vw,56px)] grid gap-4 sm:grid-cols-2">
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

          <Reveal delay={200} className="mt-[clamp(40px,4.5vw,56px)]">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      
        {/* Where to find us */}
        <section className="relative overflow-hidden bg-ivory py-16 sm:py-5">
          <div className="shell">
            

            <div className="relative h-[420px] overflow-hidden rounded-2xl border border-line sm:h-[520px]">
              <iframe
                title="Lexora Law Firm office location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

           
          </div>
        </section>


     
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
