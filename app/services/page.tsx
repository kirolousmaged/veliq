import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

const ICONS: Record<string, React.ReactNode> = {
  "website-development": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  "mobile-development": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  "seo-setup": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  "digital-marketing": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "data-analytics": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  "brand-strategy": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
};

export const metadata = {
  title: "Services — VELIQ",
  description: "Web development, mobile apps, SEO, digital marketing, data analytics, and brand strategy — all under one dedicated team.",
};

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[1200px] mx-auto flex flex-col gap-16">

        <div className="flex flex-col gap-4">
          <h1 className="heading-1 text-white">Services.</h1>
          <p className="para-32 text-[rgb(201,201,201)] max-w-2xl">
            Six disciplines. One team. Every channel aligned to one direction — your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col gap-6 p-8 rounded-[24px] transition-colors hover:border-[rgb(99,102,241)]"
              style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-[16px] shrink-0"
                style={{ width: 64, height: 64, backgroundColor: "rgb(99,102,241)" }}
              >
                {ICONS[service.slug]}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                <span className="text-[rgb(124,124,124)]" style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  0{i + 1}
                </span>
                <h2 className="text-white" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em" }}>
                  {service.title}
                </h2>
                <p className="text-[rgb(201,201,201)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>
                  {service.desc}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2">
                {service.highlights.slice(0, 2).map((h) => (
                  <div key={h.label} className="flex flex-col gap-0.5">
                    <span className="text-white" style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.04em" }}>
                      {h.value}
                    </span>
                    <span className="text-[rgb(124,124,124)]" style={{ fontSize: "11px", fontWeight: 500 }}>
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>

              <span
                className="self-start text-white group-hover:gap-2 transition-all"
                style={{ fontSize: "13px", fontWeight: 600, color: "rgb(99,102,241)" }}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
