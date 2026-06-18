"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AWARDS = [
  {
    num: "01",
    name: "Design Excellence Award",
    category: "Best Creative Studio",
    year: "2025",
    count: "16x",
  },
  {
    num: "02",
    name: "Innovation Leader Award",
    category: "Outstanding Digital Innovation",
    year: "2025",
    count: "14x",
  },
  {
    num: "03",
    name: "Brand Impact Award",
    category: "Best Brand Evolution",
    year: "2025",
    count: "12x",
  },
  {
    num: "04",
    name: "Digital Pioneer Award",
    category: "Most Innovative Agency",
    year: "2024",
    count: "22x",
  },
  {
    num: "05",
    name: "UX Champion Award",
    category: "Best User Experience",
    year: "2024",
    count: "18x",
  },
];

function AwardIcon() {
  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0"
      style={{
        width: "36px",
        height: "36px",
        backgroundColor: "rgb(30,30,30)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <rect x="0" y="0" width="6" height="6" rx="1.5" fill="rgb(201,201,201)" />
        <rect x="8" y="0" width="6" height="6" rx="1.5" fill="rgb(201,201,201)" />
        <rect x="0" y="8" width="6" height="6" rx="1.5" fill="rgb(201,201,201)" />
        <rect x="8" y="8" width="6" height="6" rx="1.5" fill="rgb(201,201,201)" />
      </svg>
    </div>
  );
}

export default function AwardsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">

        <motion.h2
          className="heading-1 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          Awards.
        </motion.h2>

        {/* Awards table */}
        <div className="flex flex-col">
          {AWARDS.map((award, i) => (
            <motion.div
              key={award.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {/* Divider */}
              {i === 0 && (
                <div className="w-full h-px bg-[rgb(30,30,30)]" />
              )}

              <div className="flex items-center gap-6 py-5 group">
                {/* Number */}
                <span
                  className="text-[rgb(201,201,201)] shrink-0 tabular-nums"
                  style={{ fontSize: "13px", fontWeight: 600, width: "28px" }}
                >
                  {award.num}
                </span>

                {/* Icon */}
                <AwardIcon />

                {/* Name */}
                <span
                  className="text-white flex-1 group-hover:text-[rgb(201,201,201)] transition-colors"
                  style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-0.04em" }}
                >
                  {award.name}
                </span>

                {/* Category */}
                <span
                  className="text-[rgb(201,201,201)] hidden md:block"
                  style={{ fontSize: "14px", fontWeight: 400 }}
                >
                  {award.category}
                </span>

                {/* Badges */}
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className="rounded-full px-3 py-1"
                    style={{
                      backgroundColor: "rgb(255,210,0)",
                      color: "rgb(0,0,0)",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {award.year}
                  </span>
                  <span
                    className="rounded-full px-3 py-1"
                    style={{
                      backgroundColor: "rgb(99,102,241)",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {award.count}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[rgb(30,30,30)]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
