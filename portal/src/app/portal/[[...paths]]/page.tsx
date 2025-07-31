import { FC } from "react";
import { AppRouterPageEngine } from "@/app-router-page-engine/AppRouterPageEngine";
import { PAGE_ROUTE_REGISTER_SERVICE } from "@/utils/page-route-register.service";
import { LINKS } from "@/constants/routes.const";
import { registerPageRenderWidgets } from "@/utils/register-widgets";
import urlJoin from "url-join";

export const revalidate = 120; //cannot assign constant from other file
export const dynamicParams = true; // or false, to 404 on unknown paths
export const generateStaticParams = async () => []; // to spic generate pages for all paths, generate only by demand

registerPageRenderWidgets();

interface DynamicPortalPageProps {
  params: Promise<{ paths: string[] | undefined }>;
}

const DynamicPortalPage: FC<DynamicPortalPageProps> = async ({ params }) => {
  const { paths } = await params;
  const path = "/" + (paths ?? []).join("/");
  console.log(`DynamicPortalPage::path=${path}`);
  PAGE_ROUTE_REGISTER_SERVICE.register(urlJoin(LINKS.portal, path));
  return (
    <main className="taDynamicPortalPage">
      <AppRouterPageEngine path={path} />
    </main>
  );
};

export default DynamicPortalPage;