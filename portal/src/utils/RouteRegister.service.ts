import { nanoid } from 'nanoid'
import * as fs from "node:fs";

const ROUTES_FILE_NAME = "./routes.txt"

//singleton not works anymore (different runtime in routes and pages) so need to store data into external storage, e.g.
//in DB or file
//or revalidatePath("/portal");
//or because config changed in cms so technically we know productId in advance so can revalidate full path to specific product.
//near realize DB-like approach
class RouteRegisterService {
  public readonly _ID = nanoid(); //singleton works

  //private routes = new Set<string>();

  #loadRoutes(): Set<string> {
    if (!fs.existsSync(ROUTES_FILE_NAME)) {
      this.#writeRoutes(new Set<string>());
    }
    const tmp = fs.readFileSync(ROUTES_FILE_NAME, 'utf-8');
    const tmp2 = JSON.parse(tmp);
    return new Set<string>(tmp2);
  }

  #writeRoutes(routes: Set<string>): void {
    fs.writeFileSync(ROUTES_FILE_NAME, JSON.stringify([...routes], null, 2), 'utf-8');
  }

  register(url: string): void {
    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
    }
    console.log(`PageRouteRegisterService[${this._ID}]::register url=${url}`);

    const routes = this.#loadRoutes();
    routes.add(url);
    this.#writeRoutes(routes);
  }

  getAll(): string[] {
    const routes = this.#loadRoutes();

    console.log(`PageRouteRegisterService[${this._ID}]::get all urls=${Array.from(routes).join(", ")}`);
    return Array.from(routes);
  }

  clear(): void {
    this.#writeRoutes(new Set<string>());
  }
}

export const ROUTE_REGISTER_SERVICE = new RouteRegisterService();
