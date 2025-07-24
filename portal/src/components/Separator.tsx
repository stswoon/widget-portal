import { FC, memo } from "react";
import { Box } from "@mui/material";

export const Separator: FC = memo(() => {
  return <Box className="taSeparator" height={32} />;
});
