import dynamic from "next/dynamic";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";

import { Header } from "@/widgets/Header";
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { HtmlWidget } from "@/widgets/HtmlWidget";
import { Splitter } from "@/widgets/Splitter";
// import { Banner } from "@/widgets/Banner";
// import { ProductList } from "@/widgets/ProductList";
// import { ProductDetails } from "@/widgets/ProductDetails";

export const registerPageRenderWidgets = () => {
  //TODO: page compilation big size, try lazy - dynamic?
  PAGE_ENGINE_REGISTER.register("widgets.header-widget", Header);
  PAGE_ENGINE_REGISTER.register("widgets.menu-widget", HeaderMenu);
  PAGE_ENGINE_REGISTER.register("widgets.html-widget", HtmlWidget);
  PAGE_ENGINE_REGISTER.register("widgets.splitter", Splitter);

  PAGE_ENGINE_REGISTER.register(
    "widgets.product-list",
    dynamic(() => import("@/widgets/ProductList").then((m) => m.ProductList))
  );
  PAGE_ENGINE_REGISTER.register(
    "widgets.product-widget",
    dynamic(() => import("@/widgets/ProductDetails").then((m) => m.ProductDetails))
  );
  PAGE_ENGINE_REGISTER.register(
    "widgets.banner-widget",
    dynamic(() => import("@/widgets/Banner").then((m) => m.Banner))
  );
  PAGE_ENGINE_REGISTER.register(
    "widgets.checkout-widget",
    dynamic(() => import("@/widgets/Checkout").then((m) => m.Checkout))
  );
};
