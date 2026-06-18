import { NextResponse } from "next/server";
import { getBlogs, setBlogs } from "@/lib/db";

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Expected an array of blogs" },
        { status: 400 }
      );
    }

    for (const b of body) {
      if (!b.title || !b.excerpt || !b.category) {
        return NextResponse.json(
          { error: "Each blog must have title, excerpt, and category" },
          { status: 400 }
        );
      }
    }

    const blogs = body.map(
      (b: {
        slug?: string;
        title: string;
        excerpt: string;
        category: string;
        author?: string;
        date?: string;
        readTime?: string;
        bg?: string;
        content?: string[];
      }) => ({
        slug:
          b.slug ||
          b.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),
        title: b.title,
        excerpt: b.excerpt,
        category: b.category,
        author: b.author || "VELIQ Team",
        date: b.date || new Date().toISOString().split("T")[0],
        readTime: b.readTime || "5 min read",
        bg: b.bg || "bg-gradient-to-br from-indigo-400 to-blue-500",
        content: Array.isArray(b.content) ? b.content : [],
      })
    );

    await setBlogs(blogs);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("PUT /api/blogs error:", error);
    return NextResponse.json(
      { error: "Failed to update blogs" },
      { status: 500 }
    );
  }
}
