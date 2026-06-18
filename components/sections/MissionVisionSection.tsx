"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const INDIGO = "rgb(99,102,241)";

function MissionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.84 2.58m0 0a14.926 14.926 0 01-5.96-5.96M9.63 8.41A6 6 0 012.25 14.2" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

interface CardProps {
  numeral: string;
  label: string;
  Icon: () => React.ReactElement;
  title: string;
  body: string;
  tags: string[];
  delay: number;
  accentColor: string;
}

function Card({ numeral, label, Icon, title, body, tags, delay, accentColor }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-[28px] overflow-hidden flex flex-col justify-between gap-8"
      style={{
        backgroundColor: "rgb(10,10,10)",
        border: "1px solid rgb(26,26,26)",
        padding: "clamp(28px, 3.5vw, 48px)",
        /* subtle top-glow matching accent */
        background: `linear-gradient(160deg, rgba(99,102,241,0.055) 0%, transparent 35%), rgb(10,10,10)`,
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Decorative large numeral */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "-12px",
          right: "24px",
          fontSize: "clamp(120px, 14vw, 200px)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.06em",
          color: "rgba(255,255,255,0.025)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {numeral}
      </span>

      <div className="relative flex flex-col gap-6">
        {/* Icon + label row */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-[12px] shrink-0"
            style={{
              width: 40, height: 40,
              backgroundColor: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: accentColor,
            }}
          >
            <Icon />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accentColor }}>
            {label}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgb(26,26,26)" }} />

        {/* Title */}
        <h3
          className="text-white"
          style={{ fontSize: "clamp(1.1rem, 1.8vw, 24px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.2 }}
        >
          {title}
        </h3>

        {/* Body */}
        <p style={{ fontSize: "clamp(0.875rem, 1.2vw, 15px)", lineHeight: 1.8, color: "rgb(100,100,100)" }}>
          {body}
        </p>
      </div>

      {/* Tags */}
      <div className="relative flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full"
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "5px 14px",
              backgroundColor: "rgb(18,18,18)",
              border: "1px solid rgb(34,34,34)",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.02em",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function MissionVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
            What Drives Us
          </span>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 48px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1.1 }}
          >
            Mission &amp; Vision.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Card
            numeral="01"
            label="Our Mission"
            Icon={MissionIcon}
            accentColor={INDIGO}
            title="Engineering Seamless Brand Experiences"
            body="VELIQ exists to engineer seamless brand experiences — combining velocity, intelligence, and creative precision so that every web, app, design, and marketing channel our clients own moves in one unified direction: forward."
            tags={["Velocity", "Intelligence", "Precision"]}
            delay={0.1}
          />
          <Card
            numeral="02"
            label="Our Vision"
            Icon={VisionIcon}
            accentColor="rgb(129,140,248)"
            title="The Most Trusted Growth Architecture Firm"
            body="To become the most trusted growth architecture firm for elite brands across four continents — where every digital touchpoint is a deliberate act of precision, and every client engagement raises the standard for what great work looks like."
            tags={["Four Continents", "Elite Brands", "Deliberate Precision"]}
            delay={0.22}
          />
        </div>

      </div>
    </section>
  );
}
