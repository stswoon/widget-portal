"use client";

import { FC, memo } from "react";
import { Button, Stack } from "@mui/material";

export const ClientCmsButton: FC = memo(() => {
  return (
    <Stack className="taClientCmsButton" direction="row" gap={2} marginLeft={4}>
      <Button
        variant="contained"
        onClick={() => (window.location.href = "http://" + window.location.hostname + ":3401")}
      >
        CMS
      </Button>
      <Button variant="contained" onClick={() => (window.location.href = "/api/revalidate")}>
        Revalidate
      </Button>
    </Stack>
  );
});

ClientCmsButton.displayName = "ClientCmsButton";
