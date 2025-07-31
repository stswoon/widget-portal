import { FC } from "react";

class PageEngineRegister {
  #widgets = new Map<string, FC<void | object>>()

  register<T extends void | object>(name: string, widget: FC<T>): void {
    this.#widgets.set(name, widget as FC<void | object>);
  }

  get<T extends void | object>(name: string): FC<T> | undefined {
    return this.#widgets.get(name);
  }
}

export const PAGE_ENGINE_REGISTER = new PageEngineRegister();