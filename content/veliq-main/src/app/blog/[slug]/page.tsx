import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "../../components/scroll-reveal";
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
  content: string[];
}

async function getBlogs(): Promise<Blog[]> {
  return getCollection<Blog>("blogs");
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Post Not Found" };
  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: `${blog.title} — VELIQ Blog`,
      description: blog.excerpt,
      url: `https://veliq.com/blog/${slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
    },
    twitter: {
      title: `${blog.title} — VELIQ Blog`,
      description: blog.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) notFound();

  const related = blogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  return (
    <div className="bg-[#0a0a14]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-600/12 blur-[120px] animate-pulse-glow" />
          <div className="absolute right-1/4 top-1/3 h-[250px] w-[250px] rounded-full bg-indigo-600/10 blur-[100px] animate-float-slow" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-white transition mb-8"
          >
            &larr; All Articles
          </Link>
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
              <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                {blog.category}
              </span>
              <span className="text-slate-600">{blog.readTime}</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl leading-tight text-white">
              {blog.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <span>{blog.author}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>{formatDate(blog.date)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cover ── */}
      <div className="mx-auto max-w-5xl px-6 -mt-4 mb-16 animate-fade-in-up delay-200">
        <div className={`h-64 md:h-96 rounded-2xl ${blog.bg} border border-white/10`} />
      </div>

      {/* ── Content ── */}
      <article className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          {blog.content.map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mt-12 mb-4 text-2xl font-bold text-white"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p
                key={i}
                className="mt-4 text-lg text-slate-400 leading-relaxed"
              >
                {block}
              </p>
            );
          })}
        </div>
      </article>

      {/* ── Divider glow line ── */}
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* ── Share + CTA ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Enjoyed this article?
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl text-white">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="mt-3 text-slate-400">
              If this resonated with you, imagine what we could build together.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0a0a14] shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in Touch
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <>
          <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
          <section className="relative py-24 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/3 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-600/6 blur-[120px]" />
            </div>
            <div className="relative z-10 mx-auto max-w-7xl px-6">
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold md:text-3xl text-white mb-12">
                  More Articles
                </h2>
              </ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((b, i) => (
                  <ScrollReveal key={b.slug} animation="slide-left" delay={i * 100}>
                    <Link
                      href={`/blog/${b.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                    >
                      <div className="overflow-hidden">
                        <div className={`h-48 ${b.bg} transition-all duration-700 group-hover:scale-110 group-hover:brightness-110`} />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                          <span className="rounded-full bg-cyan-500/10 text-cyan-400 px-3 py-1 border border-cyan-500/20">
                            {b.category}
                          </span>
                          <span className="text-slate-600">{b.readTime}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500">{b.excerpt}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
