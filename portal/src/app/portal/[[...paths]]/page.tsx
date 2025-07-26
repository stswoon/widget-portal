import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { Banner } from "@/components/Banner";
import { Separator } from "@/components/Separator";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";
import { ProductDetails } from "@/components/ProductDetails";
import { FC } from "react";
import { AppRouterPageEngine } from "@/app-router-page-engine/AppRouterPageEngine";

//TODO
export const revalidate = 60;
export const dynamicParams = true; // or false, to 404 on unknown paths
export async function generateStaticParams() {
  return [];
}

PAGE_ENGINE_REGISTER.register("widgets.header-widget", Header);
PAGE_ENGINE_REGISTER.register("widgets.product-list-widget", ProductList);
PAGE_ENGINE_REGISTER.register("widgets.product-details-widget", ProductDetails);
PAGE_ENGINE_REGISTER.register("widgets.separator-widget", Separator);
PAGE_ENGINE_REGISTER.register("widgets.banner-widget", Banner);
//TODO
PAGE_ENGINE_REGISTER.register("widgets.menu-widget", Banner);
//TODO
PAGE_ENGINE_REGISTER.register("widgets.html-widget", Banner);

interface ProductPageProps {
  params: Promise<{ paths: string[] | undefined }>;
}

const RootPage: FC<ProductPageProps> = async ({ params }) => {
  const { paths } = await params;
  console.log(`RootPage::params=${JSON.stringify(params)}`);
  const path = "/" + (paths ?? []).join("/");
  console.log(`RootPage::path=${path}`);

  return (
    <main className="taRootPage">
      <AppRouterPageEngine path={path} />
    </main>
  );
};

export default RootPage;

// export default function RootPage() {
//   console.log("RootPage");
//   return (
//     <main className="taRootPage">
//       <Header menu={HEADER_MENU_LINKS} />
//       <Banner />
//       <Separator />
//       <Container maxWidth="xl">
//         <ProductList />
//       </Container>
//     </main>
//   );
// }
