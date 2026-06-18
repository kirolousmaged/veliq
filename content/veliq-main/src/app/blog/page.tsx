import Link from "next/link";
import ScrollReveal from "../components/scroll-reveal";
import { getCollection } from "@/lib/db";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  bg: string;
}

async function getBlogs(): Promise<Blog[]> {
  return getCollection<Blog>("blogs");
}

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Insights, tips, and strategies on web development, marketing, SEO, and digital growth from the VELIQ team.",
  openGraph: {
    title: "Blog — VELIQ",
    description:
      "Insights, tips, and strategies on web development, marketing, SEO, and digital growth.",
    url: "https://veliq.com/blog",
  },
  twitter: {
    title: "Blog — VELIQ",
    description:
      "Insights, tips, and strategies on web development, marketing, SEO, and digital growth.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const [featured, ...rest] = blogs;

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-600/12 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px] animate-float-slow" />
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
            <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Insights &amp;{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Ideas
              </span>
            </h1>
          </div>
          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            Practical advice on building better products, growing your brand,
            and winning in the digital landscape.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <>
          <section className="relative pb-16 overflow-hidden">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <ScrollReveal animation="fade-up">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid gap-8 lg:grid-cols-2 items-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className={`h-64 lg:h-full min-h-[320px] ${featured.bg} transition-all duration-700 group-hover:brightness-110`} />
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                        {featured.category}
                      </span>
                      <span className="text-slate-600">{featured.readTime}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold md:text-3xl text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-slate-400 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                      Read Article
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>

          {/* ── Divider glow line ── */}
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        </>
      )}

      {/* ── All Posts ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-600/6 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl font-bold md:text-3xl text-white mb-12">All Articles</h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog, i) => (
              <ScrollReveal key={blog.slug} animation="slide-left" delay={i * 100}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <div className={`h-48 ${blog.bg} transition-all duration-700 group-hover:scale-110 group-hover:brightness-110`} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                      <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                        {blog.category}
                      </span>
                      <span className="text-slate-600">{blog.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                      {blog.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-slate-600">
                      {formatDate(blog.date)}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
