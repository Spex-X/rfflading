import { NextResponse } from "next/server";

function getClientIp(headers: Headers): string | null {
  const xff = headers.get("x-forwarded-for");
  if (xff) {
    // Take first IP in the list
    const ip = xff.split(",")[0].trim();
    if (ip) return ip;
  }
  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp;
  return null;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    // Allow test override: /api/geo?ip=8.8.8.8
    const testIp = searchParams.get("ip");

    const clientIp = testIp || getClientIp(req.headers) || "";

    // Use ipapi.co. If no IP provided, ipapi will infer from the request, but
    // since this is server-side, prefer passing client IP when available.
    const endpoint = clientIp
      ? `https://ipapi.co/${encodeURIComponent(clientIp)}/json/`
      : `https://ipapi.co/json/`;

    const res = await fetch(endpoint, { next: { revalidate: 300 } });
    if (!res.ok) {
      return NextResponse.json({ city: null, region: null, country_name: null }, { status: 200 });
    }
    const data = await res.json();

    const city = data?.city ?? null;
    const region = data?.region ?? data?.region_code ?? null;
    const country_name = data?.country_name ?? null;

    return NextResponse.json({ city, region, country_name }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ city: null, region: null, country_name: null }, { status: 200 });
  }
}
