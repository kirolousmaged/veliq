import { notFound } from "next/navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { SERVICES, getService } from "@/lib/services";

const ICONS: Record<string, React.ReactNode> = {
  "website-development": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  "mobile-development": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  "seo-setup": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  "digital-marketing": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "data-analytics": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  ),
  "brand-strategy": (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  ),
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} — VELIQ`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="bg-black min-h-screen pt-16">
      <article className="max-w-[1200px] mx-auto section-padding flex flex-col gap-20">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="flex flex-col gap-6">
            <div
              className="flex items-center justify-center rounded-[20px] self-start"
              style={{ width: 80, height: 80, backgroundColor: "rgb(99,102,241)" }}
            >
              {ICONS[service.slug]}
            </div>
            <h1
              className="text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1.05 }}
            >
              {service.title}
            </h1>
            <p className="text-[rgb(201,201,201)]" style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "50ch" }}>
              {service.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3">
            {service.highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col gap-1 p-6 rounded-[20px]"
                style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
              >
                <span className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.05em" }}>
                  {h.value}
                </span>
                <span className="text-[rgb(201,201,201)]" style={{ fontSize: "13px", fontWeight: 500 }}>
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-10">
          <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            What&apos;s included.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 rounded-[16px]"
                style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
              >
                <span
                  className="shrink-0 mt-0.5 rounded-full flex items-center justify-center text-white"
                  style={{ width: 20, height: 20, backgroundColor: "rgb(99,102,241)", fontSize: "11px", fontWeight: 700 }}
                >
                  ✓
                </span>
                <span className="text-white" style={{ fontSize: "14px", lineHeight: 1.5 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="flex flex-col gap-10">
          <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            Our process.
          </h2>
          <div className="flex flex-col gap-4">
            {service.process.map((item, i) => (
              <div
                key={item.step}
                className="flex items-start gap-5 p-6 rounded-[16px]"
                style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)" }}
              >
                <span
                  className="shrink-0 text-white/30"
                  style={{ fontSize: "3rem", fontWeight: 900, letterSpacing: "-0.08em", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-white" style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {item.step}
                  </span>
                  <span className="text-[rgb(201,201,201)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.05em" }}>
            Tools & technologies.
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full text-white"
                style={{ backgroundColor: "rgb(22,22,22)", border: "1px solid rgb(40,40,40)", fontSize: "13px", fontWeight: 500, padding: "8px 18px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back + CTA */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full text-white hover:opacity-80 transition-opacity"
            style={{ border: "1px solid rgb(40,40,40)", fontSize: "14px", fontWeight: 500, padding: "12px 24px" }}
          >
            ← All Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "rgb(99,102,241)", fontSize: "14px", fontWeight: 600, padding: "12px 28px" }}
          >
            Start a Project →
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
