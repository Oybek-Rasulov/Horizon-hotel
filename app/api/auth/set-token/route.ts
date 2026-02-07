// app/api/auth/set-token/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  // Use NextResponse object to set cookie
  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,      // safe
    path: "/",           // must be /
    sameSite: "lax",     // works for same-site
    maxAge: 60 * 60 * 24 // 1 day
  });

  return res;
}
