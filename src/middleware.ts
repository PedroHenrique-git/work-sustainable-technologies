import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" && cookies().has("authenticated")) {
    return NextResponse.redirect(new URL("/greetings", request.url));
  }
}
