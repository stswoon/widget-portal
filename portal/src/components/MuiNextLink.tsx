"use client";

import NextLink from "next/link";
import { Link, LinkProps } from "@mui/material";
import { forwardRef } from "react";

type Props = Omit<LinkProps, "component" | "href"> & { href: string };

export const MuiNextLink = forwardRef<HTMLAnchorElement, Props>(function MuiNextLink(
  { href, ...props },
  ref
) {
  return <Link ref={ref} component={NextLink} href={href} {...props} />;
});
