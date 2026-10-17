import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CtaBanner, PageHero, SectionHeading } from "../../components/Blocks";
import { ArrowRight, PracticeIcon } from "../../components/Icons";
import { Reveal } from "../../components/Motion";
import { PRACTICE } from "../../lib/data";

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
    <section className="shell pt-[96px]">
      <div className="h-[min(78svh,760px)] min-h-[460px] animate-pulse rounded-2xl bg-sand" />
    </section>
  );
}

async function PracticeDetail({ params }: Pick<PageProps<"/practice-areas/[slug]">, "params">) {
  const { slug } = await params;
  const area = PRACTICE.find((p) => p.slug === slug);
  if (!area) notFound();

  const others = PRACTICE.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero eyebrow="Practice Area" title={area.title} line={area.line} image={area.image} />

      {/* Services + photo */}
      <section className="shell grid items-start gap-16 py-24 sm:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="How we help" title="Our" accent="Services" />
          <ul className="mt-10 border-t border-line">
            {area.services.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 70}>
                <Link
                  href="/contact"
                  className="group flex items-center justify-between border-b border-line py-5 transition-colors hover:text-gold-deep"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="text-xs text-gold">0{i + 1}</span>
                    <span className="font-serif text-2xl font-semibold">{s}</span>
                  </span>
                  <ArrowRight className="size-5 -translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal variant="clip" className="aspect-[4/5] overflow-hidden rounded-2xl lg:sticky lg:top-28">
          <Image src={area.gallery[0]} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </Reveal>
      </section>

      {/* Photo pair */}
      <section className="shell grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        {area.gallery.slice(1).map((src, i) => (
          <Reveal key={src} variant="clip" delay={i * 150} className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-auto sm:h-[480px]">
            <Image src={src} alt="" fill sizes="(max-width: 640px) 100vw, 55vw" className="object-cover" />
          </Reveal>
        ))}
      </section>

      {/* Other areas */}
      <section className="shell pt-24 sm:pt-32">
        <SectionHeading eyebrow="Explore" title="Other" accent="Areas" />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {others.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <Link href={`/practice-areas/${p.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-lux group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/75 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 text-white">
                  <PracticeIcon name={p.icon} className="size-6 text-gold-soft" />
                  <span className="mt-2 block font-serif text-xl leading-tight font-semibold sm:text-2xl">{p.title}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner image={area.gallery[1]} />
    </>
  );
}
