"use client";

import React, { FC, memo, ReactNode } from "react";
import { CircularProgress, Container, Stack, Typography } from "@mui/material";
import useSWR from "swr";
import { ROUTES } from "@/constants/routes.const";
import { AlertError } from "@/components/AlertError";
import { OrderDto } from "@/models/order.model";
import { getFetcher } from "@/utils/utils";
import { useSearchParams } from "next/navigation";

const COUNT_FOR_DISCOUNT = 3;

interface CheckoutProps {
  customHelperComponent: ReactNode;
}

export const Checkout: FC<CheckoutProps> = memo(({ customHelperComponent }) => {
  // if (isServer()) {
  //   console.error("SHOULD NOT CALLED ON SERVER");
  // }

  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");

  const {
    data: order,
    error,
    isLoading
  } = useSWR<OrderDto>(orderId ? ROUTES.getOrder(orderId) : null, getFetcher);

  if (!order) {
    // notFound();
  }

  return (
    <Container maxWidth="xl" className="taProductDetails">
      {!!error && <AlertError message={`Failed to get order: ${error.message}`} />}
      {isLoading && <CircularProgress size="50px" />}

      {order && (
        <Stack direction="column" gap={2} alignItems="center">
          <Typography>Thank you that you buy</Typography>
          <Typography fontWeight="bold">{order.productName}</Typography>
          <Typography>Order id: {order.id}</Typography>
          <Typography>Count: {order.count}</Typography>

          {order.count >= COUNT_FOR_DISCOUNT && customHelperComponent}
        </Stack>
      )}
    </Container>
  );
});

Checkout.displayName = "Checkout";
