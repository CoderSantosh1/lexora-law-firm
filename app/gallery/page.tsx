import type { Metadata } from "next";
import CtaBanner from "../components/sections/CtaBanner";
import PageHero from "../components/sections/PageHero";
import category from "@/data/category.json";
const { IMAGES } = category;
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Inside Lexora" title="Gallery" line="Our spaces, our moments." image={IMAGES.officeLoft} />
      <GalleryGrid />
      <CtaBanner image={IMAGES.handshake} />
    </>
  );
}
