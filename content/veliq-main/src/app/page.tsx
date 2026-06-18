import Link from "next/link";
import ScrollReveal from "./components/scroll-reveal";
import { ServiceIcon } from "./components/service-icons";
import TrustBar from "./components/trust-bar";
import { getCollection } from "@/lib/db";

interface Service {
  id: number;
  icon: string;
  title: string;
  desc: string;
  slug: string;
  bg: string;
}

interface Project {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
}

async function getServices(): Promise<Service[]> {
  return getCollection<Service>("services");
}

async function getProjects(): Promise<Project[]> {
  return getCollection<Project>("projects");
}

export const dynamic = "force-dynamic";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VELIQ",
  url: "https://veliq.com",
  description:
    "Your dedicated backbone team. We engineer seamless brand experiences across web, app, design, and marketing.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://veliq.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default async function Home() {
  const services = await getServices();
  const allProjects = await getProjects();
  const projects = allProjects.filter((p: any) => !p.hidden).slice(0, 6);
  return (
    <div className="bg-[#0a0a14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Glowing orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px] animate-float-slow" />
          <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-cyan-600/8 blur-[100px] animate-float" />
        </div>

        {/* Particles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="about-particle about-particle-1" />
          <div className="about-particle about-particle-2" />
          <div className="about-particle about-particle-3" />
          <div className="about-particle about-particle-4" />
          <div className="about-particle about-particle-5" />
        </div>

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent about-line-glow" />
            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              Your Dedicated
              <br />
              <span className="about-gradient-text">
                Backbone Team
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Every channel. One direction. We don&apos;t manage your digital presence.
            We own it with you.
          </p>
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="about-cta-button group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
            >
              Explore Our Services
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <TrustBar />

      {/* ── Services Preview ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What We Do
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Full-Channel Digital Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Web, app, design, and marketing. One team. No handoffs. No gaps.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 120}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-purple-500/10 blur-[60px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30">
                      <ServiceIcon slug={s.slug} />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{s.title}</h3>
                    <p className="mt-3 text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors duration-300">{s.desc}</p>
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

          <ScrollReveal animation="fade-up" delay={400} className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30"
            >
              View All Services &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Brand Equation ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-blue-600/8 blur-[120px] animate-pulse-glow" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal animation="scale">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Equation
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Speed</span>
              <span className="text-2xl md:text-4xl text-white/30 font-light">&times;</span>
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent" style={{ animationDelay: "0.2s" }}>Accuracy</span>
              <span className="text-2xl md:text-4xl text-white/30 font-light">&times;</span>
              <span className="about-equation-word text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent" style={{ animationDelay: "0.4s" }}>Professionalism</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <p className="text-xl font-semibold text-white md:text-2xl">= Aligned Growth</p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 leading-relaxed">
              This is not a tagline. It is the law VELIQ operates by. Every deliverable, every decision,
              every client interaction is measured against this equation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Mission & Vision ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What Drives Us
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <ScrollReveal animation="slide-left">
              <div className="about-mission-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a14.926 14.926 0 01-5.96-5.96M9.63 8.41A6 6 0 012.25 14.2" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                    Our Mission
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl leading-snug">
                    Engineering Seamless Brand Experiences
                  </h3>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300 flex-1">
                    VELIQ exists to engineer seamless brand experiences, combining velocity,
                    intelligence, and creative precision, so that every web, app, design,
                    and marketing channel our clients own moves in one unified direction: forward.
                  </p>
                  <div className="mt-6 flex gap-2">
                    {["Velocity", "Intelligence", "Precision"].map((word) => (
                      <span
                        key={word}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold tracking-wide text-slate-400 transition-all duration-300 group-hover:border-purple-500/20 group-hover:text-slate-300"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="about-mission-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full transition-all duration-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Our Vision
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl leading-snug">
                    The Most Trusted Growth Architecture Firm
                  </h3>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300 flex-1">
                    To become the most trusted growth architecture firm for elite brands
                    across four continents, where every digital touchpoint is a deliberate
                    act of precision.
                  </p>
                  <div className="mt-6 flex gap-2">
                    {["Trust", "Growth", "Precision"].map((word) => (
                      <span
                        key={word}
                        className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-xs font-semibold tracking-wide text-slate-400 transition-all duration-300 group-hover:border-cyan-500/20 group-hover:text-slate-300"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Projects Preview ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[120px]" />
          <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-600/6 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Our Work
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Recent Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Real results for real businesses. Measured by impact, not vanity metrics.
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.slug} animation={i % 2 === 0 ? "fade-up" : "scale"} delay={i * 80}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3"
                >
                  <div className="overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className={`h-48 w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${p.image.includes('.jpg') || p.image.includes('.jpeg') ? 'object-cover' : 'object-contain bg-[#0f0f1a] p-4'}`} />
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800" />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors duration-300">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{p.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={300} className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30"
            >
              View All Projects &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Promise + CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-purple-600/12 blur-[140px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="scale">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-6">
              Our Promise
            </p>
            <h2 className="text-3xl font-bold md:text-5xl text-white leading-tight">
              Great businesses{" "}
              <span className="about-gradient-text">
                deserve
              </span>{" "}
              more than average agencies.
            </h2>
            <p className="mt-8 text-2xl font-bold about-gradient-text">
              You deserve more.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={300}>
            <Link
              href="/contact"
              className="about-cta-button group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
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
