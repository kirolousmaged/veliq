import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Pricing — VELIQ",
  description: "Transparent pricing for websites, mobile apps, SEO, and digital marketing in Egypt and the Middle East.",
};

const WEBSITE_PLANS = [
  {
    name: "Starter",
    price: "15,000",
    description: "Perfect for small businesses and personal brands needing a professional online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
      "3-week delivery",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business",
    price: "35,000",
    description: "For growing businesses that need a powerful, conversion-focused website.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Full SEO optimization",
      "CMS integration",
      "Analytics dashboard",
      "3 rounds of revisions",
      "6-week delivery",
      "1-month post-launch support",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complex platforms, e-commerce, web applications, and enterprise-grade solutions.",
    features: [
      "Unlimited pages",
      "Custom web application",
      "E-commerce integration",
      "Advanced SEO strategy",
      "Dedicated project manager",
      "Unlimited revisions",
      "Post-launch retainer available",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

const MAINTENANCE_PLANS = [
  {
    name: "Basic",
    price: "2,000",
    period: "/mo",
    features: ["Monthly updates", "Bug fixes", "Performance monitoring", "5 hours support"],
  },
  {
    name: "Pro",
    price: "4,500",
    period: "/mo",
    features: ["Weekly updates", "Bug fixes", "SEO health checks", "Analytics reports", "10 hours support"],
  },
  {
    name: "Growth",
    price: "9,000",
    period: "/mo",
    features: ["Unlimited updates", "Priority support", "Monthly strategy call", "20 hours support", "A/B testing"],
  },
];

const SEO_PACKAGE = {
  price: "5,500",
  period: "/mo",
  features: [
    "Full technical SEO audit",
    "Keyword research & strategy",
    "On-page optimization",
    "Monthly content plan (4 articles)",
    "Link building outreach",
    "Monthly reporting & insights",
  ],
};

const FAQS = [
  {
    q: "Are prices in EGP?",
    a: "Yes, all prices listed are in Egyptian Pounds (EGP). For clients outside Egypt, we can invoice in USD or SAR — contact us for rates.",
  },
  {
    q: "What payment terms do you offer?",
    a: "We typically split project payments: 40% upfront, 40% at midpoint, and 20% on delivery. Monthly services are billed in advance.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can start with a Starter website and upgrade to a Business package as your needs grow. Same team, smooth transition.",
  },
  {
    q: "Is there a contract or minimum term?",
    a: "Monthly services have a 3-month minimum commitment. Project work has no ongoing contract after delivery.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto section-padding flex flex-col gap-24">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="heading-1 text-white">Pricing.</h1>
          <p className="para-32 text-[rgb(201,201,201)] max-w-2xl">
            Transparent, competitive pricing for businesses in Egypt and across the Middle East.
            No hidden fees. No surprises.
          </p>
          <p className="text-[rgb(124,124,124)]" style={{ fontSize: "13px" }}>
            All prices in Egyptian Pounds (EGP). International pricing available on request.
          </p>
        </div>

        {/* Website plans */}
        <div className="flex flex-col gap-10">
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            Website Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WEBSITE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-6 p-8 rounded-[24px] relative overflow-hidden"
                style={{
                  backgroundColor: plan.highlighted ? "rgb(99,102,241)" : "rgb(14,14,14)",
                  border: `1px solid ${plan.highlighted ? "rgb(99,102,241)" : "rgb(28,28,28)"}`,
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute top-4 right-4 rounded-full text-white"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)", fontSize: "11px", fontWeight: 700, padding: "4px 12px" }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <h3 style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "rgb(124,124,124)", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    {plan.price === "Custom" ? (
                      <span className="text-white" style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.05em" }}>
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-white" style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.05em" }}>
                          {plan.price}
                        </span>
                        <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "rgb(124,124,124)", fontSize: "14px" }}>
                          EGP
                        </span>
                      </>
                    )}
                  </div>
                  <p style={{ color: plan.highlighted ? "rgba(255,255,255,0.8)" : "rgb(201,201,201)", fontSize: "14px", lineHeight: 1.6 }}>
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.9)" : "rgb(99,102,241)", fontSize: "13px", fontWeight: 700, flexShrink: 0 }}>
                        ✓
                      </span>
                      <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.85)" : "rgb(201,201,201)", fontSize: "14px" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="text-center rounded-full transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: plan.highlighted ? "white" : "rgb(99,102,241)",
                    color: plan.highlighted ? "rgb(99,102,241)" : "white",
                    fontSize: "14px",
                    fontWeight: 700,
                    padding: "14px",
                    display: "block",
                  }}
                >
                  {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance plans */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
              Maintenance Plans
            </h2>
            <p className="text-[rgb(201,201,201)]" style={{ fontSize: "15px" }}>
              Keep your website fast, secure, and up-to-date.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col gap-5 p-7 rounded-[20px]"
                style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-[rgb(124,124,124)]" style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-white" style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.05em" }}>
                      {plan.price}
                    </span>
                    <span className="text-[rgb(124,124,124)]" style={{ fontSize: "13px" }}>
                      EGP{plan.period}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <span className="text-[rgb(99,102,241)] shrink-0" style={{ fontSize: "12px", fontWeight: 700 }}>✓</span>
                      <span className="text-[rgb(201,201,201)]" style={{ fontSize: "13px" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="text-center rounded-full text-white hover:opacity-80 transition-opacity"
                  style={{ border: "1px solid rgb(40,40,40)", fontSize: "13px", fontWeight: 600, padding: "10px" }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SEO package */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            SEO Package
          </h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 rounded-[24px] items-center"
            style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
          >
            <div className="lg:col-span-2 flex flex-col gap-2">
              <span className="text-[rgb(124,124,124)]" style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Monthly Retainer
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-white" style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-0.05em" }}>
                  {SEO_PACKAGE.price}
                </span>
                <span className="text-[rgb(124,124,124)]" style={{ fontSize: "14px" }}>
                  EGP{SEO_PACKAGE.period}
                </span>
              </div>
              <Link
                href="/contact"
                className="self-start rounded-full text-white hover:opacity-90 transition-opacity mt-2"
                style={{ backgroundColor: "rgb(99,102,241)", fontSize: "14px", fontWeight: 700, padding: "12px 28px" }}
              >
                Start SEO
              </Link>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {SEO_PACKAGE.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <span className="text-[rgb(99,102,241)] shrink-0" style={{ fontWeight: 700 }}>✓</span>
                  <span className="text-[rgb(201,201,201)]" style={{ fontSize: "14px" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-10">
          <h2 className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            Questions about pricing.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="flex flex-col gap-3 p-6 rounded-[16px]"
                style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
              >
                <h3 className="text-white" style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                  {faq.q}
                </h3>
                <p className="text-[rgb(201,201,201)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CTA */}
        <div
          className="flex flex-col md:flex-row items-center gap-8 p-10 rounded-[24px]"
          style={{ backgroundColor: "rgb(99,102,241)" }}
        >
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-white" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.04em" }}>
              Not sure what you need?
            </h3>
            <p className="text-white/80" style={{ fontSize: "15px" }}>
              Book a free 30-minute discovery call. No obligation, just clarity.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full text-[rgb(99,102,241)] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "white", fontSize: "15px", fontWeight: 700, padding: "14px 32px" }}
          >
            Book a Free Call
          </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
