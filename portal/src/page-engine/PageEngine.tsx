import { FC, memo } from "react";

interface PageEngineProps {
  cmsUrl: string;
}

//TODO:
export const PageEngine: FC<PageEngineProps> = memo(({ cmsUrl }) => {
  return <div className="taPageEngine">PageEngine component {cmsUrl}</div>;
});
PageEngine.displayName = "PageEngine";
