import { FC, memo, ReactNode } from "react";

interface ClientTestWidgetProps {
  serverWidget: ReactNode;
}

export const ClientTestWidget: FC<ClientTestWidgetProps> = memo(({ serverWidget }) => {
  return (
    <div className="taClientTestWidget">
      <div>ClientTestWidget component</div>
      <div>{serverWidget}</div>
    </div>
  );
});

ClientTestWidget.displayName = "ClientTestWidget";
