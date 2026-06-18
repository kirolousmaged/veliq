import Link from "next/link";
import type { Project } from "@/lib/projects";

/**
 * Project card: image with a yellow category pill (top-right) and the title
 * as a gray label below. Mirrors the template's "Project Card" component.
 * Fills its parent width — wrap it for fixed-width (ticker) or grid layouts.
 */
export default function ProjectCard({
  project,
  aspectRatio = "16 / 9",
}: {
  project: Project;
  aspectRatio?: string;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="flex flex-col gap-3 group w-full">
      <div
        className="relative w-full overflow-hidden"
        style={{ borderRadius: "15px", aspectRatio, backgroundColor: "rgb(3,3,3)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.preview}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
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
      <span style={{ color: "rgb(201,201,201)", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.04em" }}>
        {project.title}
      </span>
    </Link>
  );
}
