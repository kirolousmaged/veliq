"use client";

import { useState } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Logo from "../_components/Logo";

const VALID_PLANS = ["register"] as const;

const PAIN_POINTS = [
  "Agency disappears after onboarding",
  "Reports full of numbers with no clear explanation",
  "Generic packages instead of tailored solutions",
  "Constantly chasing for updates and progress",
] as const;

const VALUES = [
  "A team that works like your in-house department",
  "Website, social, ads, and brand — all connected",
  "Clear, measurable results — not just deliverables",
  "A long-term partner, not a one-time contractor",
] as const;

export default function AgencyQuestionPage() {
  const params = useParams();
  const router = useRouter();
  const plan = params.plan as string;

  if (!VALID_PLANS.includes(plan as typeof VALID_PLANS[number])) {
    notFound();
  }

  const [agencyStatus, setAgencyStatus] = useState<"with" | "looking" | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [error, setError] = useState("");

  const options = agencyStatus === "with" ? PAIN_POINTS : VALUES;

  function toggleOption(option: string) {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
    setError("");
  }

  function handleNext() {
    if (!agencyStatus) {
      setError("Please select one of the options above.");
      return;
    }
    if (selectedOptions.length === 0) {
      setError("Please select at least one option.");
      return;
    }

    sessionStorage.setItem(
      "veliq-agency",
      JSON.stringify({ status: agencyStatus, selections: selectedOptions })
    );
    router.push(`/${plan}/contact`);
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#0d1232] to-[#0a1a2e]">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-sky-500/15 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 py-16">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block transition hover:opacity-80"><Logo className="h-10 w-auto md:h-12" /></Link>
          <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </div>

        {/* Step indicator */}
        <div className="mt-8 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">1</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-500">2</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-500">3</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-500">4</div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-bold text-white">Tell Us About You</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          This helps us understand your situation better.
        </p>

        {/* Agency status selection */}
        <div className="mt-8 space-y-3">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
            Are you currently working with an agency?
          </label>

          <button
            type="button"
            onClick={() => {
              setAgencyStatus("with");
              setSelectedOptions([]);
              setError("");
            }}
            className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3.5 text-sm text-left transition ${
              agencyStatus === "with"
                ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                : "border-slate-800 bg-white/[0.02] text-slate-300 hover:border-slate-700 hover:bg-white/5"
            }`}
          >
            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
              agencyStatus === "with" ? "border-indigo-500 bg-indigo-500" : "border-slate-600"
            }`}>
              {agencyStatus === "with" && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            Yes, I already work with an agency
          </button>

          <button
            type="button"
            onClick={() => {
              setAgencyStatus("looking");
              setSelectedOptions([]);
              setError("");
            }}
            className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3.5 text-sm text-left transition ${
              agencyStatus === "looking"
                ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                : "border-slate-800 bg-white/[0.02] text-slate-300 hover:border-slate-700 hover:bg-white/5"
            }`}
          >
            <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
              agencyStatus === "looking" ? "border-indigo-500 bg-indigo-500" : "border-slate-600"
            }`}>
              {agencyStatus === "looking" && (
                <div className="h-2 w-2 rounded-full bg-white" />
              )}
            </div>
            No, I&apos;m looking for one
          </button>
        </div>

        {/* Follow-up options */}
        {agencyStatus && (
          <div className="mt-8 space-y-3">
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-400">
              {agencyStatus === "with"
                ? "What challenges do you face?"
                : "What matters most to you?"}
            </label>

            {options.map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                  selectedOptions.includes(option)
                    ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                    : "border-slate-800 bg-white/[0.02] text-slate-300 hover:border-slate-700 hover:bg-white/5"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleOption(option)}
                  className="h-4 w-4 rounded border-slate-600 bg-transparent text-indigo-500 focus:ring-indigo-500/40"
                />
                {option}
              </label>
            ))}
          </div>
        )}

        {/* Error */}
        {error && <p className="mt-4 text-xs text-red-400">{error}</p>}

        {/* Divider + Next */}
        <div className="mt-8">
          <div className="h-px bg-slate-800" />
          <button
            type="button"
            onClick={handleNext}
            className="mt-5 w-full rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98]"
          >
            Next
          </button>
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} VELIQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
