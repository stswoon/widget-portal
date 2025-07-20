import { NextRequest, NextResponse } from "next/server";

async function proxyRequest(req: NextRequest, baseUrl: string, prefix: string) {
  const targetPath = req.nextUrl.pathname.replace(prefix, "");
  const backendUrl = `${baseUrl}/${targetPath}`;
  const fetchResponse = await fetch(backendUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });
  const body = await fetchResponse.text();
  return new NextResponse(body, {
    status: fetchResponse.status,
    headers: fetchResponse.headers
  });
}

//EDGE works normally only for GET otherwise use route proxy
export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/cms/")) {
    return await proxyRequest(req, "http://localhost:3101", "/cms/");
  } else if (req.nextUrl.pathname.startsWith("/data/")) {
    return await proxyRequest(req, "http://localhost:3102", "/data/");
  }

  return NextResponse.next();
}
