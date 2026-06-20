"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/projects";

const CARD_W   = 760;
const CARD_H   = Math.round(CARD_W * 9 / 16); // 428
const CARD_GAP = 20;
const ONE_SET  = PROJECTS.length * (CARD_W + CARD_GAP);

function BrowserCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex-shrink-0 flex flex-col gap-3 group"
      style={{ width: `${CARD_W}px` }}
    >
      {/* Browser shell */}
      <div
        className="overflow-hidden"
        style={{ borderRadius: 14, border: "1px solid rgb(36,36,36)", backgroundColor: "rgb(16,16,16)" }}
      >
        {/* Chrome bar */}
        <div style={{ height: 34, backgroundColor: "rgb(22,22,22)", borderBottom: "1px solid rgb(36,36,36)", display: "flex", alignItems: "center", gap: 6, padding: "0 14px" }}>
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "rgb(255,95,87)",  display: "block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "rgb(255,189,46)", display: "block" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: "rgb(39,201,63)",  display: "block" }} />
          </div>
          <div style={{ flex: 1, marginLeft: 8, backgroundColor: "rgb(14,14,14)", borderRadius: 5, height: 20, display: "flex", alignItems: "center", padding: "0 8px", overflow: "hidden" }}>
            <span style={{ fontSize: 9, color: "rgb(90,90,90)", letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
              🔒 {domain}
            </span>
          </div>
        </div>

        {/* Screenshot viewport */}
        <div style={{ position: "relative", width: CARD_W, height: CARD_H, overflow: "hidden", backgroundColor: "rgb(12,12,12)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.preview}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <span
            style={{
              position: "absolute", top: 10, right: 10, zIndex: 2,
              backgroundColor: "rgb(99,102,241)", color: "rgb(0,0,0)",
              borderRadius: 100, padding: "4px 12px",
              fontSize: 11, fontWeight: 600, letterSpacing: "-0.2px",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <span style={{ color: "rgb(201,201,201)", fontSize: 22, fontWeight: 600, letterSpacing: "-0.04em" }}>
        {project.title}
      </span>
    </Link>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -120px 0px" });

  return (
    <section ref={ref} className="w-full bg-black section-padding">
      <div className="w-full flex flex-col gap-16 md:gap-[120px]">

        <motion.div
          className="flex justify-between items-end px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="flex items-start gap-3">
            <h2 className="heading-1 text-white">Projects.</h2>
            <span className="para-12 text-[rgb(201,201,201)] mt-4">(12)</span>
          </div>
          {/* Desktop: button beside the title */}
          <div className="hidden md:block">
            <Button label="All Projects" href="/projects" variant="outline" />
          </div>
        </motion.div>

        {/*
          4-layer architecture:
            Layer 1 — full-bleed wrapper, overflow:hidden (no edge fade)
            Layer 2 — perspective context (separate from overflow so 3D isn't clipped)
            Layer 3 — static rotateY tilt (plain CSS, no Framer Motion)
            Layer 4 — CSS @keyframes translateX (compositor thread, never snaps)
        */}

        {/* Layer 1 — full-bleed (no edge gradient) */}
        <div
          style={{
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
            overflow: "hidden",
          }}
        >
          {/* Layer 2 — perspective */}
          <div style={{ perspective: "1800px", perspectiveOrigin: "50% 50%" }}>

            {/* Layer 3 — static 3D tilt */}
            <div style={{ transform: "rotateY(-28deg)", transformStyle: "preserve-3d" }}>

              {/* Layer 4 — smooth CSS animation, translateX only */}
              <div
                className="veliq-ticker flex w-max"
                style={{
                  gap: `${CARD_GAP}px`,
                  "--ticker-dist": `-${ONE_SET}px`,
                  "--ticker-dur": "55s",
                } as React.CSSProperties}
              >
                {[...PROJECTS, ...PROJECTS].map((p, i) => (
                  <BrowserCard key={`${p.slug}-${i}`} project={p} />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Mobile: button at the end */}
        <div className="md:hidden flex justify-center">
          <Button label="All Projects" href="/projects" variant="outline" />
        </div>

      </div>
    </section>
  );
}
