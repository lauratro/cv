import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const isGerman =
    request.nextUrl.pathname === "/de" ||
    request.nextUrl.pathname.startsWith("/de/") ||
    request.nextUrl.pathname.startsWith("/pdf/de");

  requestHeaders.set("x-resume-locale", isGerman ? "de" : "en");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
