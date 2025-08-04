import { FC, memo, ReactNode } from "react";
import { AppBar, Container, Link, Toolbar } from "@mui/material";
import Image from "next/image";
import { LINKS } from "@/constants/routes.const";
import { ClientCmsButton } from "@/components/ClientCmsButton";

interface HeaderProps {
  menuWidget?: ReactNode;
}

export const Header: FC<HeaderProps> = memo(({ menuWidget }) => {
  return (
    <AppBar position="static" className="taHeader">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={LINKS.root}>
            <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority={true} />
          </Link>

          <ClientCmsButton />

          {menuWidget}
        </Toolbar>
      </Container>
    </AppBar>
  );
});

Header.displayName = "Header";
