import { CmsPage } from "@/app-router-page-engine/PageEngine.model";
import { match } from "path-to-regexp";

export const matchPage = (path: string, cmsPages: CmsPage[]): CmsPage | undefined => {
  cmsPages = cmsPages.filter(({ urlPattern }) => match(urlPattern)(path));

  if (cmsPages.length === 1) {
    return cmsPages[0];
  }

  if (cmsPages.length === 0) {
    console.log(`Page not found, path=${path}`);
    return undefined;
  }

  if (cmsPages.length > 2) {
    console.error(
      "Two many pages for path=${path}: ",
      cmsPages.map(({ urlPattern }) => urlPattern).join(", ")
    );
  }

  if (cmsPages.length == 2) {
    if (!cmsPages[0].urlPattern.includes(":") && cmsPages[1].urlPattern.includes(":")) {
      return cmsPages[0];
    } else if (cmsPages[0].urlPattern.includes(":") && !cmsPages[1].urlPattern.includes(":")) {
      return cmsPages[1];
    } else {
      console.error(
        "Two many pages for path=${path}: ",
        cmsPages.map(({ urlPattern }) => urlPattern).join(", ")
      );
    }
  }
};
