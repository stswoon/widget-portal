import { FC, memo } from "react";
import { Box } from "@mui/material";

const DEFAULT_SPLIT = "32px";

export interface SplitterProps {
  value?: string;
}

export const Splitter: FC<SplitterProps> = memo(({ value }) => {
  value = (value ?? DEFAULT_SPLIT).replace("px", "");
  return <Box className="taSplitter" height={value + "px"} />;
});

Splitter.displayName = "Splitter";
