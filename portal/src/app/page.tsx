import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { Test } from "@/components/Test";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Button variant={"contained"}>Mui Button</Button>
        <Test></Test>
      </main>
    </div>
  );
}
