import { FC, memo } from "react";
import { CMS_TOKEN } from "@/constants/secrets";
import { ROUTES } from "@/constants/routes.const";
import { CmsPageResponse } from "@/app-router-page-engine/PageEngine.model";
import { matchPage } from "@/app-router-page-engine/helper";
import { PageRendererWidget } from "@/app-router-page-engine/PageRendererWidget";

interface PageEngineProps {
  path: string;
}

export const AppRouterPageEngine: FC<PageEngineProps> = memo(async ({ path }) => {
  const cmsPageResponse: CmsPageResponse = await fetch(ROUTES.cmsPages, {
    method: "GET",
    headers: { Authorization: `Bearer ${CMS_TOKEN}` }
  }).then((res) => res.json());

  const [matchedPage, urlParams] = matchPage(path, cmsPageResponse.data);
  if (!matchedPage) {
    // TODO
    return <div>Page not found</div>;
  }

  console.log(`AppRouterPageEngine::found page=${matchedPage.urlPattern}, urlParams=`, urlParams);

  return (
    <div className="taAppRouterPageEngine">
      {!!matchedPage.headerWidget && (
        <PageRendererWidget
          key={matchedPage.headerWidget.name}
          underWidget={matchedPage.headerWidget}
          urlParams={urlParams}
        />
      )}

      {matchedPage.contentZone.map((underWidget) => {
        return (
          <PageRendererWidget
            key={underWidget.name}
            underWidget={underWidget}
            urlParams={urlParams}
          />
        );
      })}
    </div>
  );
});

AppRouterPageEngine.displayName = "AppRouterPageEngine";
