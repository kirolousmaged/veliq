import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "../../components/scroll-reveal";
import { getCollection } from "@/lib/db";

interface GalleryItem {
  image: string;
  caption: string;
}

interface Result {
  label: string;
  value: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Project {
  slug: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  fullDesc: string;
  client?: string;
  industry?: string;
  timeline?: string;
  url?: string;
  services?: string[];
  technologies?: string[];
  challenge?: string;
  solution?: string;
  results?: Result[];
  features?: string[];
  testimonial?: Testimonial;
  gallery: GalleryItem[];
  hidden?: boolean;
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
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: `${project.title} — VELIQ`,
      description: project.desc,
      url: `https://veliq.com/projects/${slug}`,
    },
    twitter: {
      title: `${project.title} — VELIQ`,
      description: project.desc,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const related = projects
    .filter((p) => p.tag === project.tag && p.slug !== project.slug && !p.hidden)
    .slice(0, 3);

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px] animate-float-slow" />
        </div>
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
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition mb-8 group"
          >
            <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          <div className="animate-fade-in-up">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {project.tag}
            </span>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-6xl about-gradient-text">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl md:text-xl">
              {project.desc}
            </p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about-cta-button group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a14] shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.05] active:scale-[0.98]"
              >
                Visit Live Site
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Project Info Cards ── */}
      {(project.client || project.industry || project.timeline) && (
        <section className="relative py-12 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Client", value: project.client },
                { label: "Industry", value: project.industry },
                { label: "Timeline", value: project.timeline },
                { label: "Category", value: project.tag },
              ].filter(item => item.value).map((item, i) => (
                <ScrollReveal key={item.label} animation="fade-up" delay={i * 100}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Results ── */}
      {project.results && project.results.length > 0 && (
        <section className="relative py-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-blue-600/8 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Impact</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">Key Results</h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.results.map((r, i) => (
                <ScrollReveal key={r.label} animation="scale" delay={i * 100}>
                  <div className="about-stat-card rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-center transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30">
                    <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">{r.value}</p>
                    <p className="mt-2 text-sm text-slate-500">{r.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Challenge & Solution ── */}
      {(project.challenge || project.solution) && (
        <section className="relative py-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[100px] animate-float" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {project.challenge && (
                <ScrollReveal animation="slide-left">
                  <div className="about-mission-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 mb-5">
                        <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-red-400/80">The Challenge</p>
                      <p className="mt-4 text-slate-400 leading-relaxed">{project.challenge}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
              {project.solution && (
                <ScrollReveal animation="slide-right" delay={200}>
                  <div className="about-mission-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10 h-full transition-all duration-700 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 mb-5">
                        <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-green-400/80">Our Solution</p>
                      <p className="mt-4 text-slate-400 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />

      {/* ── Features ── */}
      {project.features && project.features.length > 0 && (
        <section className="relative py-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/6 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">What We Delivered</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">Key Features</h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((feature, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 80} className="h-full">
                  <div className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-purple-500/30 hover:-translate-y-1">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">{feature}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Technologies ── */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal animation="fade-up" className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">Built With</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">Tech Stack</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-400 transition-all duration-300 hover:border-purple-500/30 hover:text-cyan-300 hover:bg-white/[0.08] hover:-translate-y-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Testimonial ── */}
      {project.testimonial && (
        <>
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />
          <section className="relative py-20 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/8 blur-[120px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
              <ScrollReveal animation="scale">
                <svg className="mx-auto h-10 w-10 text-purple-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed italic">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-base font-semibold text-white">{project.testimonial.author}</p>
                  <p className="text-sm text-slate-500">{project.testimonial.role}</p>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent about-line-glow" />

      {/* ── Gallery ── */}
      {project.gallery && project.gallery.length > 0 && project.gallery.some(g => g.image) && (
        <section className="relative py-20 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-bold md:text-3xl text-white mb-10">Gallery</h2>
            </ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.gallery.filter(g => g.image).map((item, i) => (
                <ScrollReveal key={i} animation={i % 2 === 0 ? "slide-left" : "slide-right"} delay={i * 100}>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-1">
                    <img src={item.image} alt={item.caption} className="h-56 md:h-72 w-full object-cover" />
                    <div className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-400">{item.caption}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Projects ── */}
      {related.length > 0 && (
        <>
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />
          <section className="relative py-20 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold md:text-3xl text-white mb-10">Related Projects</h2>
              </ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <ScrollReveal key={p.slug} animation="fade-up" delay={i * 100}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-3"
                    >
                      <div className="overflow-hidden">
                        {p.image ? (
                          <img src={p.image} alt={p.title} className={`h-48 w-full transition-all duration-700 group-hover:scale-110 ${p.image.includes('.jpg') || p.image.includes('.jpeg') ? 'object-cover' : 'object-contain bg-[#0f0f1a] p-4'}`} />
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800" />
                        )}
                      </div>
                      <div className="p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">{p.tag}</span>
                        <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{p.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">{p.desc}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── CTA ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent about-line-glow" />
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-purple-600/12 blur-[140px] animate-pulse-glow" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="scale">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-6">Interested?</p>
            <h2 className="text-3xl font-bold md:text-5xl text-white">
              Want Something{" "}
              <span className="about-gradient-text">Like This</span>?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Let&apos;s discuss your project and build something exceptional together.
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
