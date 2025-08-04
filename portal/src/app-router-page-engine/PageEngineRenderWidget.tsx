import { FC, memo, ReactNode } from "react";
import { CmsWidgetReference } from "@/app-router-page-engine/PageEngine.model";
import { PAGE_ENGINE_REGISTER } from "@/app-router-page-engine/PageEngineRegister";
import { AlertError } from "@/components/AlertError";
import SkipNotFoundErrorBoundary from "@/components/SkipNotFoundErrorBoundary";

interface PageEngineRenderWidgetProps {
  cmsWidgetReference: CmsWidgetReference;
  urlParams?: Record<string, string>;

  customHelperComponent?: ReactNode;
}

export const PageEngineRenderWidget: FC<PageEngineRenderWidgetProps> = memo(async (props) => {
  const widgetData = props.cmsWidgetReference.widget[0];
  const Widget = PAGE_ENGINE_REGISTER.get(widgetData.__component);
  if (!Widget) {
    return (
      <div className="taPageRendererWidget">
        <AlertError message={`Widget not found: ${widgetData.__component}`} />
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

  const widgetProps = {
    ...widgetData,
    ...props.urlParams,
    customHelperComponent: props.customHelperComponent
  };

  return (
    <div className="taPageRendererWidget">
      <SkipNotFoundErrorBoundary
        fallback={
          <AlertError
            message={`Failed to load widget with name "${props.cmsWidgetReference.name}"`}
          />
        }
      >
        <Widget key={props.cmsWidgetReference.name} {...widgetProps} />
      </SkipNotFoundErrorBoundary>
    </div>
  );
});

PageEngineRenderWidget.displayName = "PageEngineRenderWidget";
