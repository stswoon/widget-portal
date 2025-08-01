import { ComponentType } from "react";

class PageEngineRegister {
  #widgets = new Map<string, ComponentType<void | object> | undefined>();

  register<T extends void | object>(name: string, widget: ComponentType<T>): void {
    this.#widgets.set(name, widget as ComponentType<void | object>);
  }

  get<T extends void | object>(name: string): ComponentType<T> | undefined {
    return this.#widgets.get(name) as ComponentType<T> | undefined
  }
}

export const PAGE_ENGINE_REGISTER = new PageEngineRegister();