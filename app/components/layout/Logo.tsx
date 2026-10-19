import Link from "next/link";
import { Pillar } from "../ui/Icons";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Lexora Law Firm — home" className={`inline-flex items-center gap-3 ${className}`}>
      <Pillar className="size-9 text-gold" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[27px] font-semibold text-ink">Lexora</span>
        <span className="mt-1 text-[10px] tracking-[0.32em] text-muted uppercase">Law Firm</span>
      </span>
    </Link>
  );
}
