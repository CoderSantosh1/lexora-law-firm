import type { Metadata } from "next";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import { IMAGES } from "../lib/data";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Inside Lexora" title="Gallery" line="Our spaces, our moments." image={IMAGES.officeLoft} />
      <section className="shell py-16 px-10">
        <GalleryGrid />
      </section>
      <CtaBanner image={IMAGES.handshake} />
    </>
  );
}
