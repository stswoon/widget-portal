import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//
//   if (pathname.startsWith("/cms")) {
//     const rewriteUrl = req.nextUrl.clone();
//     rewriteUrl.pathname = pathname.replace("/cms", "");
//     rewriteUrl.host = "https://localhost:3101";
//     return NextResponse.rewrite(rewriteUrl);
//   } else if (pathname.startsWith("/data")) {
//     const rewriteUrl = req.nextUrl.clone();
//     rewriteUrl.pathname = pathname.replace("/data", "");
//     rewriteUrl.host = "https://localhost:3102";
//     return NextResponse.rewrite(rewriteUrl);
//   }
//
//   return NextResponse.next();
// }
//
// export const config = {
//   matcher: ["/cma/:path*", "/data/:path*"]
// };

//EDGE works normally only for GET otherwise use route proxy
//TODO: optimize
export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/cms")) {
    const targetPath = req.nextUrl.pathname.replace("/cms/", "");
    const backendUrl = `http://localhost:3101/${targetPath}`;
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
  } else if (req.nextUrl.pathname.startsWith("/data/")) {
    const targetPath = req.nextUrl.pathname.replace("/data/", "");
    const backendUrl = `http://localhost:3102/${targetPath}`;
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

  return NextResponse.next();
}
