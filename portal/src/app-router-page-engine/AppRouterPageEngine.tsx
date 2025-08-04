import { FC, memo, ReactNode } from "react";
import { CMS_TOKEN } from "@/constants/secrets";
import { ROUTES } from "@/constants/routes.const";
import { CmsPageResponse } from "@/app-router-page-engine/PageEngine.model";
import { matchPage } from "@/app-router-page-engine/pageRender.util";
import { PageEngineRenderWidget } from "@/app-router-page-engine/PageEngineRenderWidget";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

interface PageEngineProps {
  path: string;
  customHelperComponent?: ReactNode;
}

export const AppRouterPageEngine: FC<PageEngineProps> = memo(async (props) => {
  console.log(`AppRouterPageEngine::path=${props.path}`);

  const cmsToken = CMS_TOKEN;
  console.log(`AppRouterPageEngine::cmsToken=${cmsToken}`);

  const cmsPageResponse: CmsPageResponse = await fetch(ROUTES.cmsPages, {
    method: "GET",
    headers: { Authorization: `Bearer ${cmsToken}` }
  }).then((res) => res.json());

  //here should be CmsAdapter pattern to converter Strapi CMS model or other CMS model
  //into standard PageEngine model but it is skipped because it is only PoC.

  const [matchedPage, urlParams] = matchPage(props.path, cmsPageResponse.data);
  if (!matchedPage) {
    notFound();
  }

  console.log(`AppRouterPageEngine::found page=${matchedPage.urlPattern}, urlParams=`, urlParams);

  return (
    <Box className="taAppRouterPageEngine">
      {!!matchedPage.headerWidget && (
        <PageEngineRenderWidget
          cmsWidgetReference={matchedPage.headerWidget}
          urlParams={urlParams}
        />
      )}

      {matchedPage.contentZone.map((cmsWidgetReference) => {
        return (
          <PageEngineRenderWidget
            key={cmsWidgetReference.name}
            cmsWidgetReference={cmsWidgetReference}
            urlParams={urlParams}
            customHelperComponent={props.customHelperComponent}
          />
        );
      })}
    </Box>
  );
});

AppRouterPageEngine.displayName = "AppRouterPageEngine";
