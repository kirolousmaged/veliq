"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Real template: each card shows a big decorative display-font glyph + the
// service name in the /Paragraph/26 style. We approximate the exotic display
// faces (Zen Tokyo Zoo, Rechteck, ARK-ES) with a heavy weight + tight tracking.
const SERVICES = [
  { id: "01", glyph: "W",  title: "Web Design" },
  { id: "02", glyph: "D",  title: "Development" },
  { id: "03", glyph: "UI", title: "UI/UX Design" },
  { id: "04", glyph: "S",  title: "SEO" },
] as const;

// Fan-out target geometry — a hand of cards. Outer cards rotate more, sit lower.
const FAN_X   = [-450, -150, 150, 450] as const; // 300px between centres → no overlap
const FAN_Y   = [56, -10, -10, 56]     as const; // arc — outer cards lower
const FAN_ROT = [-15, -5, 5, 15]       as const; // degrees (2D, reliable)
const STACK_ROT = [-3, -1, 1, 3]       as const; // tight near-flat start pile

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth the raw (linear, jerky) scroll value into Framer-grade motion.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Cards unfurl left-to-right over the first ~65% of the scroll, then hold.
  const x0 = useTransform(progress, [0.05, 0.45], [0, FAN_X[0]]);
  const x1 = useTransform(progress, [0.12, 0.52], [0, FAN_X[1]]);
  const x2 = useTransform(progress, [0.19, 0.59], [0, FAN_X[2]]);
  const x3 = useTransform(progress, [0.26, 0.66], [0, FAN_X[3]]);

  const y0 = useTransform(progress, [0.05, 0.45], [0, FAN_Y[0]]);
  const y1 = useTransform(progress, [0.12, 0.52], [0, FAN_Y[1]]);
  const y2 = useTransform(progress, [0.19, 0.59], [0, FAN_Y[2]]);
  const y3 = useTransform(progress, [0.26, 0.66], [0, FAN_Y[3]]);

  const r0 = useTransform(progress, [0.05, 0.45], [STACK_ROT[0], FAN_ROT[0]]);
  const r1 = useTransform(progress, [0.12, 0.52], [STACK_ROT[1], FAN_ROT[1]]);
  const r2 = useTransform(progress, [0.19, 0.59], [STACK_ROT[2], FAN_ROT[2]]);
  const r3 = useTransform(progress, [0.26, 0.66], [STACK_ROT[3], FAN_ROT[3]]);

  // "Services." sits BEHIND the cards and fades up as they spread.
  const textOpacity = useTransform(progress, [0, 0.25, 0.6], [0.5, 0.7, 1]);

  const cards = [
    { x: x0, y: y0, r: r0 },
    { x: x1, y: y1, r: r1 },
    { x: x2, y: y2, r: r2 },
    { x: x3, y: y3, r: r3 },
  ];

  return (
    <section ref={sectionRef} className="relative w-full" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="w-full h-full relative flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "rgb(15,128,84)", borderRadius: "30px" }}
        >
          {/* "Services." — big heading BEHIND the cards (zIndex 1) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{ zIndex: 1, opacity: textOpacity }}
          >
            <h2
              className="text-white w-full text-center"
              style={{
                fontSize: "clamp(4rem, 11vw, 144px)",
                fontWeight: 600,
                letterSpacing: "-0.06em",
                lineHeight: 1.1,
                maxWidth: "800px",
              }}
            >
              Services.
            </h2>
          </motion.div>

          {/* Card deck — cards stacked dead-centre, fan out on scroll (zIndex 3) */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: "259px", height: "329px", zIndex: 3 }}
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.id}
                className="absolute rounded-[15px] flex flex-col items-center justify-center shadow-2xl"
                style={{
                  width: "259px",
                  height: "329px",
                  backgroundColor: "rgb(20,20,20)",
                  transformOrigin: "center bottom",
                  zIndex: 10 - i,
                  x: cards[i].x,
                  y: cards[i].y,
                  rotate: cards[i].r,
                }}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 320, damping: 20 } }}
              >
                {/* Number — top right */}
                <span
                  className="absolute text-white"
                  style={{ top: "14px", right: "16px", fontSize: "18px", fontWeight: 500, opacity: 0.9 }}
                >
                  {service.id}
                </span>

                {/* Big decorative glyph */}
                <span
                  className="text-white select-none"
                  style={{ fontSize: "120px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" }}
                  aria-hidden
                >
                  {service.glyph}
                </span>

                {/* Service name — /Paragraph/26 (26px, Inter-Bold, -0.02em) */}
                <span
                  className="absolute text-white"
                  style={{ bottom: "22px", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
            style={{ zIndex: 4 }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="text-white/40"
              style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
