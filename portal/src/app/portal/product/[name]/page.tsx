import { Container } from "@mui/material";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";
import { ProductDetails } from "@/components/ProductDetails";
import { FC } from "react";
import { Separator } from "@/components/Separator";

export const revalidate = 60;
export const dynamicParams = true // or false, to 404 on unknown paths
export async function generateStaticParams() {
  return []
}

interface ProductPageProps {
  params: Promise<{ name: string }>;
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  console.log("ProductPage");
  const { name } = await params;
  return (
    <main className="taProductPage">
      <Header menu={HEADER_MENU_LINKS} />
      <Separator />
      <Container maxWidth="xl">
        <ProductDetails name={name} />
      </Container>
    </main>
  );
};

export default ProductPage;
