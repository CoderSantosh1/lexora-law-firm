"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONTACT, IMAGES, NAV, PRACTICE } from "../lib/data";
import { ArrowRight, Chevron, Logo, PracticeIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigating (adjusting state during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenu(false);
    setMega(false);
  }

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        setMega(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 160);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur-md transition-shadow duration-500 ${
          scrolled ? "shadow-[0_10px_30px_-20px_rgba(29,27,24,0.25)]" : ""
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) =>
              item.mega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setMega(false);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-expanded={mega}
                    aria-controls="mega-panel"
                    onFocus={openMega}
                    className={`group relative inline-flex items-center gap-1.5 py-7 text-[14px] transition-colors ${
                      isActive(item.href) || mega ? "text-gold-deep" : "text-ink-soft hover:text-gold-deep"
                    }`}
                  >
                    {item.label}
                    <Chevron className={`size-4 transition-transform duration-300 ${mega ? "rotate-180" : ""}`} />
                    <Underline active={isActive(item.href) || mega} />
                  </Link>

                  {/* Practice dropdown — just the five areas, each links to its page */}
                  <div
                    id="mega-panel"
                    className={`absolute top-full left-1/2 w-[330px] -translate-x-1/2 rounded-2xl border border-line bg-ivory p-2 shadow-[0_30px_60px_-30px_rgba(29,27,24,0.4)] transition-[opacity,translate,visibility] duration-400 ease-lux ${
                      mega ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {PRACTICE.map((p, i) => (
                      <Link
                        key={p.slug}
                        href={`/practice-areas/${p.slug}`}
                        tabIndex={mega ? 0 : -1}
                        style={{ transitionDelay: mega ? `${60 + i * 50}ms` : "0ms" }}
                        className={`group/item flex items-center gap-4 rounded-xl px-4 py-3 transition-[opacity,translate,background-color] duration-400 ease-lux hover:bg-sand ${
                          pathname === `/practice-areas/${p.slug}` ? "bg-sand" : ""
                        } ${mega ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
                      >
                        <PracticeIcon name={p.icon} className="size-6 shrink-0 text-gold" />
                        <span className="flex-1 font-serif text-lg font-semibold text-ink">{p.title}</span>
                        <ArrowRight className="size-4 -translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-7 text-[14px] transition-colors ${
                    isActive(item.href) ? "text-gold-deep" : "text-ink-soft hover:text-gold-deep"
                  }`}
                >
                  {item.label}
                  <Underline active={isActive(item.href)} />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-deep hover:shadow-[0_12px_30px_-12px_rgba(134,97,44,0.7)] sm:inline-flex"
            >
              Book Consultation
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              className="relative flex size-11 flex-col items-center justify-center gap-1 rounded-full border border-ink/20 transition-colors hover:border-gold lg:hidden"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-[1.5px] w-[17px] transition-all duration-500 ease-lux bg-ink ${
                    menu && i === 0 ? "translate-y-[5.5px] rotate-45" : ""
                  } ${menu && i === 1 ? "opacity-0" : ""} ${menu && i === 2 ? "-translate-y-[5.5px] -rotate-45" : ""}`}
                />
              ))}
            </button>
          </div>
        </div>

      </header>

      {/* Full-screen mobile menu */}
      <div
        aria-hidden={!menu}
        className={`fixed inset-0 z-40 flex flex-col bg-ivory px-(--pad) pt-[100px] pb-10 transition-[clip-path,visibility] duration-700 ease-lux lg:hidden ${
          menu ? "visible [clip-path:circle(150%_at_calc(100%_-_44px)_38px)]" : "invisible [clip-path:circle(0%_at_calc(100%_-_44px)_38px)]"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={menu ? 0 : -1}
              style={{ transitionDelay: menu ? `${150 + i * 60}ms` : "0ms" }}
              className={`flex items-baseline gap-4 font-serif text-[clamp(34px,9vw,56px)] leading-[1.15] transition-[opacity,translate,color] duration-600 ease-lux ${
                menu ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${isActive(item.href) ? "text-gold-deep" : "text-ink"}`}
            >
              <span className="font-sans text-xs text-gold">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div
          className={`mt-auto grid grid-cols-3 gap-2 transition-opacity delay-500 duration-700 ${menu ? "opacity-100" : "opacity-0"}`}
        >
          {[IMAGES.boardroom, IMAGES.justiceLight, IMAGES.handshake].map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.email}</span>
        </p>
      </div>
    </>
  );
}

function Underline({ active }: { active: boolean }) {
  return (
    <span
      className={`absolute inset-x-0 bottom-5 h-px origin-right scale-x-0 bg-gold transition-transform duration-500 ease-lux group-hover:origin-left group-hover:scale-x-100 ${
        active ? "origin-left scale-x-100" : ""
      }`}
    />
  );
}
