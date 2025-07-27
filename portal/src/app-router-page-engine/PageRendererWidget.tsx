import { FC, memo } from "react";
import { CmsUnderWidget } from "@/app-router-page-engine/PageEngine.model";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";

interface PageRendererWidgetProps {
  underWidget: CmsUnderWidget;
  urlParams?: Record<string, string>;
}

export const PageRendererWidget: FC<PageRendererWidgetProps> = memo(
  ({ underWidget, urlParams }) => {
    const widgetData = underWidget.widget[0];
    const Widget = PAGE_ENGINE_REGISTER.get(widgetData.__component);
    if (!Widget) {
      return <div>Widget not found: {widgetData.__component}</div>;
    }

    for (const key in widgetData) {
      //TODO:
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyWidgetValue = widgetData[key] as any;
      if (anyWidgetValue?.widget) {
        //means inner widget
        const innerWidget = <PageRendererWidget underWidget={anyWidgetValue} />;
        widgetData[key] = innerWidget;
      }
    }

    return (
      <div className="taPageRendererWidget">
        <Widget key={underWidget.name} {...widgetData} {...urlParams} />
      </div>
    );
  }
);

PageRendererWidget.displayName = "PageRendererWidget";
