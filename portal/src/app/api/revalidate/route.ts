import { revalidatePath } from "next/cache";
import { PAGE_ROUTE_REGISTER_SERVICE } from "@/utils/page-route-register.service";

//TODO: check revalidate
export async function GET() {
  console.log("RevalidateRoute::routes=", PAGE_ROUTE_REGISTER_SERVICE.getAll().join(", "));
  PAGE_ROUTE_REGISTER_SERVICE.getAll().forEach((path) => {
    revalidatePath(path);
  });
  PAGE_ROUTE_REGISTER_SERVICE.clear();
  console.log("RevalidateRoute::finish");
  return new Response("OK");
}
