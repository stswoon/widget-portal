const SELF = "http://localhost:3100";

export const ROUTES = {
  products: `${SELF}/api/proxy/data/products`,
  defaultProductImg: "/default-product.png",
  productImg: (imgSrc: string) => `/api/proxy/data/${imgSrc}`,
  product: (name: string) => `${SELF}/api/proxy/data/products?name=${name}`,
  cmsPages: `${SELF}/api/proxy/cms/api/pages?pLevel`
};

export const LINKS = {
  root: "/",
  product: (name: string) => `/product/${name}`
};
