"use client";

import { useState, useRef, useEffect } from "react";

const COUNTRIES = [
  { name: "Egypt", code: "+20", flag: "🇪🇬", minLen: 11, maxLen: 11 },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", minLen: 9, maxLen: 9 },
  { name: "UAE", code: "+971", flag: "🇦🇪", minLen: 9, maxLen: 9 },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", minLen: 8, maxLen: 8 },
  { name: "Qatar", code: "+974", flag: "🇶🇦", minLen: 8, maxLen: 8 },
  { name: "Bahrain", code: "+973", flag: "🇧🇭", minLen: 8, maxLen: 8 },
  { name: "Oman", code: "+968", flag: "🇴🇲", minLen: 8, maxLen: 8 },
  { name: "Jordan", code: "+962", flag: "🇯🇴", minLen: 9, maxLen: 9 },
  { name: "Lebanon", code: "+961", flag: "🇱🇧", minLen: 7, maxLen: 8 },
  { name: "Iraq", code: "+964", flag: "🇮🇶", minLen: 10, maxLen: 10 },
  { name: "Morocco", code: "+212", flag: "🇲🇦", minLen: 9, maxLen: 9 },
  { name: "United States", code: "+1", flag: "🇺🇸", minLen: 10, maxLen: 10 },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", minLen: 10, maxLen: 10 },
  { name: "Turkey", code: "+90", flag: "🇹🇷", minLen: 10, maxLen: 10 },
];

type Country = (typeof COUNTRIES)[number];

const packages = [
  {
    name: "Simple Website",
    subtitle: "Up to 5 Pages",
    priceWithout: { min: 2500, max: 5000 },
    priceWith: { min: 4500, max: 7000 },
    delivery: "3 days",
    popular: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO setup"],
  },
  {
    name: "Portfolio Website",
    subtitle: "Showcase Your Work",
    priceWithout: { min: 5000, max: 10000 },
    priceWith: { min: 10000, max: 16000 },
    delivery: "7 days",
    popular: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    features: ["Custom portfolio layout", "Project showcase gallery", "Animated transitions", "Mobile-first design"],
  },
  {
    name: "E-Commerce Website",
    subtitle: "Sell Online",
    priceWithout: { min: 10000, max: 15000 },
    priceWith: { min: 18000, max: 25000 },
    delivery: "15–20 days",
    popular: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    features: ["Product catalog & management", "Shopping cart & checkout", "Payment gateway integration", "Order management dashboard"],
  },
  {
    name: "Services & Store",
    subtitle: "Display, Pay & Sell",
    priceWithout: { min: 15000, max: 20000 },
    priceWith: { min: 25000, max: 35000 },
    delivery: "20–30 days",
    popular: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    features: ["Service listings & booking", "Online payments & invoicing", "Integrated store", "Admin dashboard"],
  },
];

