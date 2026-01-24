import { revalidatePath } from "next/cache";
import { ROUTE_REGISTER_SERVICE } from "@/utils/RouteRegister.service";

//export const runtime = "nodejs";

export async function GET() {
  console.log("RevalidateRoute::routes=", ROUTE_REGISTER_SERVICE.getAll().join(", "));
  const routeList = ROUTE_REGISTER_SERVICE.getAll().join("\n");
  ROUTE_REGISTER_SERVICE.getAll().forEach((path) => {
    revalidatePath(path);
  });
  ROUTE_REGISTER_SERVICE.clear();

  // revalidatePath("/portal");

  console.log("RevalidateRoute::finish");
  return new Response("OK" + "\n" + routeList);
}
