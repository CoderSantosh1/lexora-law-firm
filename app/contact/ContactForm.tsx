"use client";

import { useState } from "react";
import { ArrowRight } from "../components/ui/Icons";
import { PRACTICE } from "../lib/data";

const field =
  "peer w-full border-b border-line bg-transparent pt-6 pb-2 text-[15px] text-ink outline-none transition-colors placeholder:text-transparent focus:border-gold";
const label =
  "pointer-events-none absolute top-6 left-0 text-[15px] text-muted transition-all duration-300 peer-focus:top-0 peer-focus:text-[11px] peer-focus:tracking-[0.2em] peer-focus:text-gold-deep peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.2em] peer-[:not(:placeholder-shown)]:uppercase";

// No backend yet: submitting only shows a confirmation and sends nothing.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="animate-rise rounded-2xl bg-sand p-10 text-center">
        <p className="font-serif text-4xl font-semibold">Thank you.</p>
        <p className="mt-3 text-muted">We&apos;ll be in touch within one working day.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm text-gold-deep underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {[
        { name: "name", label: "Full name", type: "text", auto: "name" },
        { name: "email", label: "Email", type: "email", auto: "email" },
        { name: "phone", label: "Phone", type: "tel", auto: "tel" },
      ].map((f) => (
        <div key={f.name} className={`relative ${f.name === "name" ? "sm:col-span-2" : ""}`}>
          <input id={f.name} name={f.name} type={f.type} autoComplete={f.auto} required={f.name !== "phone"} placeholder={f.label} className={field} />
          <label htmlFor={f.name} className={label}>
            {f.label}
          </label>
        </div>
      ))}
      <div className="relative">
        <select
          id="area"
          name="area"
          defaultValue=""
          className="w-full appearance-none border-b border-line bg-transparent pt-6 pb-2 text-[15px] text-ink outline-none focus:border-gold"
        >
          <option value="" disabled>
            Practice area
          </option>
          {PRACTICE.map((p) => (
            <option key={p.slug}>{p.title}</option>
          ))}
        </select>
      </div>
      <div className="relative sm:col-span-2">
        <textarea id="message" name="message" rows={3} placeholder="Message" className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>
          Message
        </label>
      </div>
      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-deep"
      >
        Send message <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
