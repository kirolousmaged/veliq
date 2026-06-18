import { notFound } from "next/navigation";
import Link from "next/link";
import ContactForm from "../../contact-form";
import ScrollReveal from "../../components/scroll-reveal";
import { ServiceIcon } from "../../components/service-icons";
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

interface Project {
  slug: string;
  bg: string;
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.desc,
    openGraph: {
      title: `${service.title} — VELIQ`,
      description: service.desc,
      url: `https://veliq.com/services/${slug}`,
    },
    twitter: {
      title: `${service.title} — VELIQ`,
      description: service.desc,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const services = await getServices();
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const allProjects = await getProjects();
  const relatedProjects = allProjects.filter((p) => p.tag === service.title);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px] animate-float-slow" />
          <div className="absolute left-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float" />
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
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition mb-8 group"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:max-w-2xl animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-cyan-400 shadow-lg shadow-purple-500/10 transition-all duration-500 hover:scale-110 hover:rotate-6">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl about-gradient-text">
                  {service.title}
                </h1>
              </div>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed md:text-xl">
                {service.fullDesc}
              </p>
              <Link
                href="/contact"
                className="about-cta-button group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
              >
                Start a Project
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:w-80 shrink-0 animate-fade-in-up delay-200">
              {service.highlights.map((h, i) => (
                <ScrollReveal key={h.label} animation="scale" delay={i * 100}>
                  <div className="about-stat-card rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-1">
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">{h.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{h.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── What We Offer ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              What We Offer
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Capabilities & Expertise
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <ScrollReveal key={i} animation={i % 3 === 0 ? "slide-left" : i % 3 === 2 ? "slide-right" : "fade-up"} delay={i * 80} className="h-full">
                <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-1">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-bold transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Our Process ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[100px] animate-float" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              How We Work
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Our Process
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <ScrollReveal key={i} animation="scale" delay={i * 150} className="h-full">
                <div className="relative h-full group">
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-500/20 to-transparent -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-purple-500/40 text-purple-400 text-lg font-bold mb-5 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{step.step}</h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Technologies ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-cyan-600/6 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Tech Stack
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Technologies We Use
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {service.technologies.map((tech, i) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-purple-500/30 hover:text-cyan-300 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {relatedProjects.length > 0 && (
        <>
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />
          <section className="relative py-24 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/3 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-600/6 blur-[100px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <ScrollReveal animation="fade-up" className="text-center mb-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Our Work
                </p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
                  {service.title} Projects
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                  See how we&apos;ve helped businesses succeed with our {service.title.toLowerCase()} expertise.
                </p>
              </ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((p, i) => (
                  <ScrollReveal key={p.slug} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 100}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3"
                    >
                      <div className="overflow-hidden">
                        <div className={`h-48 ${p.bg} transition-all duration-700 group-hover:scale-110`} />
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                          {p.tag}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal animation="fade-up" delay={300} className="mt-12 text-center">
                <Link
                  href="/projects"
                  className="inline-block rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  View All Projects &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </>
      )}

      {/* ── Other Services ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/3 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-600/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up" className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Explore More
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
              Other Services
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => (
              <ScrollReveal key={s.slug} animation="fade-up" delay={i * 100} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 block h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6">
                    <ServiceIcon slug={s.slug} />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                    {s.desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/12 blur-[140px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-cyan-600/8 blur-[80px] animate-float" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="scale">
            <h2 className="text-3xl font-bold md:text-5xl text-white">
              Ready to Start Your{" "}
              <span className="about-gradient-text">
                {service.title}
              </span>{" "}
              Project?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Let&apos;s discuss your goals and create something exceptional together.
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
