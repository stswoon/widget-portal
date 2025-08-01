import { FC, memo } from "react";
import { CmsWidgetReference } from "@/app-router-page-engine/PageEngine.model";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";
import { Error } from "@/components/Error";
import SkipNotFoundErrorBoundary from "@/components/SkipNotFoundErrorBoundary";

interface PageEngineRenderWidgetProps {
  cmsWidgetReference: CmsWidgetReference;
  urlParams?: Record<string, string>;
}

export const PageEngineRenderWidget: FC<PageEngineRenderWidgetProps> = memo(async (props) => {
  const widgetData = props.cmsWidgetReference.widget[0];
  const Widget = PAGE_ENGINE_REGISTER.get(widgetData.__component);
  if (!Widget) {
    return (
      <div className="taPageRendererWidget">
        <Error message={`Widget not found: ${widgetData.__component}`} />
      </div>
    );
  }

  for (const key in widgetData) {
    const anyWidgetValue: unknown | CmsWidgetReference = widgetData[key];
    if ((anyWidgetValue as CmsWidgetReference).widget) {
      //means inner widget
      widgetData[key] = (
        <PageEngineRenderWidget cmsWidgetReference={anyWidgetValue as CmsWidgetReference} />
      );
    }
  }

  return (
    <div className="taPageRendererWidget">
      <SkipNotFoundErrorBoundary
        fallback={
          <Error message={`Failed to load widget with name "${props.cmsWidgetReference.name}"`} />
        }
      >
        <Widget key={props.cmsWidgetReference.name} {...widgetData} {...props.urlParams} />
      </SkipNotFoundErrorBoundary>
    </div>
  );
});

PageEngineRenderWidget.displayName = "PageEngineRenderWidget";
