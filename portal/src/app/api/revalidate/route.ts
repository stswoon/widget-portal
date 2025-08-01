import { revalidatePath } from "next/cache";
import { ROUTE_REGISTER_SERVICE } from "@/utils/RouteRegister.service";

export async function GET() {
  console.log("RevalidateRoute::routes=", ROUTE_REGISTER_SERVICE.getAll().join(", "));
  ROUTE_REGISTER_SERVICE.getAll().forEach((path) => {
    revalidatePath(path);
  });
  ROUTE_REGISTER_SERVICE.clear();
  console.log("RevalidateRoute::finish");
  return new Response("OK");
}
