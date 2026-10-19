"use client";

import { useInView } from "./useInView";

type Tag = "div" | "section" | "figure" | "li" | "article";

/**
 * Scroll-triggered entrance.
 * - `up`: fades and rises.
 * - `clip`: an image-style wipe from the bottom with a slow zoom-out. The clip sits on an inner
 *   wrapper — a fully clipped observed element never reports as intersecting.
 */
export default function Reveal({
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
