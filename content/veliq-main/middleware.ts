import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS = ["/admin"];
const PROTECTED_API_PATHS = ["/api/services", "/api/projects", "/api/blogs", "/api/seed"];
const PUBLIC_PATHS = ["/admin/login", "/api/auth/login", "/api/auth/logout"];

async function verifyToken(token: string, secret: string): Promise<boolean> {
  try {
    const [payloadB64, signatureB64] = token.split(".");
    if (!payloadB64 || !signatureB64) return false;

    const payload = atob(payloadB64);
    if (!payload.startsWith("veliq-admin:")) return false;

    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const signatureStr = atob(signatureB64);
    const signatureBytes = new Uint8Array(signatureStr.length);
    for (let i = 0; i < signatureStr.length; i++) {
      signatureBytes[i] = signatureStr.charCodeAt(i);
    }

    return await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBytes,
      encoder.encode(payload)
    );
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => pathname === p)) {
    return NextResponse.next();
  }

  // Check if path needs protection
  const isProtectedPage = PROTECTED_PATHS.some((p) => pathname.startsWith(p));
  const isProtectedApi = PROTECTED_API_PATHS.some((p) => pathname.startsWith(p));

  if (!isProtectedPage && !isProtectedApi) {
    return NextResponse.next();
  }

  // Allow GET requests to API routes (public site needs to read data)
  if (isProtectedApi && req.method === "GET") {
    return NextResponse.next();
  }

  // Verify auth token
  const token = req.cookies.get("admin_token")?.value;
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || "";

  if (!token || !await verifyToken(token, secret)) {
    if (isProtectedApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/services/:path*", "/api/projects/:path*", "/api/blogs/:path*", "/api/seed/:path*"],
};
