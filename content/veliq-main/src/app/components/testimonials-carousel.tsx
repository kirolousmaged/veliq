"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "VELIQ transformed our online presence. Their software expertise paired with sharp marketing strategy doubled our customer acquisition in just six months.",
    name: "Sarah Mitchell",
    role: "CEO at BrightPath",
    initials: "SM",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    quote:
      "Working with VELIQ felt like having an in-house team. They understood our vision from day one and delivered a platform that exceeded every expectation.",
    name: "Khaled Mansour",
    role: "Founder of NovaTech",
    initials: "KM",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "Our mobile app went from concept to launch in record time. The quality of code and design was outstanding — our users love it.",
    name: "Lina Farouk",
    role: "Product Lead at Meridian",
    initials: "LF",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Their SEO and marketing campaigns brought us from page 5 to the top 3 results. The ROI has been incredible — we've tripled our organic leads.",
    name: "James Carter",
    role: "CMO at Atlas Digital",
    initials: "JC",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    quote:
      "VELIQ doesn't just build software — they build partnerships. Two years in and they still feel as invested in our success as day one.",
    name: "Dina Rashad",
    role: "COO at Skyline Group",
    initials: "DR",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating || index === active) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setActive(index);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    },
    [active, isAnimating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length, "right");
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length, "left");
  }, [active, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/8 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel card */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white hover:border-white/30"
            aria-label="Previous testimonial"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white hover:border-white/30"
            aria-label="Next testimonial"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Quote content */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-12">
            <div
              className={`transition-all duration-300 ease-in-out ${
                isAnimating
                  ? `opacity-0 ${direction === "right" ? "-translate-x-8" : "translate-x-8"}`
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Quote icon */}
              <svg className="mx-auto h-10 w-10 text-indigo-500/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.3 2.6C6.1 5.1 3 9.7 3 15c0 3.3 2.2 6 5 6 2.5 0 4.5-2 4.5-4.5S10.5 12 8 12c-.3 0-.6 0-.9.1C7.7 8.5 9.7 5.8 12.6 4l-1.3-1.4zm10 0C16.1 5.1 13 9.7 13 15c0 3.3 2.2 6 5 6 2.5 0 4.5-2 4.5-4.5S20.5 12 18 12c-.3 0-.6 0-.9.1C17.7 8.5 19.7 5.8 22.6 4l-1.3-1.4z" />
              </svg>

              <blockquote className="mt-6 text-center text-xl font-medium leading-relaxed md:text-2xl text-white">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} shadow-lg`}
                >
                  <span className="text-sm font-bold text-white select-none">
                    {t.initials}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-gradient-to-r from-indigo-400 to-purple-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile swipe arrows */}
        <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white"
            aria-label="Previous testimonial"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-slate-400 transition-all duration-300 hover:bg-white/15 hover:text-white"
            aria-label="Next testimonial"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
