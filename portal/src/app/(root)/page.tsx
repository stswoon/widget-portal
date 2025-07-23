import { Container } from "@mui/material";
import { Test } from "@/components/Test";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";
import { ProductList } from "@/components/ProductList";

export default function RootPage() {
  return (
    <main className="taRootPage">
      <Header menu={HEADER_MENU_LINKS} />
      <Container maxWidth="xl">
        <ProductList/>
      </Container>
    </main>
  );
}
