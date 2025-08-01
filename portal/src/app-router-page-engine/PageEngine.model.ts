export interface CmsPageResponse {
  data: CmsPage[];
}

export interface CmsPage {
  /**
   * "/product/:id"
   */
  urlPattern: string;
  headerWidget: CmsWidgetReference;
  contentZone: CmsWidgetReference[];
}

export interface CmsWidgetReference {
  name: string;
  widget: CmsWidget[];
}

export interface CmsWidget {
  /**
   *  "widgets.header-widget"
   */
  __component: string;

  /**
   * component props
   */
  [key: string]: unknown | CmsWidgetReference;
}
