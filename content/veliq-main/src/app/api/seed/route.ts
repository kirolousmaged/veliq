import { NextResponse } from "next/server";
import { initDB, setCollection } from "@/lib/db";
import servicesData from "@/app/data/services.json";
import projectsData from "@/app/data/projects.json";
import blogsData from "@/app/data/blogs.json";

export async function POST() {
  try {
    await initDB();
    await setCollection("services", servicesData);
    await setCollection("projects", projectsData);
    await setCollection("blogs", blogsData);

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
      counts: {
        services: servicesData.length,
        projects: projectsData.length,
        blogs: blogsData.length,
      },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database", details: String(error) },
      { status: 500 }
    );
  }
}
