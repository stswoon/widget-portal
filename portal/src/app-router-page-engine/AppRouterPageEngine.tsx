import { FC, memo } from "react";
import { CMS_TOKEN } from "@/constants/secrets";
import { ROUTES } from "@/constants/routes.const";
import { CmsPageResponse } from "@/app-router-page-engine/PageEngine.model";
import { matchPage } from "@/app-router-page-engine/helper";
import { PageRendererWidget } from "@/app-router-page-engine/PageRendererWidget";
import { Box } from "@mui/material";
import { Error } from "@/components/Error";
import { notFound } from "next/navigation";
import SkipNotFoundErrorBoundary from "@/components/SkipNotFoundErrorBoundary";

interface PageEngineProps {
  path: string;
}

export const AppRouterPageEngine: FC<PageEngineProps> = memo(async ({ path }) => {
  console.log(`AppRouterPageEngine::path=${path}`);

  const cmsToken = CMS_TOKEN;
  console.log(`AppRouterPageEngine::cmsToken=${cmsToken}`);

  const cmsPageResponse: CmsPageResponse = await fetch(ROUTES.cmsPages, {
    method: "GET",
    headers: { Authorization: `Bearer ${cmsToken}` }
  }).then((res) => res.json());

  //here should be CmsAdapter pattern to converter Strapi CMS model or other CMS model
  // into standard PageEngine model but it is skipped because it is only PoC.

  const [matchedPage, urlParams] = matchPage(path, cmsPageResponse.data);
  if (!matchedPage) {
    notFound();
  }

  console.log(`AppRouterPageEngine::found page=${matchedPage.urlPattern}, urlParams=`, urlParams);

  return (
    <Box className="taAppRouterPageEngine">
      {!!matchedPage.headerWidget && (
        <SkipNotFoundErrorBoundary
          fallback={
            <Error message={`Failed to load widget with name "${matchedPage.headerWidget.name}"`} />
          }
        >
          <PageRendererWidget
            key={matchedPage.headerWidget.name}
            underWidget={matchedPage.headerWidget}
            urlParams={urlParams}
          />
        </SkipNotFoundErrorBoundary>
      )}

      {matchedPage.contentZone.map((underWidget) => {
        return (
          <SkipNotFoundErrorBoundary
            key={underWidget.name}
            fallback={<Error message={`Failed to load widget with name "${underWidget.name}"`} />}
          >
            <PageRendererWidget
              key={underWidget.name}
              underWidget={underWidget}
              urlParams={urlParams}
            />
          </SkipNotFoundErrorBoundary>
        );
      })}
    </Box>
  );
});

AppRouterPageEngine.displayName = "AppRouterPageEngine";
