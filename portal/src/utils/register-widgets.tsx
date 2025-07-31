import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";
import { Header } from "@/widgets/Header";
import { ProductList } from "@/widgets/ProductList";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Splitter } from "@/widgets/Splitter";
import { Banner } from "@/widgets/Banner";
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { HtmlWidget } from "@/widgets/HtmlWidget";
import { ClientTestWidget } from "@/widgets/ClientTestWidget";
import { ServerTestWidget } from "@/widgets/ServerTestWidget";

export const registerPageRenderWidgets = () => {
  //TODO: page compilation big size, try lazy - dynamic?
  PAGE_ENGINE_REGISTER.register("widgets.header-widget", Header);
  PAGE_ENGINE_REGISTER.register("widgets.product-list", ProductList);
  PAGE_ENGINE_REGISTER.register("widgets.product-widget", ProductDetails);
  PAGE_ENGINE_REGISTER.register("widgets.splitter", Splitter);
  PAGE_ENGINE_REGISTER.register("widgets.banner-widget", Banner);
  PAGE_ENGINE_REGISTER.register("widgets.menu-widget", HeaderMenu);
  PAGE_ENGINE_REGISTER.register("widgets.html-widget", HtmlWidget);
  PAGE_ENGINE_REGISTER.register("widgets.client-test-widget", ClientTestWidget);
  PAGE_ENGINE_REGISTER.register("widgets.server-test-widget", ServerTestWidget);
};
