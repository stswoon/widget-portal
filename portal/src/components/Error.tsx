import { FC, memo } from "react";
import { Alert } from "@mui/material";

interface ErrorProps {
  message: string;
}

export const Error: FC<ErrorProps> = memo(({ message }) => {
  return (
    <Alert className="taError" severity="error">
      {message}
    </Alert>
  );
});

Error.displayName = "Error";
