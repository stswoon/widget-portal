"use client";

import { FC, memo, useCallback, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { LINKS, ROUTES } from "@/constants/routes.const";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { OrderDto } from "@/models/order.model";
import { AlertError } from "@/components/AlertError";
import { postFetcher } from "@/utils/utils";

export interface BuyButtonProps {
  productName: string;
}

export const BuyButton: FC<BuyButtonProps> = memo(({ productName }) => {
  const router = useRouter();

  const [count, setCount] = useState(1);

  const { trigger, error, isMutating } = useSWRMutation(ROUTES.postOrder, postFetcher<OrderDto>);

  const buy = useCallback(async () => {
    const order = await trigger({ productName, count });
    router.push(LINKS.checkout(order.id));
  }, [count, productName, router, trigger]);

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
      <Button size="large" variant="contained" color="success" onClick={buy} loading={isMutating}>
        Buy
      </Button>
      {!!error && <AlertError message={`Failed to checkout: ${error.message}`} />}
    </Stack>
  );
});

BuyButton.displayName = "BuyButton";
