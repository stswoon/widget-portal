import { FC, memo } from "react";
import { CmsUnderWidget } from "@/app-router-page-engine/PageEngine.model";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";

interface PageRendererWidgetProps {
  underWidget: CmsUnderWidget;
  urlParams?: Record<string, string>;
}

export const PageRendererWidget: FC<PageRendererWidgetProps> = memo(
  async (props) => {
    const widgetData = props.underWidget.widget[0];
    const Widget = PAGE_ENGINE_REGISTER.get(widgetData.__component);
    if (!Widget) {
      return <div>Widget not found: {widgetData.__component}</div>;
    }

    for (const key in widgetData) {
      const anyWidgetValue: unknown | CmsUnderWidget = widgetData[key];
      if ((anyWidgetValue as CmsUnderWidget).widget) {
        //means inner widget
        widgetData[key] = <PageRendererWidget underWidget={anyWidgetValue as CmsUnderWidget} />;
      }
    }

    return (
      <div className="taPageRendererWidget">
        <Widget key={props.underWidget.name} {...widgetData} {...(props.urlParams)} />
      </div>
    );
  }
);

PageRendererWidget.displayName = "PageRendererWidget";
