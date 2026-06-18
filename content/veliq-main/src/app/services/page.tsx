import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import { ServiceIcon } from "../components/service-icons";
import { getCollection } from "@/lib/db";

interface Highlight {
  label: string;
  value: string;
}

interface ProcessStep {
  step: string;
  desc: string;
}

interface Service {
  id: number;
  slug: string;
  icon: string;
  title: string;
  desc: string;
  fullDesc: string;
  color: string;
  bg: string;
  highlights: Highlight[];
  features: string[];
  process: ProcessStep[];
  technologies: string[];
}

async function getServices(): Promise<Service[]> {
  return getCollection<Service>("services");
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Services",
  description:
    "Website development, mobile apps, website support, and SEO. VELIQ delivers full-channel digital solutions with speed, accuracy, and professionalism.",
  openGraph: {
    title: "Our Services — VELIQ",
    description:
      "Website development, mobile apps, website support, and SEO. Full-channel digital solutions.",
    url: "https://veliq.com/services",
  },
  twitter: {
    title: "Our Services — VELIQ",
    description:
      "Website development, mobile apps, website support, and SEO.",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px] animate-float" />
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float-slow" />
        </div>

        {/* Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="about-particle about-particle-1" />
          <div className="about-particle about-particle-2" />
          <div className="about-particle about-particle-3" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent about-line-glow" />
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What We Do
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              End-to-End Digital{" "}
              <span className="about-gradient-text">
                Services
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            We design, build, and grow digital products that help businesses
            scale. One team. Every channel. One direction.
          </p>

          {/* Scroll indicator */}
          <div className="mt-16 animate-fade-in delay-600">
            <div className="about-scroll-indicator mx-auto flex flex-col items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-slate-600">Explore</span>
              <div className="h-12 w-px bg-gradient-to-b from-purple-500/50 to-transparent about-scroll-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 120}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-purple-500/10 blur-[60px]" />
                  </div>
                  {/* Shimmer */}
                  <div className="about-card-shimmer" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                      <ServiceIcon slug={s.slug} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors duration-300">
                      {s.desc}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {s.highlights.slice(0, 2).map((h) => (
                        <div key={h.label} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-center transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-purple-500/20">
                          <p className="text-lg font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">{h.value}</p>
                          <p className="text-xs text-slate-500">{h.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Learn More
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Why VELIQ ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              What Sets VELIQ Apart
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} animation="fade-up" delay={i * 120} className="h-full">
                <div className="text-center group h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-2">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Process Overview ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-600/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Approach
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              How We Deliver Results
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Every project follows our proven methodology, ensuring quality,
              transparency, and outcomes you can measure.
            </p>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {generalProcess.map((step, i) => (
              <ScrollReveal key={i} animation="scale" delay={i * 150} className="h-full">
                <div className="relative text-center group h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-2">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-purple-500/40 text-purple-400 text-xl font-bold transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/12 blur-[140px] animate-pulse-glow" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold md:text-5xl text-white">
              Ready to{" "}
              <span className="about-gradient-text">
                Get Started
              </span>
              ?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Tell us about your project and we&apos;ll show you how we can help.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <Link
              href="/contact"
              className="about-cta-button group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
            >
              Get in Touch
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

const whyUs = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "We move quickly without cutting corners. Launching projects on time, every time.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Results-Driven",
    desc: "Every decision is backed by data. We focus on metrics that matter to your business.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "True Partnership",
    desc: "We embed with your team, not just deliver a product. Your success is our success.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "End-to-End",
    desc: "From strategy to execution to ongoing support. One team, no handoffs, no gaps.",
  },
];

const generalProcess = [
  {
    title: "Discover",
    desc: "We listen, research, and understand your goals, audience, and competitive landscape.",
  },
  {
    title: "Strategize",
    desc: "We craft a clear roadmap with milestones, deliverables, and success metrics.",
  },
  {
    title: "Execute",
    desc: "Our experts build, design, and launch with precision, keeping you in the loop at every step.",
  },
  {
    title: "Grow",
    desc: "We measure results, optimize performance, and help you scale what works.",
  },
];
