import { CONTACT, NAV, PRACTICE } from "../../lib/data";
import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

const SOCIALS = ["LinkedIn", "Instagram", "X"];

export default function Footer() {
  return (
    <footer className="bg-sand ">
      <div className="shell">
        <div className="grid gap-12 border-b border-line pt-16 pb-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs font-serif text-2xl leading-snug text-ink-soft">Trusted counsel since 1998.</p>
          </div>
          <FooterColumn title="Firm" links={NAV.filter((n) => !n.mega).map((n) => ({ label: n.label, href: n.href }))} />
          <FooterColumn title="Practice" links={PRACTICE.map((p) => ({ label: p.title, href: `/practice-areas/${p.slug}` }))} />
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
          <p>Copyright © 2026. All rights reserved. Powered by Lestow .</p>
          <div className="flex gap-6">
            {SOCIALS.map((s) => (
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
