import { FC, memo } from "react";
import { AppBar, Box, Container, Link, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import { HeaderMenuLink } from "@/components/Header.model";
import NextLink from "next/link";

interface HeaderProps {
  menu: HeaderMenuLink[];
}

export const Header: FC<HeaderProps> = memo(({ menu }) => {
  return (
    <AppBar position="static" className="taHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src="/next.svg" alt="Next.js logo" width={180} height={38} />

          <Stack paddingLeft={4} flexDirection="row" gap={2}>
            {menu.map(({ url, title }) => (
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
        </Toolbar>
      </Container>
    </AppBar>
  );
});
