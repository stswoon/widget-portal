'use client'

import { FC, memo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import useSWR from "swr";
import { ROUTES } from "@/constants/routes.const";
import { AlertError } from "@/components/AlertError";
import { OrderDto } from "@/models/order.model";
import { getFetcher } from "@/utils/utils";

//TODO: add to strapi, link to open strapi, server compoentn in checkout, remove TEST components

export const Checkout: FC = memo(() => {
  const { data: order, error, isLoading } = useSWR<OrderDto>(ROUTES.getOrder, getFetcher);
  return (
    <Box className="taCheckout">
      {!!error && <AlertError message={`Failed to get order: ${error.message}`} />}
      {isLoading && <CircularProgress size="50px" />}

      {order && (
        <>
          <Typography>Order id: {order.id}</Typography>
          <Typography>Thank you that you buy {order.productName}</Typography>
          <Typography>Count: {order.count}</Typography>
        </>
      )}
    </Box>
  );
});

Checkout.displayName = "Checkout";
