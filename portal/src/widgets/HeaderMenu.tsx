import { FC, memo } from "react";
import {  Link, Stack } from "@mui/material";
import NextLink from "next/link";

export interface HeaderMenuLink {
  title: string;
  url: string;
}

interface HeaderMenuProps {
  menu: HeaderMenuLink[];
}

export const HeaderMenu: FC<HeaderMenuProps> = memo(({ menu }) => {
  return (
    <Stack paddingLeft={4} flexDirection="row" gap={2} className="taHeaderMenu">
      {(menu ?? []).map(({ url, title }) => (
        <Link
          key={url}
          href={url}
          variant="button"
          color="textSecondary"
          underline="hover"
          component={NextLink}
        >
          {title}
        </Link>
      ))}
    </Stack>
  );
});

HeaderMenu.displayName = "HeaderMenu";

// [
//   {
//     "title": "Samsung Galaxy S24 Ultra",
//     "url": "/portal/product/Samsung%20Galaxy%20S24%20Ultra"
//   },
//   {
//     "title": "Apple iPhone 15 Pro",
//     "url": "/portal/product/Apple%20iPhone%2015%20Pro"
//   },
//   {
//     "title": "Google Pixel 404",
//     "url": "/portal/product/google-pixel-404-not-exist"
//   },
//   {
//     "title": "About",
//     "url": "/portal/about"
//   }
// ]