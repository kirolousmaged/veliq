"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

// Real project data pulled from the template's CMS (Projects collection).
const PROJECTS = [
  { title: "Ethereal", category: "Web design",   year: "2024", slug: "ethereal", img: "https://framerusercontent.com/images/4g3mQfVzCiTON8DoN1D8WGnNa3c.png" },
  { title: "Pulse",    category: "UI/UX Design",  year: "2025", slug: "pulse",    img: "https://framerusercontent.com/images/1JtVtYwgwzXvmSxwKH7TDNE7FY.png" },
  { title: "Canvas",   category: "Web design",    year: "2026", slug: "canvas",   img: "https://framerusercontent.com/images/Q26teNCQ5tcfHqhCyHT2yf5dP8.png" },
  { title: "Nexus",    category: "Development",   year: "2026", slug: "nexus",    img: "https://framerusercontent.com/images/ylSzx9EHuLrS33To9Be1lZxUd3w.png" },
  { title: "Summit",   category: "SEO",           year: "2025", slug: "summit",   img: "https://framerusercontent.com/images/trWfQOfehjZNffakJfa3LkFoNI.png" },
  { title: "Vault",    category: "UI/UX Design",  year: "2026", slug: "vault",    img: "https://framerusercontent.com/images/Vt9Ui0gskAyE2bvE7k8mxALgRg.png" },
  { title: "Velocity", category: "Development",   year: "2025", slug: "velocity", img: "https://framerusercontent.com/images/kcwYwENYU8F6xjobmnhX5BfLFOQ.png" },
];

// Card geometry — kept in JS so the marquee loop is pixel-perfect / seamless.
const CARD_WIDTH = 620;
const CARD_GAP = 20;
const ONE_SET = PROJECTS.length * (CARD_WIDTH + CARD_GAP);

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex-shrink-0 flex flex-col gap-3 group"
      style={{ width: `${CARD_WIDTH}px` }}
    >
      {/* Image with yellow category pill */}
      <div
        className="relative w-full overflow-hidden"
        style={{ borderRadius: "15px", aspectRatio: "16 / 9", backgroundColor: "rgb(3,3,3)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Yellow category pill — top right */}
        <span
          className="absolute"
          style={{
            top: "12px",
            right: "12px",
            backgroundColor: "rgb(251,188,0)",
            color: "rgb(0,0,0)",
            borderRadius: "100px",
            padding: "5px 15px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "-0.2px",
            zIndex: 2,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Title below the card */}
      <span
        style={{ color: "rgb(201,201,201)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.04em" }}
      >
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
      <div className="w-full flex flex-col gap-[120px]">

        {/* Heading row */}
        <motion.div
          className="flex justify-between items-end px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className="flex items-start gap-3">
            <h2 className="heading-1 text-white">Projects.</h2>
            <span className="para-12 text-[rgb(201,201,201)] mt-4">(07)</span>
          </div>
          <Button label="All Projects" href="/projects" variant="outline" />
        </motion.div>

        {/* 3D perspective ticker — full-bleed to the viewport edges */}
        <div
          className="overflow-hidden"
          style={{
            perspective: "1800px",
            perspectiveOrigin: "50% 50%",
            width: "100vw",
            marginLeft: "calc(50% - 50vw)",
            marginRight: "calc(50% - 50vw)",
          }}
        >
          <motion.div
            className="flex w-max"
            style={{
              gap: `${CARD_GAP}px`,
              transformStyle: "preserve-3d",
              rotateY: "-18deg",
            }}
            animate={{ x: [0, -ONE_SET] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear", repeatType: "loop" }}
          >
            {/* Two copies for a seamless loop */}
            {[...PROJECTS, ...PROJECTS].map((project, i) => (
              <ProjectCard key={`${project.slug}-${i}`} project={project} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
