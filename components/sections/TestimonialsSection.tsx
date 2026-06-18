"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "VELIQ transformed our online presence. Their software expertise paired with sharp marketing strategy doubled our customer acquisition in just six months.",
    name: "Sarah Mitchell",
    role: "CEO at BrightPath",
    initials: "SM",
    accent: "rgb(99,102,241)",
  },
  {
    quote: "Working with VELIQ felt like having an in-house team. They understood our vision from day one and delivered a platform that exceeded every expectation.",
    name: "Khaled Mansour",
    role: "Founder of NovaTech",
    initials: "KM",
    accent: "rgb(56,189,248)",
  },
  {
    quote: "Our mobile app went from concept to launch in record time. The quality of code and design was outstanding — our users love it.",
    name: "Lina Farouk",
    role: "Product Lead at Meridian",
    initials: "LF",
    accent: "rgb(52,211,153)",
  },
  {
    quote: "Their SEO and marketing campaigns brought us from page 5 to the top 3 results. The ROI has been incredible — we've tripled our organic leads.",
    name: "James Carter",
    role: "CMO at Atlas Digital",
    initials: "JC",
    accent: "rgb(251,146,60)",
  },
  {
    quote: "VELIQ doesn't just build software — they build partnerships. Two years in and they still feel as invested in our success as day one.",
    name: "Dina Rashad",
    role: "COO at Skyline Group",
    initials: "DR",
    accent: "rgb(244,114,182)",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  const go = useCallback((index: number, direction: 1 | -1) => {
    setDir(direction);
    setActive(index);
  }, []);

  const next = useCallback(() => {
    go((active + 1) % TESTIMONIALS.length, 1);
  }, [active, go]);

  const prev = useCallback(() => {
    go((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1);
  }, [active, go]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = TESTIMONIALS[active];

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">

        <motion.div
          className="flex items-end justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <h2 className="heading-1 text-white">What clients say.</h2>
          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              style={{ width: 44, height: 44, border: "1px solid rgb(40,40,40)" }}
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 2.5L4 7l5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              style={{ width: 44, height: 44, border: "1px solid rgb(40,40,40)" }}
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 2.5L10 7l-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative overflow-hidden"
          style={{ borderRadius: "24px", backgroundColor: "rgb(12,12,12)", border: "1px solid rgb(24,24,24)", minHeight: "280px" }}
        >
          {/* Accent glow */}
          <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${t.accent} 0%, transparent 60%)`,
              transition: "background 0.5s ease",
            }}
          />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="flex flex-col md:flex-row gap-10 p-10 md:p-14 items-start"
            >
              {/* Quote mark */}
              <span
                className="select-none shrink-0 leading-none"
                style={{ fontSize: "6rem", fontWeight: 900, color: t.accent, opacity: 0.25, lineHeight: 0.8, marginTop: "-4px" }}
                aria-hidden
              >
                &ldquo;
              </span>

              <div className="flex flex-col gap-8 flex-1">
                <blockquote
                  className="text-white"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontWeight: 500, lineHeight: 1.6, letterSpacing: "-0.02em", maxWidth: "60ch" }}
                >
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center rounded-full text-white shrink-0"
                    style={{ width: 44, height: 44, backgroundColor: t.accent, fontSize: "14px", fontWeight: 700 }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white" style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                      {t.name}
                    </span>
                    <span className="text-[rgb(124,124,124)]" style={{ fontSize: "13px", fontWeight: 400 }}>
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Dots */}
        <div className="flex items-center gap-2 justify-center">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                backgroundColor: i === active ? "rgb(99,102,241)" : "rgb(40,40,40)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
