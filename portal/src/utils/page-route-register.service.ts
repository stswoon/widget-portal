import { nanoid } from 'nanoid'

class PageRouteRegisterService {
  public readonly _ID = nanoid(); //singleton works

  private routes = new Set<string>();

  register(url: string): void {
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

export const PAGE_ROUTE_REGISTER_SERVICE = new PageRouteRegisterService();
