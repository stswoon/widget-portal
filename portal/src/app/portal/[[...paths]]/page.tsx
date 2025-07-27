import { Header } from "@/widgets/Header";
import { ProductList } from "@/widgets/ProductList";
import { Banner } from "@/widgets/Banner";
import { Splitter } from "@/widgets/Splitter";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";
import { ProductDetails } from "@/widgets/ProductDetails";
import { FC } from "react";
import { AppRouterPageEngine } from "@/app-router-page-engine/AppRouterPageEngine";
import { PAGE_ROUTE_REGISTER_SERVICE } from "@/utils/page-route-register.service";
import { HeaderMenu } from "@/widgets/HeaderMenu";
import { HtmlWidget } from "@/widgets/HtmlWidget";
import { LINKS } from "@/constants/routes.const";

export const revalidate = 120; //cannot assign constant from other file
export const dynamicParams = true; // or false, to 404 on unknown paths
export const generateStaticParams = async () => []; // to spic generate pages for all paths, generate only by demand

//TODO: page big size, lazy?
PAGE_ENGINE_REGISTER.register("widgets.header-widget", Header);
PAGE_ENGINE_REGISTER.register("widgets.product-list", ProductList);
PAGE_ENGINE_REGISTER.register("widgets.product-widget", ProductDetails);
PAGE_ENGINE_REGISTER.register("widgets.splitter", Splitter);
PAGE_ENGINE_REGISTER.register("widgets.banner-widget", Banner);
PAGE_ENGINE_REGISTER.register("widgets.menu-widget", HeaderMenu);
PAGE_ENGINE_REGISTER.register("widgets.html-widget", HtmlWidget);

interface DynamicPortalPageProps {
  params: Promise<{ paths: string[] | undefined }>;
}

const DynamicPortalPage: FC<DynamicPortalPageProps> = async ({ params }) => {
  const { paths } = await params;
  const path = "/" + (paths ?? []).join("/");
  console.log(`DynamicPortalPage::path=${path}`);
  PAGE_ROUTE_REGISTER_SERVICE.register(LINKS.portal + path);
  return (
    <main className="taDynamicPortalPage">
      <AppRouterPageEngine path={path} />
    </main>
  );
};

export default DynamicPortalPage;

// export default function RootPage() {
//   console.log("RootPage");
//   return (
//     <main className="taRootPage">
//       <Header menu={HEADER_MENU_LINKS} />
//       <Banner />
//       <Splitter />
//       <Container maxWidth="xl">
//         <ProductList />
//       </Container>
//     </main>
//   );
// }

// interface ProductPageProps {
//   params: Promise<{ name: string }>;
// }
//
// const ProductPage: FC<ProductPageProps> = async ({ params }) => {
//   console.log("ProductPage");
//   const { name } = await params;
//   return (
//     <main className="taProductPage">
//       <Header menu={HEADER_MENU_LINKS} />
//       <Splitter />
//       <Container maxWidth="xl">
//         <ProductDetails name={name} />
//       </Container>
//     </main>
//   );
// };
//
// export default ProductPage;