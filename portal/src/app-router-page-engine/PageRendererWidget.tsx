import { FC, memo } from "react";
import { CmsUnderWidget } from "@/app-router-page-engine/PageEngine.model";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";

interface PageRendererWidgetProps {
  underWidget: CmsUnderWidget;
}

export const PageRendererWidget: FC<PageRendererWidgetProps> = memo(({ underWidget }) => {
  const widgetData = underWidget.widget[0];
  const Widget = PAGE_ENGINE_REGISTER.get(widgetData.__component);
  if (!Widget) {
    return <div>Widget not found: {underWidget.name}</div>;
  }

  return (
    <div className="taPageRendererWidget">
      <Widget key={underWidget.name} {...widgetData} />;
    </div>
  );
});

PageRendererWidget.displayName = "PageRendererWidget";
