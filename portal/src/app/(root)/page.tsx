import { Link } from "@mui/material";

export default function RootPage() {
  console.log("RootPage");
  return (
    <main className="taRootPage">
      <Link href="/portal">Go to Portal</Link>
    </main>
  );
}
