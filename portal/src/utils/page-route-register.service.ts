class PageRouteRegisterService {
  private routes = new Set<string>();

  register(url: string): void {
    this.routes.add(url);
  }

  getAll(): string[] {
    return Array.from(this.routes);
  }

  clear(): void {
    this.routes.clear();
  }
}

//TODO: check singleton
export const PAGE_ROUTE_REGISTER_SERVICE = new PageRouteRegisterService();
