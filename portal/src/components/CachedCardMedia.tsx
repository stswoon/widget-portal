import { FC, memo } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Property } from "csstype";

interface CachedCardMediaProps {
  image: string;
  height: number;
  width: number;
  objectFit: Property.ObjectFit;
}

/**
 * CardMedia do not cache images to use own
 */
export const CachedCardMedia: FC<CachedCardMediaProps> = memo((props) => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Image
        src={props.image}
        alt={props.image}
        style={{ objectFit: props.objectFit }}
        height={props.height}
        width={props.width}
        priority // or use loading="lazy"
      />
    </Box>
  );
});

CachedCardMedia.displayName = "CachedCardMedia";
