
"use client";

import { useState } from "react";
import { ArrowRight } from "../components/ui/Icons";
import category from "@/data/category.json";
import type { PracticeArea } from "@/types";

const PRACTICE = category.PRACTICE as PracticeArea[];

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center sm:p-10">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold text-2xl text-white">
          ✓
        </span>
        <h2 className="mt-5 font-serif text-3xl font-semibold">
          Thank You
        </h2>
        <p className="mt-3 text-sm text-muted">
          Your enquiry has been received.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm text-gold-deep underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-line bg-white p-6 sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="font-serif text-3xl font-medium">
        Send an Enquiry
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Tell us how we can help. Our team will get in touch.
      </p>

      <div className="mt-7 space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          autoComplete="name"
          required
          className={input}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            className={input}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            autoComplete="tel"
            required
            className={input}
          />
        </div>

        <select
          name="practiceArea"
          defaultValue=""
          required
          className={input}
        >
          <option value="" disabled>
            Select Practice Area
          </option>
          {PRACTICE.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.title}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          rows={4}
          placeholder="How can we help you? (Optional)"
          className={`${input} resize-none`}
        />

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-gold-deep"
        >
          Submit Enquiry
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-muted">
        Your information will be treated confidentially.
      </p>
    </form>
  );
}
