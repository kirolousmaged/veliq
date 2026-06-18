import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const domain = project.url.replace(/^https?:\/\/(www\.)?/, "");

  return (
    <Link href={`/projects/${project.slug}`} className="flex flex-col gap-3 group w-full">

      {/* Browser shell */}
      <div
        className="w-full overflow-hidden"
        style={{ borderRadius: 14, border: "1px solid rgb(36,36,36)", backgroundColor: "rgb(16,16,16)" }}
      >
        {/* Chrome bar */}
        <div style={{ height: 30, backgroundColor: "rgb(22,22,22)", borderBottom: "1px solid rgb(36,36,36)", display: "flex", alignItems: "center", gap: 6, padding: "0 12px" }}>
          <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgb(255,95,87)",  display: "block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgb(255,189,46)", display: "block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "rgb(39,201,63)",  display: "block" }} />
          </div>
          <div style={{ flex: 1, marginLeft: 6, backgroundColor: "rgb(14,14,14)", borderRadius: 4, height: 18, display: "flex", alignItems: "center", padding: "0 7px", overflow: "hidden" }}>
            <span style={{ fontSize: 8, color: "rgb(80,80,80)", letterSpacing: "0.01em", whiteSpace: "nowrap", overflow: "hidden" }}>
              🔒 {domain}
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "16 / 9", backgroundColor: "rgb(12,12,12)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.preview}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className="absolute"
            style={{
              top: 10, right: 10, zIndex: 2,
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
