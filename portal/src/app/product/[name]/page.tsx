import { Container } from "@mui/material";
import { Test } from "@/components/Test";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";
import { ProductList } from "@/components/ProductList";
import { ProductDetails } from "@/components/ProductDetails";
import { FC } from "react";
import { ProductDto } from "@/models/Product.model";
import { ROUTES } from "@/constants/routes.const";

interface ProductPageProps {
  params: Promise<{ name: string }>;
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {
  const { name } = await params;

  return (
    <main className="taProductPage">
      <Header menu={HEADER_MENU_LINKS} />
      <Container maxWidth="xl">
        <ProductDetails name={name} />
      </Container>
    </main>
  );
};

export default ProductPage;
