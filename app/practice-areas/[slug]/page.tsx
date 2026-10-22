import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Reveal from "../../components/motion/Reveal";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { PracticeIcon } from "../../components/ui/Icons";
import category from "@/data/category.json";
import type { PracticeArea } from "@/types";
const { PROCESS } = category;
const PRACTICE = category.PRACTICE as PracticeArea[];

export function generateStaticParams() {
  return PRACTICE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: PRACTICE.find((p) => p.slug === slug)?.title ?? "Practice Area" };
}

// The App Shell is shared by every practice area, so the `params` read lives inside Suspense.
export default function PracticeDetailPage({ params }: PageProps<"/practice-areas/[slug]">) {
  return (
    <Suspense fallback={<DetailSkeleton />}>
      <PracticeDetail params={params} />
    </Suspense>
  );
}

function DetailSkeleton() {
  return (
    <section className="shell pt-24">
      <div className="h-[min(52svh,520px)] min-h-[380px] animate-pulse rounded-2xl bg-sand" />
    </section>
  );
}

// Only this practice area: overview, what we handle, process, photos and FAQs.
async function PracticeDetail({ params }: Pick<PageProps<"/practice-areas/[slug]">, "params">) {
  const { slug } = await params;
  const area = PRACTICE.find((p) => p.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero compact eyebrow="Practice Area" title={area.title} line={area.line} image={area.image} />

      {/* Overview + key facts */}
      <section className="shell grid items-start gap-16 py-16 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <PracticeIcon name={area.icon} className="size-10 text-gold" />
          <p className="mt-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] text-gold-deep uppercase">
            <span className="h-px w-8 bg-gold" />
            Overview
          </p>
          <h2 className="mt-4 font-serif text-[clamp(34px,4vw,52px)] leading-[1.05] font-semibold">{area.line}</h2>
          <div className="mt-[clamp(40px,4.5vw,56px)] space-y-5 text-[17px] leading-relaxed text-ink-soft">
            {area.details.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </Reveal>

        <div>
          <Reveal variant="clip" className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={area.gallery[0]} alt={area.title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
          </Reveal>
         
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-sand py-16">
        <div className="shell">
          <SectionHeading eyebrow="What we handle" title="How we" accent="help" />
          <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.services.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 100}
                className="rounded-2xl border border-line bg-ivory p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(60,42,22,0.45)]"
              >
                <h3 className="mt-3 font-serif text-2xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
