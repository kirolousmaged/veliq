"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const INDIGO = "rgb(99,102,241)";
const EQ_FONT = "clamp(2.2rem, 4.8vw, 68px)";
const EQ_WEIGHT = 600;
const EQ_TRACKING = "-0.05em";

const CLIENT_LOGOS = [
  { name: "Coach Roshdy",  src: "/clients/coach-mohamed-roshdy.svg" },
  { name: "Initio",        src: "/clients/initio.svg" },
  { name: "Fanous Clinic", src: "/clients/fanous-clinic.png" },
  { name: "Yamin Estate",  src: "/clients/yamin-estate.png" },
  { name: "RedBone Gym",   src: "/clients/redbone-gym.png" },
  { name: "Saudi Hayat",   src: "/clients/saudi-hayat.png" },
];

const EQ_WORDS = [
  { text: "Speed",           op: false, delay: 0     },
  { text: "×",               op: true,  delay: 0.15  },
  { text: "Accuracy",        op: false, delay: 0.27  },
  { text: "×",               op: true,  delay: 0.45  },
  { text: "Professionalism", op: false, delay: 0.57  },
  { text: "=",               op: true,  delay: 0.88  },
  { text: "Aligned",         op: false, delay: 1.0   },
  { text: "Growth.",         op: false, delay: 1.15  },
] as const;

const SERVICES = ["Web Design", "Mobile", "SEO", "Branding", "Marketing", "Data"];
const COUNTRIES = ["Egypt", "Saudi Arabia", "UAE", "United States"];

/** Operator symbols: spring pop-in with slight spin */
function Operator({ text, delay, inView }: { text: string; delay: number; inView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.15, rotate: -45 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ type: "spring", stiffness: 320, damping: 14, delay }}
      style={{
        display: "inline-block",
        fontSize: EQ_FONT,
        fontWeight: EQ_WEIGHT,
        letterSpacing: EQ_TRACKING,
        lineHeight: 1.1,
        color: "rgba(255,255,255,0.3)",
      }}
    >
      {text}
    </motion.span>
  );
}

/** Regular words: char-by-char clip reveal + optional radial glow backdrop */
function Word({ text, wordDelay, inView, color = "white", glowColor }: {
  text: string; wordDelay: number; inView: boolean; color?: string; glowColor?: string;
}) {
  return (
    <span style={{ position: "relative", display: "inline-flex" }}>
      {/* Blurred radial glow behind the text */}
      {glowColor && (
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: wordDelay + 0.3 }}
          style={{
            position: "absolute",
            inset: "-40px -20px",
            background: glowColor,
            filter: "blur(50px)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      {/* Characters — clip reveal */}
      <span style={{ display: "inline-flex", overflow: "hidden", lineHeight: 1.15, position: "relative", zIndex: 1 }}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.6, delay: wordDelay + i * 0.022, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "inline-block",
              fontSize: EQ_FONT,
              fontWeight: EQ_WEIGHT,
              letterSpacing: EQ_TRACKING,
              lineHeight: 1.15,
              color,
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* ── Equation — 3 lines ───────────────────────────────────── */}
        <div className="flex flex-col items-center text-center" style={{ gap: "clamp(2px,0.4vw,6px)" }}>

          {/* Line 1: Speed × Accuracy × Professionalism — one per line on mobile */}
          <div className="flex flex-col items-center md:flex-row md:items-baseline justify-center md:flex-wrap" style={{ gap: "clamp(6px,0.9vw,14px)" }}>
            <Word text="Speed"
              color="rgb(99,102,241)"
              glowColor="rgba(99,102,241,0.4)"
              wordDelay={0} inView={inView} />
            <Operator text="×" delay={0.15} inView={inView} />
            <Word text="Accuracy"
              color="rgb(168,85,247)"
              glowColor="rgba(168,85,247,0.4)"
              wordDelay={0.27} inView={inView} />
            <Operator text="×" delay={0.45} inView={inView} />
            <Word text="Professionalism"
              color="rgb(236,72,153)"
              glowColor="rgba(236,72,153,0.4)"
              wordDelay={0.57} inView={inView} />
          </div>

          {/* Line 2: = */}
          <div>
            <Operator text="=" delay={0.88} inView={inView} />
          </div>

          {/* Line 3: Aligned Growth. */}
          <div className="flex items-baseline justify-center" style={{ gap: "clamp(6px,0.9vw,14px)" }}>
            <Word text="Aligned"
              color="rgb(45,212,191)"
              glowColor="rgba(45,212,191,0.4)"
              wordDelay={1.0} inView={inView} />
            <Word text="Growth."
              color="rgb(45,212,191)"
              glowColor="rgba(45,212,191,0.4)"
              wordDelay={1.15} inView={inView} />
          </div>

        </div>

        {/* ── Bento grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

          {/* Manifesto — 7 cols */}
          <motion.div
            className="lg:col-span-7 rounded-[24px] flex flex-col justify-between gap-10"
            style={{
              backgroundColor: "rgb(14,14,14)",
              border: "1px solid rgb(28,28,28)",
              padding: "clamp(24px,3vw,44px)",
              minHeight: "240px",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
              Who We Are
            </span>

            <p style={{ fontSize: "clamp(0.95rem, 1.35vw, 17px)", fontWeight: 400, color: "rgb(110,110,110)", lineHeight: 1.85 }}>
              Every client gets a dedicated team that owns their digital presence,
              thinks with them, and moves with the precision their business deserves.
              We are not just an agency — we are your growth architecture firm.
            </p>

            <div className="flex flex-col gap-3">
              <div style={{ height: "1px", backgroundColor: "rgb(24,24,24)" }} />
              <div className="flex items-center gap-4 flex-wrap">
                <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)", letterSpacing: "0.06em" }}>Est. 2023</span>
                <span style={{ width: 24, height: 1, backgroundColor: "rgb(40,40,40)", display: "inline-block" }} />
                {SERVICES.map((s) => (
                  <span key={s} style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.28)", letterSpacing: "-0.01em" }}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — 5 cols, 2 rows */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-3">

            <motion.div
              className="rounded-[24px] flex flex-col justify-between"
              style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)", padding: "clamp(20px,2.5vw,36px)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Happy Clients</span>
              <div className="flex items-end gap-4">
                <span style={{ fontSize: "clamp(3rem,5vw,64px)", fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, color: "white" }}>30+</span>
                <div className="flex gap-[3px] mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={INDIGO}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[24px] flex flex-col justify-between"
              style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(28,28,28)", padding: "clamp(20px,2.5vw,36px)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.48, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Countries Served</span>
              <div className="flex items-end justify-between">
                <span style={{ fontSize: "clamp(3rem,5vw,64px)", fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, color: "white" }}>4</span>
                <div className="flex flex-col items-end gap-[5px]">
                  {COUNTRIES.map((c) => (
                    <span key={c} style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.32)" }}>{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Logos — 2 columns on mobile, single row on desktop ───────── */}
        <div className="w-full grid grid-cols-2 gap-2 md:flex md:items-center">
          {CLIENT_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              className="md:flex-1 flex items-center justify-center rounded-[18px] h-[104px] md:h-[76px]"
              style={{ backgroundColor: "rgb(14,14,14)", border: "1px solid rgb(22,22,22)", padding: "16px" }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 1.55 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src={logo.src} alt={logo.name} width={120} height={44} className="object-contain w-auto max-h-[44px] md:max-h-[28px]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
