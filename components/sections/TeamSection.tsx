"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TEAM = [
  { name: "Matt Anderson",   role: "Creative Director",   specialty: "Strategy",    initials: "MA", bg: "hsl(156,70%,20%)" },
  { name: "Sarah Chen",      role: "Lead Designer",       specialty: "Design",      initials: "SC", bg: "hsl(160,68%,22%)" },
  { name: "James Whitfield", role: "Head of Development", specialty: "Development", initials: "JW", bg: "hsl(152,66%,18%)" },
  { name: "Ethan Voss",      role: "SEO & Growth Lead",   specialty: "SEO",         initials: "EV", bg: "hsl(158,72%,21%)" },
  { name: "Maya Torres",     role: "Brand Strategist",    specialty: "Strategy",    initials: "MT", bg: "hsl(154,65%,19%)" },
];

const CARD_WIDTH = 260;
const CARD_GAP = 10;

function TeamCard({ member }: { member: typeof TEAM[number] }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-[18px] flex flex-col"
      style={{
        width: `${CARD_WIDTH}px`,
        backgroundColor: "rgb(14,14,14)",
      }}
    >
      {/* Photo area — green bg with initials */}
      <div
        className="w-full relative overflow-hidden flex items-center justify-center"
        style={{ height: `${Math.round(CARD_WIDTH * 1.15)}px`, backgroundColor: member.bg }}
      >
        {/* Large ghost initials */}
        <span
          className="select-none text-white"
          style={{
            fontSize: "7rem",
            fontWeight: 900,
            letterSpacing: "-0.06em",
            opacity: 0.18,
            lineHeight: 1,
            userSelect: "none",
          }}
          aria-hidden
        >
          {member.initials}
        </span>

        {/* Specialty badge — overlaid bottom-left */}
        <span
          className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-white"
          style={{
            backgroundColor: "rgb(15,128,84)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {member.specialty}
        </span>
      </div>

      {/* Info strip */}
      <div className="flex flex-col gap-1 p-5">
        <p
          className="text-white"
          style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          {member.name}
        </p>
        <p
          className="text-[rgb(201,201,201)]"
          style={{ fontSize: "13px", fontWeight: 400 }}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "0px 0px -120px 0px" });

  const totalWidth = TEAM.length * (CARD_WIDTH + CARD_GAP);
  const duration = TEAM.length * 6;

  return (
    <section ref={ref} className="w-full bg-black section-padding overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">

        <div ref={headingRef} className="flex items-end justify-between">
          <motion.h2
            className="heading-1 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Team.
          </motion.h2>
        </div>

      </div>

      {/* Full-bleed ticker — outside max-width */}
      <div className="w-full mt-12 overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: `${CARD_GAP}px` }}
          animate={{ x: [0, -totalWidth] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          {/* Two copies for seamless loop */}
          {[...TEAM, ...TEAM].map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
