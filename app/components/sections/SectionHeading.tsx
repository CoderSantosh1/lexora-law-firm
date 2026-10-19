import Reveal from "../motion/Reveal";

/** Small gold label + big serif title. Keep titles to a few words. */
export default function SectionHeading({
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
