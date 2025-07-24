import { FC, memo } from "react";

interface PageEngineProps {
  cmsUrl: string;
}

export const PageEngine: FC<PageEngineProps> = memo(({ cmsUrl: string }) => {
  return <div className="taPageEngine">PageEngine component</div>;
});
