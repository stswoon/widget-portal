import { NextRequest } from "next/server";

interface RouteContext {
  params: Promise<{ path: string[] }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const path = (await context.params).path.join("/");
  const searchParams = req.nextUrl.searchParams.toString();
  console.log(`Proxying request ${path}?${searchParams}`)

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

  if (target && searchParams) {
    target = `${target}?${searchParams}`;
  }

  const externalRes = await fetch(target);
  return new Response(externalRes.body, {
    headers: externalRes.headers,
    status: externalRes.status,
    statusText: externalRes.statusText
  });
}
