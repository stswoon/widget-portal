import { Container } from "@mui/material";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";
import { ProductList } from "@/components/ProductList";
import { Banner } from "@/components/Banner";
import { Separator } from "@/components/Separator";

export const revalidate = 60;
export const dynamicParams = true; // or false, to 404 on unknown paths
export async function generateStaticParams() {
  return [];
}

export default function RootPage() {
  console.log("RootPage");
  return (
    <main className="taRootPage">
      <Header menu={HEADER_MENU_LINKS} />
      <Banner />
      <Separator />
      <Container maxWidth="xl">
        <ProductList />
      </Container>
    </main>
  );
}
