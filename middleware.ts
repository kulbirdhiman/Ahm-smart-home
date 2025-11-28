import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;
  const path = req.nextUrl.pathname;

  // 🔒 1. PROTECT ADMIN ROUTES
  if (path.startsWith("/admin")) {
    if (!token) {
      // Not logged in → go to login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // 🚫 2. PREVENT LOGGED-IN USERS FROM GOING TO /login
  if (path === "/login" && token) {
    // Already logged in → redirect to admin or homepage
    return NextResponse.redirect(new URL("/admin/product", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", // protect admin pages
    "/login",        // block login when logged-in
  ],
};
