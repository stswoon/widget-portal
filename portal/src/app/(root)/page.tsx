import { Button } from "@mui/material";
import { Test } from "@/components/Test";
import { Header } from "@/components/Header";
import { HEADER_MENU_LINKS } from "@/constants/portal-data.const";

export default function Home() {
  return (
    <div>
      <main>
        <Header menu={HEADER_MENU_LINKS} />
        <Button variant={"contained"}>Mui Button</Button>
        <Test></Test>
      </main>
    </div>
  );
}
