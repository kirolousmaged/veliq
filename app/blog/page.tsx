import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Blog — Mattter®",
  description: "Insights on design, development, and digital strategy.",
};

const POSTS = [
  { date: "February 6, 2026", title: "Using Whitespace as Luxury", slug: "using-whitespace-as-luxury", category: "Design" },
  { date: "February 3, 2026", title: "Core Web Vitals", slug: "core-web-vitals", category: "SEO" },
  { date: "February 1, 2026", title: "The Framer Advantage", slug: "the-framer-advantage", category: "Development" },
  { date: "January 28, 2026", title: 'The Secret to "Delight"', slug: "the-secret-to-delight", category: "UX" },
];

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen pt-16">
      <section className="section-padding max-w-[1200px] mx-auto flex flex-col gap-16">
        <h1 className="heading-1 text-white">Blog.</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3">
              <div className="aspect-[4/3] bg-[rgb(20,20,20)] rounded-[15px] relative overflow-hidden">
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 para-12 text-[rgb(201,201,201)] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="para-12 text-[rgb(201,201,201)]">{post.date}</span>
                <h2 className="para-16 text-white group-hover:text-[rgb(201,201,201)] transition-colors">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
