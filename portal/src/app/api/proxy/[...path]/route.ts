import { NextRequest } from "next/server";

interface RouteContext {
  params: Promise<{ path: string[] }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const path = (await context.params).path.join("/");
  // const searchParams = req.nextUrl.searchParams.toString();
  const searchParams = customSearchParamsToString(req.nextUrl.searchParams);
  console.log(`Proxying request ${path}?${searchParams}`);

  let target: string | undefined;
  if (path.startsWith("cms/")) {
    target = `http://localhost:3101`;
    target = `${target}/${path.replace("cms/", "")}`;
  } else if (path.startsWith("data/")) {
    target = `http://localhost:3102`;
    target = `${target}/${path.replace("data/", "")}`;
  }

  if (!target) {
    throw new Error("Cannot proxy - no target found");
  }

  if (searchParams) {
    target = `${target}?${searchParams}`;
  }

  console.log(`Proxying request to ${target}`);
  // console.log(req.headers.get("Authorization"));

  const externalRes = await fetch(target, {
    method: "GET",
    headers: req.headers
    // headers: {
    //   Authorization: req.headers.get("Authorization") || ""
    // }
  });
  return new Response(externalRes.body, {
    headers: externalRes.headers,
    status: externalRes.status,
    statusText: externalRes.statusText
  });
}

/**
 * generate ?q&foo=bar instead of ?q=&foo=bar
 */
function customSearchParamsToString(params: URLSearchParams): string {
  const entries = Array.from(params.entries());
  return entries
    .map(([key, value]) => value === '' ? key : `${key}=${encodeURIComponent(value)}`)
    .join('&');
}