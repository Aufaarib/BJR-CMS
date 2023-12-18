import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("role")?.value;
  const url = req.url;

  if (verify !== "admin" && url.includes("dashboard")) {
    return NextResponse.redirect(new URL("/authentication/sign-in", req.url));
  }

  return NextResponse.next();
}
