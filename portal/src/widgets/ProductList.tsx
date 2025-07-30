import { FC, memo } from "react";
import { ProductDto } from "@/models/product.model";
import { ProductCard } from "@/components/ProductCard";
import { ROUTES } from "@/constants/routes.const";
import { Box, Container, Stack } from "@mui/material";

export const ProductList: FC = memo(async () => {
  //TODO: loading
  const products: ProductDto[] = await (await fetch(ROUTES.products)).json();

  return (
    <Container maxWidth="xl" className="taProductList">
      <Stack direction="row" gap={3} flexWrap="wrap" justifyContent="center" alignItems="stretch">
        {products.map((product) => (
          <Box width="30%" minWidth="300px" key={product.name}>
            <ProductCard
              name={product.name}
              imgSrc={product.imgSrc}
              description={product.description}
            />
          </Box>
        ))}
      </Stack>
    </Container>
  );
});

ProductList.displayName = "ProductList";
