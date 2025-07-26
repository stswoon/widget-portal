import { permanentRedirect } from "next/navigation";
import { LINKS } from "@/constants/routes.const";

// need to avoid circular dependency because /app/[[...path]] catch all requests
// even api and system like .well-known/xxx.
// In page router direct routes have more priority so no such issue there
export default function RootPage() {
  console.log("RootPage");
  permanentRedirect(LINKS.portal);
}
