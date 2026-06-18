import { NextResponse } from "next/server";
import { getProjects, setProjects } from "@/lib/db";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Expected an array of projects" },
        { status: 400 }
      );
    }

    for (const p of body) {
      if (!p.title || !p.tag || !p.desc || !p.fullDesc) {
        return NextResponse.json(
          { error: "Each project must have title, tag, desc, and fullDesc" },
          { status: 400 }
        );
      }
    }

    const projects = body.map(
      (p: {
        slug?: string;
        image?: string;
        bg?: string;
        tag: string;
        title: string;
        desc: string;
        fullDesc: string;
        gallery: { image?: string; bg?: string; caption: string }[];
      }) => ({
        slug:
          p.slug ||
          p.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        image: p.image || p.bg || "",
        tag: p.tag,
        title: p.title,
        desc: p.desc,
        fullDesc: p.fullDesc,
        gallery: Array.isArray(p.gallery)
          ? p.gallery.map((g) => ({ image: g.image || g.bg || "", caption: g.caption }))
          : [],
      })
    );

    await setProjects(projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("PUT /api/projects error:", error);
    return NextResponse.json(
      { error: "Failed to update projects" },
      { status: 500 }
    );
  }
}
