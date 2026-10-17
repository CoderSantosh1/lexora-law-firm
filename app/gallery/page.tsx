import type { Metadata } from "next";
import { CtaBanner, PageHero } from "../components/Blocks";
import { IMAGES } from "../lib/data";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Inside Lexora" title="Gallery" line="Our spaces, our moments." image={IMAGES.officeLoft} />
      <section className="shell py-24 sm:py-32">
        <GalleryGrid />
      </section>
      <CtaBanner image={IMAGES.handshake} />
    </>
  );
}
