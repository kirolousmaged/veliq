"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
function IconWebDev() {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M20 14L8 28L20 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M36 14L48 28L36 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 10L23 46" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconSEO() {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <circle cx="24" cy="24" r="13" stroke="white" strokeWidth="3.5"/>
      <path d="M34 34L47 47" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M19 22C20 18 22 17 25 17" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="44" height="44" viewBox="0 0 56 56" fill="none">
      <path d="M28 6L12 13v16c0 11 7.5 21.2 16 23.5C44.5 50.2 52 40 52 29V13L28 6z" stroke="white" strokeWidth="3.5" strokeLinejoin="round"/>
      <path d="M20 29l6 6 12-12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const SERVICES = [
  { id: "01", title: "Web Dev",     slug: "website-development", Icon: IconWebDev,   summary: "Fast, beautiful websites and web apps built to convert and scale." },
  { id: "02", title: "Web Support", slug: "website-support",     Icon: IconSupport,  summary: "Ongoing maintenance, updates, and security so your site never sleeps." },
  { id: "03", title: "SEO",         slug: "seo",                 Icon: IconSEO,      summary: "Rank higher and drive qualified traffic with technical SEO & content." },
] as const;

/* ─── Fan geometry ─────────────────────────────────────────────────────────
 * Desktop: cards fan out horizontally (left ↔ right).
 * Mobile:  same scroll-driven fan, but vertically (top ↕ bottom).
 */
const D_X   = [-320, 0, 320];   // desktop horizontal spread
const D_Y   = [44,   0,  44];
const D_ROT = [-18,  0,  18];

const STACK_R = [-4, 0, 4];     // initial stacked rotation

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Track viewport so mobile card size & spread adapt to fit without overlap.
  const [vp, setVp] = useState({ w: 1280, h: 800 });
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = vp.w <= 767;

  let CW: number, CH: number, FAN_X: number[], FAN_Y: number[], FAN_ROT: number[];
  if (isMobile) {
    // Size 3 cards so they stack vertically with a guaranteed gap (never overlap).
    const GAP = 16;                              // min vertical gap between cards
    const usableH = vp.h * 0.82;
    CH = Math.max(110, Math.min(190, (usableH - 2 * GAP) / 3));
    CW = Math.min(CH * 0.82, vp.w * 0.74);
    const S = CH + GAP;                          // center-to-center ≥ CH ⇒ no overlap
    FAN_Y = [-1, 0, 1].map((m) => Math.round(m * S));
    const sway = Math.max(0, Math.min(14, (vp.w * 0.8 - CW) / 2));
    FAN_X = [-1, 0, 1].map((m) => Math.round(m * sway));
    FAN_ROT = [-4, 0, 4];
  } else {
    CW = 150; CH = 200;
    FAN_X = D_X; FAN_Y = D_Y; FAN_ROT = D_ROT;
  }

  // Two-tap interaction: 1st tap flips the card, 2nd tap opens the service page.
  const [flippedId, setFlippedId] = useState<string | null>(null);
  const handleCardClick = (id: string, slug: string) => {
    if (flippedId === id) router.push(`/services/${slug}`);
    else setFlippedId(id);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  const x0 = useTransform(progress, [0.05, 0.42], [0, FAN_X[0]]);
  const x1 = useTransform(progress, [0.22, 0.58], [0, FAN_X[1]]);
  const x2 = useTransform(progress, [0.38, 0.75], [0, FAN_X[2]]);

  const y0 = useTransform(progress, [0.05, 0.42], [0, FAN_Y[0]]);
  const y1 = useTransform(progress, [0.22, 0.58], [0, FAN_Y[1]]);
  const y2 = useTransform(progress, [0.38, 0.75], [0, FAN_Y[2]]);

  const r0 = useTransform(progress, [0.05, 0.42], [STACK_R[0], FAN_ROT[0]]);
  const r1 = useTransform(progress, [0.22, 0.58], [STACK_R[1], FAN_ROT[1]]);
  const r2 = useTransform(progress, [0.38, 0.75], [STACK_R[2], FAN_ROT[2]]);

  const textOpacity = useTransform(progress, [0, 0.3, 0.65], [0.5, 0.7, 1]);

  const slots = [
    { x: x0, y: y0, r: r0 },
    { x: x1, y: y1, r: r1 },
    { x: x2, y: y2, r: r2 },
  ];

  return (
    /* Reduced scroll travel (260 vh) so the section doesn't feel endless */
    <section ref={sectionRef} className="relative w-full" style={{ height: "260vh" }}>

      {/* Sticky viewport — overflow visible so cards aren't clipped */}
      <div className="sticky top-0 h-screen w-full" style={{ overflow: "visible" }}>

        {/* Indigo background — slightly inset so it looks contained, not full-bleed */}
        <div
          className="absolute overflow-hidden flex items-center justify-center"
          style={{
            inset: "8px",
            backgroundColor: "rgb(99,102,241)",
            borderRadius: "26px",
          }}
        >
          <motion.h2
            className="text-white text-center select-none pointer-events-none"
            style={{
              opacity: textOpacity,
              fontSize: "clamp(3.5rem, 10vw, 130px)",
              fontWeight: 600,
              letterSpacing: "-0.06em",
              lineHeight: 1.1,
            }}
          >
            Services.
          </motion.h2>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/40" style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Scroll to explore
            </span>
          </motion.div>
        </div>

        {/* Card layer — overflows freely above the background */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 10, overflow: "visible" }}
        >
          {/* Single anchor point; cards fan out via x/y/rotate */}
          <div className="relative" style={{ width: `${CW}px`, height: `${CH}px` }}>

            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.id}
                className="absolute"
                style={{
                  width: `${CW}px`,
                  height: `${CH}px`,
                  transformOrigin: "center bottom",
                  zIndex: 10 - i,
                  x: slots[i].x,
                  y: slots[i].y,
                  rotate: slots[i].r,
                }}
              >
                {/* Perspective + flip trigger */}
                <div
                  className={`service-card w-full h-full cursor-pointer${flippedId === svc.id ? " is-flipped" : ""}`}
                  style={{ perspective: "800px" }}
                  onClick={() => handleCardClick(svc.id, svc.slug)}
                >
                  <div className="service-card-inner">

                    {/* ── Front ── */}
                    <div
                      className="service-card-face flex flex-col items-center justify-center"
                      style={{ backgroundColor: "rgb(20,20,20)" }}
                    >
                      <span
                        className="absolute text-white"
                        style={{ top: 12, right: 14, fontSize: 13, fontWeight: 500, opacity: 0.8 }}
                      >
                        {svc.id}
                      </span>
                      <svc.Icon />
                      <span
                        className="absolute text-white"
                        style={{ bottom: 16, fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}
                      >
                        {svc.title}
                      </span>
                    </div>

                    {/* ── Back ── */}
                    <div
                      className="service-card-face service-card-back flex flex-col justify-between"
                      style={{ backgroundColor: "rgb(20,20,20)", padding: "16px 14px" }}
                    >
                      <div className="flex items-center justify-between">
                        <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 500 }}>
                          {svc.id}
                        </span>
                        <span style={{ backgroundColor: "rgb(99,102,241)", width: 7, height: 7, borderRadius: "50%", display: "block" }} />
                      </div>

                      <div className="flex flex-col gap-2">
                        <span style={{ color: "white", fontSize: 17, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
                          {svc.title}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.68)", fontSize: 12, lineHeight: 1.6 }}>
                          {svc.summary}
                        </span>
                      </div>

                      <span style={{ color: "rgb(99,102,241)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em" }}>
                        EXPLORE →
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
