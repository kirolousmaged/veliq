import { notFound } from "next/navigation";
import Footer from "@/components/sections/Footer";

const POSTS: Record<string, { date: string; title: string; category: string; content: string }> = {
  "using-whitespace-as-luxury": {
    date: "February 6, 2026",
    title: "Using Whitespace as Luxury",
    category: "Design",
    content: "Whitespace is not empty space—it is breathing room for ideas. The most sophisticated brands in the world use restraint as a signal of confidence. When everything competes for attention, silence becomes the loudest statement.",
  },
  "core-web-vitals": {
    date: "February 3, 2026",
    title: "Core Web Vitals",
    category: "SEO",
    content: "Google's Core Web Vitals are now the most important technical SEO factors. LCP, FID, and CLS directly impact your ranking position. Here's how to audit and improve each metric.",
  },
  "the-framer-advantage": {
    date: "February 1, 2026",
    title: "The Framer Advantage",
    category: "Development",
    content: "Framer has fundamentally changed how we build websites. The combination of design control and production-grade React output means faster delivery without compromise.",
  },
  "the-secret-to-delight": {
    date: "January 28, 2026",
    title: 'The Secret to "Delight"',
    category: "UX",
    content: "Delight in product design isn't about adding features. It's about removing friction so completely that the experience feels magical. The secret is obsessive attention to micro-interactions.",
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <main className="bg-black min-h-screen pt-16">
      <article className="section-padding max-w-[760px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="para-14 text-[rgb(201,201,201)] uppercase tracking-widest">
            {post.category} — {post.date}
          </span>
          <h1
            className="text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500, lineHeight: "110%", letterSpacing: "-0.04em" }}
          >
            {post.title}
          </h1>
        </div>
        <div className="w-full aspect-[16/9] bg-[rgb(20,20,20)] rounded-[15px]" />
        <p
          className="text-[rgb(201,201,201)] leading-[140%]"
          style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.04em" }}
        >
          {post.content}
        </p>
      </article>
      <Footer />
    </main>
  );
}
