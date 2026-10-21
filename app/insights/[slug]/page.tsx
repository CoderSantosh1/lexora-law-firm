
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import category from "@/data/category.json";
import Reveal from "../../components/motion/Reveal";
import CtaBanner from "../../components/sections/CtaBanner";
import { ArrowLeft, ArrowRight, Quote } from "../../components/ui/Icons";
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
    <section className="shell py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="aspect-[4/3] animate-pulse rounded-2xl bg-sand" />
        <div className="space-y-5">
          <div className="h-4 w-32 animate-pulse rounded bg-sand" />
          <div className="h-16 w-full animate-pulse rounded bg-sand" />
          <div className="h-24 w-full animate-pulse rounded bg-sand" />
        </div>
      </div>
    </section>
  );
}

function BodyBlock({ block }: { block: Block }) {
  if ("h" in block) {
    return (
      <h2 className="mt-10 font-serif text-[clamp(26px,3vw,36px)] leading-tight font-semibold">
        {block.h}
      </h2>
    );
  }

  if ("quote" in block) {
    return (
      <blockquote className="my-10 border-l-2 border-gold pl-6">
        <Quote className="size-7 text-gold" />
        <p className="mt-3 font-serif text-[clamp(23px,2.5vw,30px)] leading-snug text-ink italic">
          {block.quote}
        </p>
      </blockquote>
    );
  }

  return (
    <p className="mt-5 text-base leading-[1.85] text-ink-soft sm:text-[17px]">
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

  const more = INSIGHTS.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />

      {/* Article hero: image left, content right */}
      <section className="shell pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Reveal>
          <Link
            href="/insights"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold-deep"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            All insights
          </Link>
        </Reveal>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="clip" className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
            />
          </Reveal>

          <Reveal delay={150} className="py-2 lg:py-8">
            <p className="text-[10px] font-medium tracking-[0.3em] text-gold-deep uppercase">
              {article.tag}
            </p>

            <h1 className="mt-5 font-serif text-[clamp(36px,4.5vw,62px)] leading-[1.08] font-semibold">
              {article.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {article.excerpt}
            </p>

          
          </Reveal>
        </div>
      </section>

      {/* Article content */}
      <section className="shell border-t border-line py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          {article.body.map((block, index) => (
            <BodyBlock key={index} block={block} />
          ))}
        </article>
      </section>

  
      <CtaBanner />
    </>
  );
}
