
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import category from "@/data/category.json";
import Reveal from "../../components/motion/Reveal";
import CtaBanner from "../../components/sections/CtaBanner";
import { ArrowLeft, Quote } from "../../components/ui/Icons";
import ReadingProgress from "./ReadingProgress";

const { INSIGHTS } = category;

type Block = (typeof INSIGHTS)[number]["body"][number];

export function generateStaticParams() {
  return INSIGHTS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((item) => item.slug === slug);

  return article
    ? {
        title: article.title,
        description: article.excerpt,
      }
    : { title: "Insight" };
}

export default function InsightPage({
  params,
}: PageProps<"/insights/[slug]">) {
  return (
    <Suspense fallback={<ArticleSkeleton />}>
      <Article params={params} />
    </Suspense>
  );
}

function ArticleSkeleton() {
  return (
    <section className="shell pt-24 pb-16">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="h-4 w-32 animate-pulse rounded bg-sand" />
          <div className="h-16 w-full animate-pulse rounded bg-sand" />
          <div className="h-24 w-full animate-pulse rounded bg-sand" />
        </div>
        <div className="aspect-[4/3] animate-pulse rounded-2xl bg-sand" />
      </div>
    </section>
  );
}

function BodyBlock({ block }: { block: Block }) {
  if ("h" in block) {
    return (
      <h2 className="mt-10 font-serif text-[clamp(26px,3vw,36px)] font-semibold leading-tight">
        {block.h}
      </h2>
    );
  }

  return (
    <p className="mt-5 text-[15px] leading-7 text-ink-soft sm:text-[17px] sm:leading-8">
      {block.p}
    </p>
  );
}

async function Article({
  params,
}: Pick<PageProps<"/insights/[slug]">, "params">) {
  const { slug } = await params;
  const article = INSIGHTS.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <>
      <ReadingProgress />

      {/* Article hero */}
      <section className="relative overflow-hidden bg-sand/30 pt-24 pb-16">
        <div className="shell">
          
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left: article information */}
            <Reveal className="order-2 lg:order-1">
              <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.28em] text-gold-deep uppercase">
                <span className="h-px w-8 bg-gold" />
                {article.tag}
              </p>

              <h1 className="mt-5 max-w-xl font-serif text-[clamp(36px,4.4vw,64px)] font-medium leading-[1.08] tracking-[-0.025em]">
                {article.title}
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {article.excerpt}
              </p>

              
            </Reveal>

            {/* Right: featured image */}
            <Reveal
              variant="clip"
              delay={150}
              className="order-1 lg:order-2"
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="shell py-16">
        <article className="mx-auto max-w-3xl">
          {article.body.map((block, index) => (
            <Reveal key={index} delay={Math.min(index * 40, 160)}>
              <BodyBlock block={block} />
            </Reveal>
          ))}

          <div className="mt-12 border-t border-line pt-6">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-deep"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
          </div>
        </article>
      </section>

      <CtaBanner />
    </>
  );
}
