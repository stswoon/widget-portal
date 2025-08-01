import { nanoid } from 'nanoid'

class RouteRegisterService {
  public readonly _ID = nanoid(); //singleton works

  private routes = new Set<string>();

  register(url: string): void {
    if (url.endsWith("/")) {
      url = url.slice(0, url.length - 1);
    }
    console.log(`PageRouteRegisterService[${this._ID}]::register url=${url}`);
    this.routes.add(url);
  }

  getAll(): string[] {
    console.log(`PageRouteRegisterService[${this._ID}]::get all urls=${Array.from(this.routes).join(", ")}`);
    return Array.from(this.routes);
  }

  clear(): void {
    this.routes.clear();
  }
}

export const ROUTE_REGISTER_SERVICE = new RouteRegisterService();
