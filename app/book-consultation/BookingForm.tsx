"use client";

import { useState } from "react";
import { ArrowRight, PracticeIcon } from "../components/ui/Icons";
import { PRACTICE } from "../lib/data";

const MODES = ["In person", "Video call", "Phone call"] as const;
const SLOTS = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

const input =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold";
const chip = (on: boolean) =>
  `rounded-xl border px-4 py-3 text-sm transition-all duration-300 ${
    on ? "border-gold bg-gold text-white shadow-[0_10px_24px_-14px_rgba(134,97,44,0.8)]" : "border-line bg-white text-ink-soft hover:border-gold"
  }`;

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8">
      <legend className="flex items-center gap-3 font-serif text-2xl font-semibold">
        <span className="grid size-9 place-items-center rounded-full border border-gold font-sans text-sm font-medium text-gold-deep">{n}</span>
        {title}
      </legend>
      <div className="mt-6">{children}</div>
    </fieldset>
  );
}

// No backend yet: submitting only shows a confirmation and sends nothing.
export default function BookingForm() {
  const [area, setArea] = useState(PRACTICE[0].title);
  const [mode, setMode] = useState<(typeof MODES)[number]>("In person");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    const when = new Date(`${date}T00:00`).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
    return (
      <div className="animate-rise rounded-2xl border border-line bg-white p-10 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold text-3xl text-white">✓</span>
        <h2 className="mt-6 font-serif text-4xl font-semibold">Request received</h2>
        <p className="mt-3 text-muted">Thank you, {name.split(" ")[0]}. We&apos;ll confirm your slot within one working day.</p>
        <dl className="mx-auto mt-8 grid max-w-md gap-3 rounded-xl bg-sand p-6 text-left text-sm">
          {[
            ["Practice area", area],
            ["Format", mode],
            ["When", `${when} · ${slot}`],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4">
              <dt className="text-muted">{k}</dt>
              <dd className="text-right font-medium text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <button type="button" onClick={() => setDone(false)} className="mt-8 text-sm text-gold-deep underline underline-offset-4">
          Book another consultation
        </button>
      </div>
    );
  }

  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
        if (slot) setDone(true);
      }}
    >
      <Step n={1} title="Practice area">
        <div className="grid gap-3 sm:grid-cols-2">
          {PRACTICE.map((p) => (
            <button key={p.slug} type="button" onClick={() => setArea(p.title)} aria-pressed={area === p.title} className={`flex items-center gap-3 text-left ${chip(area === p.title)}`}>
              <PracticeIcon name={p.icon} className="size-5 shrink-0" />
              {p.title}
            </button>
          ))}
        </div>
      </Step>

      <Step n={2} title="Meeting format">
        <div className="grid gap-3 sm:grid-cols-3">
          {MODES.map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={chip(mode === m)}>
              {m}
            </button>
          ))}
        </div>
      </Step>

      <Step n={3} title="Date & time">
        <label className="block text-sm text-muted" htmlFor="date">
          Preferred date
        </label>
        <input
          id="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onFocus={(e) => (e.currentTarget.min = new Date().toISOString().slice(0, 10))}
          className={`mt-2 sm:max-w-xs ${input}`}
        />
        <p className="mt-6 text-sm text-muted">Time slot</p>
        <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {SLOTS.map((s) => (
            <button key={s} type="button" onClick={() => setSlot(s)} aria-pressed={slot === s} className={chip(slot === s)}>
              {s}
            </button>
          ))}
        </div>
      </Step>

      <Step n={4} title="Your details">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required autoComplete="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} className={`sm:col-span-2 ${input}`} />
          <input name="email" type="email" required autoComplete="email" placeholder="Email" className={input} />
          <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone" className={input} />
          <textarea name="note" rows={3} placeholder="Briefly, what would you like to discuss? (optional)" className={`resize-none sm:col-span-2 ${input}`} />
        </div>
      </Step>

      <div className="flex flex-wrap items-center gap-5 border-t border-line pt-8">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-ivory transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!slot}
        >
          Request consultation <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
        {!slot && <p className="text-sm text-muted">Pick a time slot to continue.</p>}
      </div>
    </form>
  );
}
