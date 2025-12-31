import urlJoin from "url-join";

const SELF = "http://localhost:3400";
// const SELF_DYNAMIC = () => (isServer() ? SELF : "");

export const ROUTES = {
  products: `${SELF}/api/proxy/data/products`,
  defaultProductImg: "/default-product.png",
  productImg: (imgSrc: string) => urlJoin("/api/proxy/data", imgSrc),
  product: (name: string) => `${SELF}/api/proxy/data/products?name=${name}`,
  cmsPages: `${SELF}/api/proxy/cms/api/pages?pLevel`,
  postOrder: `/api/proxy/data/orders`,
  getOrder: (id: string) => `/api/proxy/data/orders/${id}`
};

const PORTAL_LINK = "/portal";

export const LINKS = {
  root: "/",
  portal: PORTAL_LINK,

  checkout: (id: string) => `${PORTAL_LINK}/checkout?id=${id}`,
  product: (name: string) => `${LINKS.portal}/product/${name}`
};
