export type IconName = "briefcase" | "scales" | "family" | "home" | "doc";
export type GalleryTag = "Office" | "Courtroom" | "Moments";
export type PracticeArea = { slug: string; icon: IconName; title: string; line: string; details: string[]; facts: { value: string; label: string }[]; services: { name: string; text: string }[]; faqs: { q: string; a: string }[]; image: string; gallery: string[] };
export type GalleryItem = { image: string; alt: string; tag: GalleryTag; tall?: boolean };
