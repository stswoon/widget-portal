import { FC, memo } from "react";
import { ProductDto } from "@/models/product.model";
import { ROUTES } from "@/constants/routes.const";
import { Box, Container, Stack, Typography } from "@mui/material";
import { marked } from "marked";
import { HtmlWidget } from "@/widgets/HtmlWidget";

interface ProductDetailsProps {
  name: string;
}

export const ProductDetails: FC<ProductDetailsProps> = memo(async ({ name }) => {
  const productData: ProductDto | undefined = await getProductDetails(name);

  const productImgSrc = productData?.imgSrc
    ? ROUTES.productImg(productData?.imgSrc)
    : ROUTES.defaultProductImg;

  if (!productData) {
    return <div className="taProductDetails">Product not found</div>;
  }

  return (
    <Container maxWidth="xl" className="taProductDetails">
      <Stack gap={4}>
        <Stack gap={4} direction="row">
          {/*TODO: change to Image*/}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={productImgSrc} alt={productData.name} height={300} width={250} />

          <Box>
            <Typography variant="h3">{productData.name}</Typography>
            <Typography variant="body1">{productData.description}</Typography>
          </Box>

          {/* TODO: client counter to buy widget + server widget with discount after 3 products */}
        </Stack>

        {productData.fullDescription && <HtmlWidget content={productData.fullDescription} />}
      </Stack>
    </Container>
  );
});
ProductDetails.displayName = "ProductDetails";

async function getProductDetails(name: string): Promise<ProductDto> {
  const res: ProductDto[] = await fetch(ROUTES.product(name)).then((res) => res.json());
  await sleep(3000); //for layout loading
  return res[0];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
