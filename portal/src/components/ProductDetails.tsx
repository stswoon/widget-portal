import { FC, memo } from "react";
import { ProductDto } from "@/models/Product.model";
import { ROUTES } from "@/constants/routes.const";

interface ProductDetailsProps {
  name: string;
}

export const ProductDetails: FC<ProductDetailsProps> = memo(async ({ name }) => {
  const productData: ProductDto | undefined = await getProductDetails(name);

  if (!productData) {
    return <div className="taProductDetails">Product not found</div>;
  }

  //TODO:
  return <div className="taProductDetails">{JSON.stringify(productData)}</div>;
});

async function getProductDetails(name: string): Promise<ProductDto> {
  const res: ProductDto[] = await fetch(ROUTES.product(name)).then((res) => res.json());
  return res[0];
}

//TODO: refactor all
