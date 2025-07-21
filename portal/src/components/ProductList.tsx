import { FC, memo } from "react";
import { ProductDto } from "@/models/Product.model";
import { ProductCard } from "@/components/ProductCard";
import { ROUTES } from "@/constants/routes.const";
import { Box, Stack } from "@mui/material";

interface ProductListProps {}

export const ProductList: FC<ProductListProps> = memo(async ({}) => {
  // console.log("ROUTES.products=" + ROUTES.products);
  //TODO: loading, error boundary
  const products: ProductDto[] = await (await fetch(ROUTES.products)).json();
  return (
    <Stack className="taProductList" direction="row" gap={3} flexWrap="wrap" justifyContent="center">
      {products.map((product) => (
        <Box width="30%" minWidth="300px">
          <ProductCard
            key={product.name}
            name={product.name}
            imgSrc={product.imgSrc}
            description={product.description}
          />
        </Box>
      ))}
    </Stack>
  );
});
