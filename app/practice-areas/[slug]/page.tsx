import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Reveal from "../../components/motion/Reveal";
import PageHero from "../../components/sections/PageHero";
import SectionHeading from "../../components/sections/SectionHeading";
import { PracticeIcon } from "../../components/ui/Icons";
import { PRACTICE, PROCESS } from "../../lib/data";

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
      <section className="shell grid items-start gap-16 py-[clamp(72px,9vw,128px)] lg:grid-cols-[1.15fr_1fr]">
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
          <Reveal delay={150} className="mt-4 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white">
            {area.facts.map((f) => (
              <div key={f.label} className="px-4 py-5 text-center">
                <p className="font-serif text-[clamp(24px,2.4vw,32px)] leading-none font-semibold text-gold">{f.value}</p>
                <p className="mt-2 text-[10px] tracking-[0.18em] text-muted uppercase">{f.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-sand py-[clamp(72px,9vw,128px)]">
        <div className="shell">
          <SectionHeading eyebrow="What we handle" title="How we" accent="help" />
          <div className="mt-[clamp(40px,4.5vw,56px)] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.services.map((s, i) => (
              <Reveal
                key={s.name}
                delay={(i % 3) * 100}
                className="rounded-2xl border border-line bg-ivory p-7 transition-[translate,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(60,42,22,0.45)]"
              >
                <span className="text-xs tracking-[0.2em] text-gold">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="shell py-[clamp(72px,9vw,128px)]">
        <SectionHeading eyebrow="Our process" title="How we" accent="work" />
        <ol className="mt-[clamp(40px,4.5vw,56px)] grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120}>
              <span className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold font-serif text-lg text-gold-deep">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Photos (kept small) */}
      <section className="shell grid gap-4 sm:grid-cols-2">
        {area.gallery.slice(1).map((src, i) => (
          <Reveal key={src} variant="clip" delay={i * 150} className="h-[240px] overflow-hidden rounded-2xl sm:h-[300px]">
            <Image src={src} alt={area.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </Reveal>
        ))}
      </section>

      {/* FAQs */}
      <section className="shell grid gap-12 py-[clamp(72px,9vw,128px)] lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading eyebrow="Questions" title="Common" accent="questions" />
        <Reveal className="border-t border-line">
          {area.faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-xl font-semibold transition-colors hover:text-gold-deep [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </section>
    </>
  );
}
