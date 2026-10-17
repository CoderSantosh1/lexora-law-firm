"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, shown] as const;
}

type Tag = "div" | "section" | "figure" | "li" | "article";

/**
 * Scroll-triggered entrance.
 * - `up`: fades and rises.
 * - `clip`: an image-style wipe from the bottom with a slow zoom-out. The clip sits on an inner
 *   wrapper — a fully clipped observed element never reports as intersecting.
 */
export function Reveal({
  children,
  className = "",
  innerClassName = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  variant?: "up" | "clip";
  as?: Tag;
}) {
  const [ref, shown] = useInView<HTMLElement>();

  if (variant === "clip") {
    return (
      <Tag ref={ref as React.Ref<never>} className={className}>
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={`relative size-full overflow-hidden transition-[clip-path] duration-[1300ms] ease-lux motion-reduce:[clip-path:none] ${
            shown ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(100%_0_0_0)]"
          }`}
        >
          <div
            style={{ transitionDelay: `${delay}ms` }}
            className={`relative size-full transition-[scale] duration-[1800ms] ease-lux ${shown ? "scale-100" : "scale-115"} ${innerClassName}`}
          >
            {children}
          </div>
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as React.Ref<never>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-1000 ease-lux motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Counts up from 0 when scrolled into view. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [ref, shown] = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!shown) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1800, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** Moves its content slower than the page for a parallax feel. Parent must be `relative overflow-hidden`. */
export function Parallax({ children, speed = 0.2 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const rect = el.parentElement!.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
      el.style.translate = `0 ${offset}px`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className="absolute -inset-y-[12%] inset-x-0 will-change-transform">
      {children}
    </div>
  );
}
