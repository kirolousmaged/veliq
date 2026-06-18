import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const validUser = process.env.ADMIN_USERNAME;
    const validPass = process.env.ADMIN_PASSWORD;

    if (!validUser || !validPass) {
      return NextResponse.json({ error: "Auth not configured." }, { status: 500 });
    }

    if (username !== validUser || password !== validPass) {
      return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
    }

    // Create a simple signed token
    const secret = process.env.ADMIN_SECRET || validPass;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const payload = `veliq-admin:${Date.now()}`;
    const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
    const token = `${btoa(payload)}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`;

    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
