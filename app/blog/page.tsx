import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata = {
  title: "Blog — VELIQ",
  description: "Insights on web development, SEO, mobile apps, data analytics, brand strategy, and digital marketing.",
};

const HUE_MAP: Record<string, string> = {
  "Web Development":   "230",
  "SEO":               "290",
  "Mobile Development":"25",
  "Data & Analytics":  "180",
  "Brand Strategy":    "40",
  "Digital Marketing": "150",
};

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[1200px] mx-auto flex flex-col gap-16">
        <h1 className="heading-1 text-white">Blog.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px] gap-y-10">
          {BLOG_POSTS.map((post) => {
            const hue = HUE_MAP[post.category] ?? "220";
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
                <div
                  className="w-full rounded-[15px] overflow-hidden relative"
                  style={{ aspectRatio: "1.6", background: `linear-gradient(135deg, hsl(${hue}, 20%, 10%) 0%, hsl(${hue}, 12%, 6%) 100%)` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at 50% 100%, hsl(${hue}, 35%, 16%) 0%, transparent 70%)` }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[rgb(201,201,201)] uppercase"
                    style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", backgroundColor: "rgba(0,0,0,0.5)" }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="absolute bottom-3 right-3 text-white/50"
                    style={{ fontSize: "11px", fontWeight: 500 }}
                  >
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="para-12 text-[rgb(201,201,201)]">{post.date}</span>
                  <h2
                    className="text-white group-hover:text-[rgb(201,201,201)] transition-colors"
                    style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: "1.3em" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[rgb(124,124,124)]" style={{ fontSize: "13px", lineHeight: 1.5 }}>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
