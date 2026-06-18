import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import { getCollection } from "@/lib/db";

interface Project {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  hidden?: boolean;
}

async function getProjects(): Promise<Project[]> {
  const all = await getCollection<Project>("projects");
  return all.filter((p) => !p.hidden);
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Projects",
  description:
    "Explore our portfolio of software, marketing, and branding projects. Real results for real businesses.",
  openGraph: {
    title: "Our Projects — VELIQ",
    description:
      "Explore our portfolio of software, marketing, and branding projects.",
    url: "https://veliq.com/projects",
  },
  twitter: {
    title: "Our Projects — VELIQ",
    description:
      "Explore our portfolio of software, marketing, and branding projects.",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const tags = Array.from(new Set(projects.map((p) => p.tag)));

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px] animate-float" />
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
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              Our Work
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Projects &amp;{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Explore our portfolio of work across software development,
            marketing, analytics, and brand strategy.
          </p>
        </div>
      </section>

      {/* ── Projects by Category ── */}
      {tags.map((tag, tagIndex) => {
        const tagProjects = projects.filter((p) => p.tag === tag);
        return (
          <section key={tag} className="relative py-16 overflow-hidden">
            {tagIndex % 2 === 0 && (
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/6 blur-[100px]" />
              </div>
            )}
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold md:text-3xl text-white mb-10">{tag}</h2>
              </ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {tagProjects.map((p, i) => (
                  <ScrollReveal key={p.slug} animation={i % 2 === 0 ? "fade-up" : "scale"} delay={i * 80}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
                    >
                      <div className="overflow-hidden">
                        {p.image ? (
                          <img src={p.image} alt={p.title} className={`h-48 w-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 ${p.image.includes('.jpg') || p.image.includes('.jpeg') ? 'object-cover' : 'object-contain bg-[#0f0f1a] p-4'}`} />
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800" />
                        )}
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          {p.tag}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-300">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{p.desc}</p>
                        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-purple-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          View Project
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            {/* Divider glow line between categories */}
            {tagIndex < tags.length - 1 && (
              <div className="mx-auto mt-16 max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            )}
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/12 blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl font-bold md:text-5xl text-white">
              Have a{" "}
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Project
              </span>{" "}
              in Mind?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Let&apos;s turn your idea into reality. Get in touch to discuss your
              next project.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in Touch
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
