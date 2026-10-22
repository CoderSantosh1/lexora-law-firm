import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/motion/Reveal";
import { ArrowRight } from "../components/ui/Icons";
import category from "@/data/category.json";
const { IMAGES, INSIGHTS } = category;

export const metadata: Metadata = { title: "Insights" };

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Journal" title="Insights" line="Short reads from our attorneys." image={IMAGES.documents} />

      <section className="shell py-16">
        
        {/* Article grid */}
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {INSIGHTS.map((a, i) => (
            <Reveal key={a.slug} as="article" delay={(i % 3) * 120} className="group">
              <Link href={`/insights/${a.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-ivory/95 px-3 py-1 text-[11px] font-medium">{a.tag}</span>
              </div>
              <p className="mt-4 text-xs text-muted">
                {a.date} · {a.readTime}
              </p>
              <h3 className="mt-1 font-serif text-2xl leading-snug font-semibold transition-colors group-hover:text-gold-deep">
                {a.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-deep">
                Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              </Link>
            </Reveal>
            
          ))}
          
        </div>
      </section>

      <CtaBanner image={IMAGES.laptopDesk} />
    </>
  );
}
