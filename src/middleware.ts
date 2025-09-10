import micromatch from "micromatch";
import { NextRequest, NextResponse } from "next/server";
import { getCookieCache, getSessionCookie } from "better-auth/cookies";

const publicRoutes = ["/", "/auth/**", "/api/auth/**"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicRoute = micromatch.isMatch(path, publicRoutes);

  if (isPublicRoute) return NextResponse.next();
  const cookie = getSessionCookie(request);
  if (!cookie)
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
