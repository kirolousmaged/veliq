"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Logo from "../../_components/Logo";

const VALID_PLANS = ["register"] as const;

type AgencyData = {
  status: "with" | "looking";
  selections: string[];
};

type ContactData = {
  name: string;
  phone: string;
  email: string;
  plan: string;
};

export default function SummaryPage() {
  const params = useParams();
  const router = useRouter();
  const plan = params.plan as string;

  if (!VALID_PLANS.includes(plan as typeof VALID_PLANS[number])) {
    notFound();
  }

  const [agencyData, setAgencyData] = useState<AgencyData | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [services, setServices] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    const agency = sessionStorage.getItem("veliq-agency");
    const contact = sessionStorage.getItem("veliq-contact");
    const svc = sessionStorage.getItem("veliq-services");

    if (!agency || !contact || !svc) {
      router.replace(`/${plan}`);
      return;
    }

    try {
      setAgencyData(JSON.parse(agency));
      setContactData(JSON.parse(contact));
      setServices(JSON.parse(svc));
    } catch {
      router.replace(`/${plan}`);
    }
  }, [plan, router]);

  async function handleSubmit() {
    if (!consent) {
      setConsentError("You must agree to be contacted.");
      return;
    }
    if (!contactData) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactData.name,
          phone: contactData.phone,
          email: contactData.email,
          services,
          agencyStatus: agencyData?.status,
          agencySelections: agencyData?.selections,
          consent: true,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      sessionStorage.removeItem("veliq-agency");
      sessionStorage.removeItem("veliq-contact");
      sessionStorage.removeItem("veliq-services");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!contactData || !agencyData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a18]">
        <div className="text-slate-400 text-sm">Loading...</div>
      </div>
    );
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-bold text-sky-400">3</div>
          <div className="h-px flex-1 bg-slate-700" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">4</div>
        </div>

        {status === "success" ? (
          <div className="mt-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 ring-1 ring-green-500/30">
              <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-8 text-3xl font-bold text-white">Thank You!</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              We&apos;ve received your request. A member of our team will contact you shortly.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            <button
              onClick={() => router.push("/")}
              className="mt-6 rounded-lg bg-indigo-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98]"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <>
            {/* Heading */}
            <h1 className="mt-8 text-3xl font-bold text-white">Review & Submit</h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Please review your information before submitting.
            </p>

            <div className="mt-8 space-y-4">
              {/* Section 1: Agency */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15">
                      <svg className="h-3.5 w-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Agency</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push(`/${plan}`)}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-medium text-white">
                    {agencyData.status === "with" ? "Currently with an agency" : "Looking for an agency"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {agencyData.selections.map((s) => (
                      <span key={s} className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/50">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Contact */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15">
                      <svg className="h-3.5 w-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push(`/${plan}/contact`)}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="divide-y divide-slate-800/60">
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs text-slate-500">Name</span>
                    <span className="text-sm font-medium text-white">{contactData.name}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs text-slate-500">Phone</span>
                    <span className="text-sm font-medium text-white">{contactData.phone}</span>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs text-slate-500">Email</span>
                    <span className="text-sm font-medium text-white">{contactData.email}</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Services */}
              <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500/15">
                      <svg className="h-3.5 w-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services</span>
                    <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-bold text-sky-400">{services.length}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => router.push(`/${plan}/services`)}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit
                  </button>
                </div>
                <div className="px-5 py-4">
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-sky-400 ring-1 ring-indigo-500/20">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="mt-2 rounded-xl border border-slate-800 bg-gradient-to-b from-white/[0.03] to-transparent px-5 py-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      setConsentError("");
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-transparent text-indigo-500 focus:ring-indigo-500/40"
                  />
                  <span className="text-xs leading-relaxed text-slate-400">
                    I agree that a VELIQ representative may contact me via email or phone regarding my inquiry.
                  </span>
                </label>
                {consentError && <p className="mt-2 text-xs text-red-400">{consentError}</p>}
              </div>

              {/* Server error */}
              {status === "error" && (
                <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-500/20">{serverError}</p>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => router.push(`/${plan}/services`)}
                  className="flex-1 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:bg-white/5 active:scale-[0.98]"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="flex-1 rounded-lg bg-gradient-to-r from-violet-700 via-indigo-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:shadow-indigo-500/50 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Footer */}
        <p className="mt-16 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} VELIQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
