import { CmsPage } from "@/app-router-page-engine/PageEngine.model";
import { match, ParamData } from "path-to-regexp";

export type SimpleUrlParams = Record<string, string>;

export type MatchPageReturnType = [CmsPage | undefined, SimpleUrlParams | undefined];

export const matchPage = (path: string, cmsPages: CmsPage[]): MatchPageReturnType => {
  const cmsPage = matchPageOnly(path, cmsPages);
  if (!cmsPage) {
    return [undefined, undefined];
  }
  const urlMatchResult = match(cmsPage.urlPattern)(decodeURI(path));
  if (!urlMatchResult) {
    return [undefined, undefined];
  }
  const params = convertToSimpleUrlParams(urlMatchResult.params);
  return [cmsPage, params];
};

const convertToSimpleUrlParams = (params: ParamData): SimpleUrlParams => {
  return Object.entries(params).reduce<SimpleUrlParams>((acc, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value.join(",");
    } else {
      acc[key] = value as string;
    }
    return acc;
  }, {});
};

export const matchPageOnly = (path: string, cmsPages: CmsPage[]): CmsPage | undefined => {
  cmsPages = cmsPages.filter(({ urlPattern }) => {
    if (match(urlPattern)(path)) {
      return true;
    } else {
      return urlPattern === path || urlPattern === decodeURI(path);
    }
  });

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
