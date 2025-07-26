import { FC } from "react";

//TODO: register lazy???

class PageEngineRegister {
  #widgets = new Map<string, FC<unknown>>()

  //TODO
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(name: string, widget: FC<any>): void {
    this.#widgets.set(name, widget);
  }

  get(name: string): FC<unknown> | undefined {
    return this.#widgets.get(name);
  }
}

export const PAGE_ENGINE_REGISTER = new PageEngineRegister();