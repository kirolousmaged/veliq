"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Logo from "../../_components/Logo";

const VALID_PLANS = ["register"] as const;

const SERVICES = [
  "Website Development",
  "Social Media Marketing",
  "Mobile Application Development",
  "SEO",
  "Media Buying",
  "SMS & Email Marketing",
  "Marketing Research & Strategy",
  "Branding",
  "Interior Design",
] as const;

export default function ServicesPage() {
  const params = useParams();
  const router = useRouter();
  const plan = params.plan as string;

  if (!VALID_PLANS.includes(plan as typeof VALID_PLANS[number])) {
    notFound();
  }

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!sessionStorage.getItem("veliq-contact")) {
      router.replace(`/${plan}/contact`);
    }
  }, [plan, router]);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
    setError("");
  }

  function handleNext() {
    if (selectedServices.length === 0) {
      setError("Please select at least one service.");
      return;
    }
    sessionStorage.setItem("veliq-services", JSON.stringify(selectedServices));
    router.push(`/${plan}/summary`);
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-sky-400">1</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-sky-400">2</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">3</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-500">4</div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-3xl font-bold text-white">Select Services</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Choose the services you need.
        </p>

        {/* Services */}
        <div className="mt-8 space-y-2">
          {SERVICES.map((service) => (
            <label
              key={service}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                selectedServices.includes(service)
                  ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                  : "border-slate-800 bg-white/[0.02] text-slate-300 hover:border-slate-700 hover:bg-white/5"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 rounded border-slate-600 bg-transparent text-indigo-500 focus:ring-indigo-500/40"
              />
              {service}
            </label>
          ))}
        </div>

        {error && <p className="mt-3 text-xs text-red-400">{error}</p>}

        {/* Selected tags */}
        {selectedServices.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedServices.map((service) => (
              <span
                key={service}
                className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-sky-400 ring-1 ring-indigo-500/20"
              >
                {service}
                <button type="button" onClick={() => toggleService(service)} className="hover:text-sky-300">&times;</button>
              </span>
            ))}
          </div>
        )}

        {/* Divider + Buttons */}
        <div className="mt-8">
          <div className="h-px bg-slate-800" />
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => router.push(`/${plan}/contact`)}
              className="flex-1 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-white/5 active:scale-[0.98]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98]"
            >
              Next
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} VELIQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
