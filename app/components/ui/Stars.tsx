import { Star } from "./Icons";

/** Five gold stars (all reviews are 5/5). */
export default function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex gap-1 text-gold ${className}`} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-4" />
      ))}
    </span>
  );
}
