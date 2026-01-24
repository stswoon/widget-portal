import { FC, memo, ReactNode } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import { LINKS } from "@/constants/routes.const";
import { ClientCmsButton } from "@/components/ClientCmsButton";
import { MuiNextLink } from "@/components/MuiNextLink";

interface HeaderProps {
  menuWidget?: ReactNode;
}

export const Header: FC<HeaderProps> = memo(({ menuWidget }) => {
  return (
    <AppBar position="static" className="taHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MuiNextLink href={LINKS.root}>
            <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority={true} />
          </MuiNextLink>

          <ClientCmsButton />

          {menuWidget}
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = "Header";
