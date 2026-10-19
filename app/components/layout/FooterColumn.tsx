import Link from "next/link";

export default function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
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
