
"use client";

import { useState } from "react";
import category from "@/data/category.json";
const { FAQS } = category;

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQS.slice(0, 6);

  return (
    <div className="w-full">
      {/* FAQ List */}
      <div className="border-t border-line">
        {items.map((f, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={f.q}
              className="group animate-rise border-b border-line"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left sm:py-7"
              >
                <span
                  className={`font-serif text-lg leading-snug font-semibold transition-colors duration-300 sm:text-xl lg:text-2xl ${
                    isOpen ? "text-gold-deep" : "text-ink group-hover:text-gold-deep"
                  }`}
                >
                  {f.q}
                </span>

                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-gold bg-gold text-white"
                      : "border-line text-gold-deep group-hover:border-gold group-hover:bg-gold group-hover:text-white"
                  }`}
                >
                  <span className="text-xl leading-none">+</span>
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-6 text-sm leading-7 text-muted sm:pb-7 sm:text-base">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
