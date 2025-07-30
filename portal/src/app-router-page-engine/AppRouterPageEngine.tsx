import { FC, memo } from "react";
import { CMS_TOKEN } from "@/constants/secrets";
import { ROUTES } from "@/constants/routes.const";
import { CmsPageResponse } from "@/app-router-page-engine/PageEngine.model";
import { matchPage } from "@/app-router-page-engine/helper";
import { PageRendererWidget } from "@/app-router-page-engine/PageRendererWidget";
import { Box } from "@mui/material";
import { Error } from "@/components/Error";
import { ErrorBoundary } from "react-error-boundary";

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
    <Box className="taAppRouterPageEngine">
      {!!matchedPage.headerWidget && (
        <ErrorBoundary
          fallback={
            <Error message={`Failed to load widget with name "${matchedPage.headerWidget.name}"`} />
          }
        >
          <PageRendererWidget
            key={matchedPage.headerWidget.name}
            underWidget={matchedPage.headerWidget}
            urlParams={urlParams}
          />
        </ErrorBoundary>
      )}

      {matchedPage.contentZone.map((underWidget) => {
        return (
          <ErrorBoundary
            key={underWidget.name}
            fallback={<Error message={`Failed to load widget with name "${underWidget.name}"`} />}
          >
            <PageRendererWidget
              // key={underWidget.name}
              underWidget={underWidget}
              urlParams={urlParams}
            />
          </ErrorBoundary>
        );
      })}
    </Box>
  );
});

AppRouterPageEngine.displayName = "AppRouterPageEngine";