const supportPlans = [
  {
    name: "Basic Support",
    priceLabel: "500 – 2,000",
    priceSuffix: "EGP / month",
    description: "Essentials to keep your website stable and your team unblocked.",
    features: [
      "Simple bug fixing & quick patches",
      "Image & content edits on request",
      "Website uptime & health monitoring",
      "Technical guidance & consultations",
    ],
    disclaimer: null,
    highlighted: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Basic Support + SEO",
    priceLabel: "2,000 – 5,000",
    priceSuffix: "EGP / month",
    description: "Basic Support with developer-level SEO to keep your rankings healthy.",
    features: [
      "Everything in Basic Support plan",
      "Technical SEO audits & reporting",
      "On-page optimization & corrections",
      "Core Web Vitals & performance fixes",
    ],
    disclaimer: null,
    highlighted: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    name: "Professional Support",
    priceLabel: "5,000 – 8,000",
    priceSuffix: "EGP / month",
    description: "Everything in Basic, plus hands-on implementation and page building.",
    features: [
      "Everything in Basic Support plan",
      "Full implementation of requirements",
      "Design & build new website pages",
      "Priority response & fast delivery",
    ],
    disclaimer: "Does not include website enhancements, optimization, or SEO support.",
    highlighted: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    name: "Professional + SEO",
    priceLabel: "8,000 – 12,000",
    priceSuffix: "EGP / month",
    description: "Everything in Professional, plus SEO issue fixing to keep your rankings healthy.",
    features: [
      "Everything in Professional Support",
      "SEO issue fixing & technical fixes",
      "Core Web Vitals & indexing issues",
      "On-page SEO corrections & audits",
    ],
    disclaimer: "Does not include blog creation, SEO enhancements, or new content strategy.",
    highlighted: false,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function PricingPage() {
  const [withHosting, setWithHosting] = useState(false);

  // Modal
  const [modalService, setModalService] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", agencyName: "", phone: "", email: "" });
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function openModal(service: string) {
    setModalService(service);
    setForm({ name: "", agencyName: "", phone: "", email: "" });
    setSelectedCountry(COUNTRIES[0]);
    setErrors({});
    setSubmitted(false);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!form.name.trim() || form.name.trim().length < 2) newErrors.name = "Name is required (min 2 characters).";
    if (!form.phone.trim() || form.phone.trim().length < selectedCountry.minLen) {
      newErrors.phone = `Enter a valid ${selectedCountry.minLen}-digit number.`;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});
    try {
      const res = await fetch("/api/pricing-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          agencyName: form.agencyName.trim() || null,
          phone: `${selectedCountry.code} ${form.phone.trim()}`,
          email: form.email.trim(),
          service: modalService,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setErrors({ submit: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a14]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-blue-700/10 blur-[100px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Simple,{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Choose the package that fits your needs. All prices are in Egyptian Pounds (EGP).
          </p>
          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-1 rounded-full border border-slate-700/60 bg-white/5 p-1 backdrop-blur-sm">
            <button
              onClick={() => setWithHosting(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                !withHosting
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Without Domain & Hosting
            </button>
            <button
              onClick={() => setWithHosting(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                withHosting
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              With Domain & Hosting
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => {
            const price = withHosting ? pkg.priceWith : pkg.priceWithout;
            const serviceLabel = `${pkg.name} — ${withHosting ? "With Domain & Hosting" : "Without Domain & Hosting"}`;
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-200 ${
                  pkg.popular
                    ? "border-blue-500/60 bg-blue-600/10 shadow-xl shadow-blue-500/10"
                    : "border-slate-700/50 bg-white/[0.03] hover:border-slate-600/60 hover:bg-white/[0.05]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${pkg.popular ? "bg-blue-500/20 text-sky-400" : "bg-white/5 text-slate-400"}`}>
                  {pkg.icon}
                </div>

                <h3 className="text-base font-bold text-white">{pkg.name}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{pkg.subtitle}</p>

                <div className="mt-4">
                  <p className="text-2xl font-extrabold text-white">
                    {price.min.toLocaleString()}
                    <span className="text-base font-semibold text-slate-400"> – {price.max.toLocaleString()}</span>
                  </p>
                  <p className="text-xs text-slate-500">EGP</p>
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-slate-400">Delivery: <span className="text-white font-medium">{pkg.delivery}</span></span>
                </div>

                <div className="my-5 h-px bg-slate-700/50" />

                <ul className="flex flex-col gap-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(serviceLabel)}
                  className={`mt-6 block w-full rounded-xl py-2.5 text-center text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                      : "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Support Plans */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Ongoing Support</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Website{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Maintenance Plans
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              Keep your site fast, secure, and growing — every month.
            </p>
            <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-200 ${
                  plan.highlighted
                    ? "border-blue-500/60 bg-blue-600/10 shadow-xl shadow-blue-500/10"
                    : "border-slate-700/50 bg-white/[0.03] hover:border-slate-600/60 hover:bg-white/[0.05]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${plan.highlighted ? "bg-blue-500/20 text-sky-400" : "bg-white/5 text-slate-400"}`}>
                  {plan.icon}
                </div>

                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.description}</p>

                <div className="mt-5">
                  <p className="text-2xl font-extrabold text-white">{plan.priceLabel}</p>
                  {plan.priceSuffix && (
                    <p className="mt-0.5 text-sm font-medium text-slate-400">{plan.priceSuffix}</p>
                  )}
                </div>

                <div className="my-5 h-px bg-slate-700/50" />

                <ul className="flex flex-col gap-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.disclaimer && (
                  <p className="mt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-800 pt-3">
                    * {plan.disclaimer}
                  </p>
                )}

                <button
                  onClick={() => openModal(`${plan.name} — Monthly Support`)}
                  className={`mt-5 block w-full rounded-xl py-2.5 text-center text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    plan.highlighted
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                      : "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Service */}
        <div className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">SEO Service</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white">
              Grow Your{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Organic Reach
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-400">
              A dedicated developer working on your project for 3 months — with full reports and website support included.
            </p>
            <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>

          <div className="mt-10 mx-auto max-w-2xl">
            <div className="relative rounded-2xl border border-blue-500/40 bg-blue-600/5 p-8 shadow-xl shadow-blue-500/5">
              <div className="absolute -top-3 left-8">
                <span className="rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-500/30">
                  Per Website / Project
                </span>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                {/* Left */}
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-sky-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">SEO Package</h3>
                    <p className="mt-1 text-sm text-slate-400">3-Month Engagement</p>
                  </div>

                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-white">35,000</span>
                      <span className="mb-1 text-base font-medium text-slate-400">EGP</span>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal("SEO Package — 3-Month Engagement")}
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 active:scale-[0.98]"
                  >
                    Get Started
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                <div className="hidden sm:block w-px self-stretch bg-slate-700/50" />
                <div className="sm:hidden h-px bg-slate-700/50" />

                {/* Right */}
                <div className="flex flex-col gap-4 sm:max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What&apos;s Included</p>

                  {[
                    { label: "Keyword Research & Strategy", desc: "Primary & long-tail keywords, search intent analysis, competitor keyword gap" },
                    { label: "On-Page SEO", desc: "Titles, meta descriptions, content structure (H1–H3), internal linking & URL optimization" },
                    { label: "Technical SEO", desc: "Site speed, Core Web Vitals, mobile-first, crawl errors, sitemap & indexing" },
                    { label: "Off-Page & Backlinks", desc: "Quality backlink building, guest posting, digital PR & brand authority" },
                    { label: "AI & Answer Optimization", desc: "GEO & AEO — get found in AI tools, voice search & Google featured snippets" },
                    { label: "Monthly Reports & Analytics", desc: "GA4, Search Console, keyword rankings & full performance insights every month" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-2.5">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <p className="mt-1 text-xs text-slate-600 border-t border-slate-800 pt-3">
                    Tools: SEMrush · Ahrefs · Screaming Frog · GA4 · GSC · Microsoft Clarity · GTM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-16 text-center text-sm text-slate-600">
          Have a custom project in mind?{" "}
          <button
            onClick={() => openModal("Custom Project")}
            className="text-sky-400 hover:text-sky-300 transition-colors"
          >
            Get in touch
          </button>{" "}
          and we&apos;ll figure it out together.
        </p>
      </div>

      {/* Footer */}
      <p className="pb-6 text-center text-xs text-slate-700">
        &copy; {new Date().getFullYear()} VELIQ. All rights reserved.
      </p>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Card */}
          <div className="relative w-full max-w-md rounded-2xl border border-slate-700/60 bg-[#0d0d1a] shadow-2xl">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-white/5 hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center gap-4 py-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                    <svg className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">You&apos;re all set!</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Thanks for reaching out. We&apos;ve received your request for{" "}
                    <span className="text-sky-400 font-medium">{modalService}</span> and will get back to you within 24 hours.
                  </p>
                  <p className="text-xs text-slate-600">Check your inbox — a confirmation email is on its way.</p>
                  <button
                    onClick={closeModal}
                    className="mt-2 rounded-xl bg-blue-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white">Get Started</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Interested in{" "}
                      <span className="text-sky-400 font-medium">{modalService}</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Full Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500 ${
                          errors.name ? "border-red-500/60" : "border-slate-700/60"
                        }`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>

                    {/* Agency Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Agency Name <span className="text-slate-600">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={form.agencyName}
                        onChange={(e) => setForm({ ...form, agencyName: e.target.value })}
                        placeholder="Your agency or company"
                        className="w-full rounded-xl border border-slate-700/60 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone Number <span className="text-sky-400">*</span>
                      </label>
                      <div className="flex gap-2">
                        {/* Country dropdown */}
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() => setCountryOpen(!countryOpen)}
                            className="flex h-full items-center gap-2 rounded-xl border border-slate-700/60 bg-white/5 px-3 py-3 text-sm text-white transition-colors hover:border-slate-600 focus:border-blue-500 focus:outline-none"
                          >
                            <span className="text-base">{selectedCountry.flag}</span>
                            <span className="text-slate-400 text-xs">{selectedCountry.code}</span>
                            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {countryOpen && (
                            <div className="absolute left-0 top-full z-50 mt-1 max-h-56 w-52 overflow-y-auto rounded-xl border border-slate-700/60 bg-[#0d0d1a] shadow-2xl">
                              {COUNTRIES.map((c) => (
                                <button
                                  key={`${c.name}-${c.code}`}
                                  type="button"
                                  onClick={() => { setSelectedCountry(c); setCountryOpen(false); setForm((f) => ({ ...f, phone: "" })); }}
                                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5 ${selectedCountry.name === c.name ? "text-sky-400" : "text-slate-300"}`}
                                >
                                  <span>{c.flag}</span>
                                  <span className="flex-1 truncate">{c.name}</span>
                                  <span className="text-xs text-slate-500">{c.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Number input */}
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            if (val.length <= selectedCountry.maxLen) setForm({ ...form, phone: val });
                          }}
                          placeholder={"0".repeat(selectedCountry.minLen)}
                          className={`flex-1 rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500 ${
                            errors.phone ? "border-red-500/60" : "border-slate-700/60"
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email Address <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-blue-500 ${
                          errors.email ? "border-red-500/60" : "border-slate-700/60"
                        }`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>

                    {errors.submit && (
                      <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                        {errors.submit}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Request"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
