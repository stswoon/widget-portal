import { FC, memo, useMemo } from "react";
import { ProductDto } from "@/models/Product.model";
import { ROUTES } from "@/constants/routes.const";
import { Box, Stack, Typography } from "@mui/material";
import { marked } from "marked";

interface ProductDetailsProps {
  name: string;
}

export const ProductDetails: FC<ProductDetailsProps> = memo(async ({ name }) => {
  const productData: ProductDto | undefined = await getProductDetails(name);

  const productImgSrc = productData?.imgSrc
    ? ROUTES.productImg(productData?.imgSrc)
    : ROUTES.defaultProductImg;

  const fullDescrMd = productData?.fullDescription
    ? (marked.parse(productData.fullDescription) as string)
    : undefined;

  if (!productData) {
    return <div className="taProductDetails">Product not found</div>;
  }

  return (
    <Stack className="taProductDetails" gap={4}>
      <Stack gap={4} direction="row">
        <img src={productImgSrc} alt={productData.name} height={300} width={250} />
        <Box>
          <Typography variant="h3">{productData.name}</Typography>
          <Typography variant="body1">{productData.description}</Typography>
        </Box>
        {/* TODO: inner widget */}
      </Stack>
      {fullDescrMd && (
        <Box
          className="taMarkdown"
          dangerouslySetInnerHTML={{ __html: fullDescrMd }}
          border={1}
          borderRadius={5}
          padding={4}
        />
      )}
    </Stack>
  );
});

async function getProductDetails(name: string): Promise<ProductDto> {
  const res: ProductDto[] = await fetch(ROUTES.product(name)).then((res) => res.json());
  return res[0];
}

//TODO: refactor all
