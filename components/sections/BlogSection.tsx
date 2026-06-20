"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blog";

const HUE_MAP: Record<string, string> = {
  "Web Development":   "230",
  "SEO":               "290",
  "Mobile Development":"25",
  "Data & Analytics":  "180",
  "Brand Strategy":    "40",
  "Digital Marketing": "150",
};

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  const posts = BLOG_POSTS.slice(0, 4);

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-20">

        <div className="flex items-end justify-between">
          <motion.h2
            className="heading-1 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Latest Blogs.
          </motion.h2>
          {/* Desktop: button beside the title */}
          <div className="hidden md:block">
            <Button label="All Blogs" href="/blog" variant="outline" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[10px]">
          {posts.map((post, i) => {
            const hue = HUE_MAP[post.category] ?? "220";
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-[10px]">
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
                  </div>

                  <div className="flex flex-col gap-[4px]">
                    <span className="para-12 text-[rgb(201,201,201)]">{post.date}</span>
                    <h3
                      className="text-white group-hover:text-[rgb(201,201,201)] transition-colors"
                      style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.04px", lineHeight: "1.3em" }}
                    >
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: button at the end */}
        <div className="md:hidden flex justify-center">
          <Button label="All Blogs" href="/blog" variant="outline" />
        </div>

      </div>
    </section>
  );
}
