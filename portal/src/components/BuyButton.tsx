"use client";

import { FC, memo, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { LINKS } from "@/constants/routes.const";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const BuyButton: FC = memo(() => {
  const [count, setCount] = useState(1);

  return (
    <Stack className="taBuyButton" gap={2} width="300px">
      <Stack direction="row" gap={2} justifyContent="space-between">
        <Button size="large" variant="outlined" color="success" onClick={() => setCount(count - 1)}>
          <RemoveIcon />
        </Button>
        <Typography variant="h3">{count}</Typography>
        <Button size="large" variant="outlined" color="success" onClick={() => setCount(count + 1)}>
          <AddIcon />
        </Button>
      </Stack>
      <Button size="large" variant="contained" color="success" href={LINKS.checkout}>
        Buy
      </Button>
    </Stack>
  );
});

BuyButton.displayName = "BuyButton";
