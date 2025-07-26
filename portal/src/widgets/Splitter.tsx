import { FC, memo } from "react";
import { Box } from "@mui/material";

const DEFAULT_SPLIT = 32;

export interface SplitterProps {
  value?: number;
}

export const Splitter: FC<SplitterProps> = memo(({ value }) => {
  return <Box className="taSplitter" height={value ?? DEFAULT_SPLIT} />;
});

Splitter.displayName = "Splitter";
