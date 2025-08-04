import { FC, memo } from "react";
import { Box, Typography } from "@mui/material";
import { SECRET_DISCOUNT } from "@/constants/secrets";

export const Discount: FC = memo(() => {
  return (
    <Box className="taDiscount">
      {/*TODO: should display in SSG ??? */}
      <Typography variant={"h3"}>You got {SECRET_DISCOUNT} discount!</Typography>
    </Box>
  );
});

Discount.displayName = "Discount";
