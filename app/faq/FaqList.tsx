"use client";

import { useState } from "react";
import { FAQS, type FaqTopic } from "../lib/data";

const TOPICS: ("All" | FaqTopic)[] = ["All", "General", "Fees", "Process", "Consultation"];

export default function FaqList() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("All");
  const items = topic === "All" ? FAQS : FAQS.filter((f) => f.topic === topic);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ topics">
        {TOPICS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={topic === t}
            onClick={() => setTopic(t)}
            className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
              topic === t ? "bg-ink text-ivory" : "border border-line bg-white text-ink-soft hover:border-gold hover:text-gold-deep"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* `key` re-mounts the list so the stagger replays when the topic changes */}
      <div key={topic} className="mt-[clamp(40px,4.5vw,56px)] border-t border-line">
        {items.map((f, i) => (
          <details
            key={f.q}
            style={{ animationDelay: `${i * 60}ms` }}
            className="group animate-rise border-b border-line"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[22px] leading-snug font-semibold transition-colors hover:text-gold-deep [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-lg text-gold transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-white">
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
