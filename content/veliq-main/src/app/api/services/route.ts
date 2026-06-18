import { NextResponse } from "next/server";
import { getServices, setServices } from "@/lib/db";

export async function GET() {
  try {
    const services = await getServices();
    return NextResponse.json(services);
  } catch (error) {
    console.error("GET /api/services error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Expected an array of services" },
        { status: 400 }
      );
    }

    for (const s of body) {
      if (!s.icon || !s.title || !s.desc) {
        return NextResponse.json(
          { error: "Each service must have icon, title, and desc" },
          { status: 400 }
        );
      }
    }

    const services = body.map(
      (s: Record<string, unknown>, i: number) => ({
        ...s,
        id: i + 1,
      })
    );

    await setServices(services);
    return NextResponse.json(services);
  } catch (error) {
    console.error("PUT /api/services error:", error);
    return NextResponse.json(
      { error: "Failed to update services" },
      { status: 500 }
    );
  }
}
