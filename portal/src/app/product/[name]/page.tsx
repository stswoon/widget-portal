import { Container } from "@mui/material";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";
import { ProductDetails } from "@/components/ProductDetails";
import { FC } from "react";
import { Separator } from "@/components/Separator";

interface ProductPageProps {
  params: Promise<{ name: string }>;
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { name } = await params;

  return (
    <main className="taProductPage">
      <Header menu={HEADER_MENU_LINKS} />
      <Separator/>
      <Container maxWidth="xl">
        <ProductDetails name={name} />
      </Container>
    </main>
  );
};

export default ProductPage;
