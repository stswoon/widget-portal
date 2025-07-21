import { FC, memo } from "react";
import { AppBar, Box, Container, Link, Toolbar } from "@mui/material";
import Image from "next/image";
import { HeaderMenuLink } from "@/components/Header.model";

interface HeaderProps {
  menu: HeaderMenuLink[];
}

export const Header: FC<HeaderProps> = memo(({ menu }) => {
  return (
    <div className="taHeader">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src="/next.svg" alt="Next.js logo" width={180} height={38} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {menu.map(({ url, title }) => (
                <Link
                  key={url}
                  href={url}
                  variant="button"
                  color="textSecondary"
                  underline="hover"
                >
                  {title}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
});
