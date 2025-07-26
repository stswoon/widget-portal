//TODO
// import { NextRequest, NextResponse } from 'next/server';
//
// export async function GET(req: NextRequest) {
//   const tag = req.nextUrl.searchParams.get('tag');
//
//   if (tag) {
//     await res.revalidateTag(tag); // requires tag-based fetch caching
//     return NextResponse.json({ revalidated: true, now: Date.now() });
//   }
//
//   return NextResponse.json({ revalidated: false });
// }