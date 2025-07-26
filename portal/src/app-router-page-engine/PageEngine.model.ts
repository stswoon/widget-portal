export interface CmsPageResponse {
  data: CmsPage[];
}

export interface CmsPage {
  /**
   * "/product/:id"
   */
  urlPattern: string;
  headerWidget: CmsUnderWidget;
  contentZone: CmsUnderWidget[];
}

//TODO cmsAdapter

export interface CmsUnderWidget {
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
  [key: string]: unknown;
}
