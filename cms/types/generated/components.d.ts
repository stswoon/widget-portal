import type { Schema, Struct } from '@strapi/strapi';

export interface WidgetsHeaderWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_header_widgets';
  info: {
    displayName: 'HeaderWidget';
  };
  attributes: {
    menuConfiguration: Schema.Attribute.JSON;
  };
}

export interface WidgetsHtmlWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_html_widgets';
  info: {
    displayName: 'HtmlWidget';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface WidgetsProductList extends Struct.ComponentSchema {
  collectionName: 'components_widgets_product_lists';
  info: {
    displayName: 'ProductList';
  };
  attributes: {};
}

export interface WidgetsProductWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_product_widgets';
  info: {
    displayName: 'ProductWidget';
  };
  attributes: {
    marketingWidget: Schema.Attribute.Relation<
      'oneToOne',
      'api::widget-instance.widget-instance'
    >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsSplitter extends Struct.ComponentSchema {
  collectionName: 'components_widgets_splitters';
  info: {
    displayName: 'Splitter';
  };
  attributes: {
    value: Schema.Attribute.Enumeration<['px10', 'px20', 'px40']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'widgets.header-widget': WidgetsHeaderWidget;
      'widgets.html-widget': WidgetsHtmlWidget;
      'widgets.product-list': WidgetsProductList;
      'widgets.product-widget': WidgetsProductWidget;
      'widgets.splitter': WidgetsSplitter;
    }
  }
}
