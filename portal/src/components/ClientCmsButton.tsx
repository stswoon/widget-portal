"use client";

import { FC, memo } from "react";
import { Button } from "@mui/material";

export const ClientCmsButton: FC = memo(() => {
  return (
    <Button
      sx={{ marginLeft: 4 }}
      variant="contained"
      className="taClientCmsButton"
      onClick={() =>
        (window.location.href =
          window.location.protocol + "//" + window.location.hostname + ":3101")
      }
    >
      CMS
    </Button>
  );
});

ClientCmsButton.displayName = "ClientCmsButton";
