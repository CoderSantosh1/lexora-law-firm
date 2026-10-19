import Image from "next/image";
import { GALLERY } from "../../lib/data";

/** Endless row of photos, Wix "image strip" style. */
export default function ImageMarquee({ images = GALLERY.map((g) => g.image) }: { images?: string[] }) {
  const row = [...images, ...images];
  return (
    <div className="group overflow-hidden py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee-slow gap-4 group-hover:[animation-play-state:paused]">
        {row.map((src, i) => (
          <div
            key={i}
            className={`relative shrink-0 overflow-hidden rounded-xl ${i % 3 === 1 ? "h-[300px] w-[230px]" : "h-[300px] w-[400px]"} max-sm:h-[200px] max-sm:w-[260px]`}
          >
            <Image src={src} alt="" fill sizes="400px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
