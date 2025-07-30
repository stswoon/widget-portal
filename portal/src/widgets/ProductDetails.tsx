import { FC, memo } from "react";
import { ProductDto } from "@/models/product.model";
import { ROUTES } from "@/constants/routes.const";
import { Box, Container, Stack, Typography } from "@mui/material";
import { HtmlWidget } from "@/widgets/HtmlWidget";
import { BuyButton } from "@/components/BuyButton";
import Image from "next/image";

interface ProductDetailsProps {
  name: string;
}

export const ProductDetails: FC<ProductDetailsProps> = memo(async ({ name }) => {
  const productData: ProductDto | undefined = await getProductDetails(name);

  const productImgSrc = productData?.imgSrc
    ? ROUTES.productImg(productData?.imgSrc)
    : ROUTES.defaultProductImg;

  if (!productData) {
    //TODO: notfound
    return <div className="taProductDetails">Product not found</div>;
  }

  //TODO:
  if (productData.name === "Asus Error") {
    throw new Error("Special product to test errors from widgets on next portal");
  }

  return (
    <Container maxWidth="xl" className="taProductDetails">
      <Stack gap={4}>
        <Stack gap={4} direction="row">
          <Image
            src={productImgSrc}
            alt={productData.name}
            height={300}
            width={250}
            priority={true}
          />

          <Box>
            <Typography variant="h3">{productData.name}</Typography>
            <Typography variant="body1">{productData.description}</Typography>
            <Stack alignItems="center" paddingTop={4}>
              <BuyButton />
            </Stack>
          </Box>
        </Stack>

        {productData.fullDescription && <HtmlWidget content={productData.fullDescription} />}
      </Stack>
    </Container>
  );
});
ProductDetails.displayName = "ProductDetails";

async function getProductDetails(name: string): Promise<ProductDto> {
  const res: ProductDto[] = await fetch(ROUTES.product(name)).then((res) => res.json());
  if (res?.[0].name === "Google Pixel Loading") {
    await sleep(5000); //for layout loading
  }
  return res[0];
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
