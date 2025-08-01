import { FC, memo } from "react";
import { Alert } from "@mui/material";

interface AlertErrorProps {
  message: string;
}

export const AlertError: FC<AlertErrorProps> = memo(({ message }) => {
  return (
    <Alert className="taError" severity="error">
      {message}
    </Alert>
  );
});

AlertError.displayName = "Error";
