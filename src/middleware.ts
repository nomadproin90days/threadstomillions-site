import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Force www -> non-www redirect (301)
  if (host.startsWith("www.")) {
    const newUrl = new URL(request.url);
    newUrl.host = host.replace("www.", "");
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon.ico|.*\\..*).*)",
};
