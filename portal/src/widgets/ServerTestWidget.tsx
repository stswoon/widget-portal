import { FC, memo } from "react";

interface ServerTestWidgetProps {
  randomText: string;
}

export const ServerTestWidget: FC<ServerTestWidgetProps> = memo(async ({ randomText }) => {
  return (
    <div className="taServerTestWidget" style={{ border: "1px solid gray" }}>
      <div>ServerTestWidget</div>
      <div>randomText: {randomText}</div>
    </div>
  );
});

ServerTestWidget.displayName = "ServerTestWidget";
