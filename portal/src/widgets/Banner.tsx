import { FC, memo } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

export const Banner: FC = memo(() => {
  return (
    <Box className="taBanner" bgcolor="#b50707" display="flex" justifyContent="center">
      <Image src="/banner.png" alt="banner" width={370} height={250} priority={true}/>
    </Box>
  );
});
Banner.displayName = "Banner";
