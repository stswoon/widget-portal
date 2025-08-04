import { isServer } from "@/utils/utils";

export const CMS_TOKEN = !isServer()
  ? undefined
  : "4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43";

export const SECRET_DISCOUNT = isServer() ? "10%" : undefined;
