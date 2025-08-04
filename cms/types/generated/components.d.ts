import type { Schema, Struct } from '@strapi/strapi';

export interface WidgetsBannerWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_banner_widgets';
  info: {
    displayName: 'BannerWidget';
  };
  attributes: {};
}

export interface WidgetsCheckoutWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_checkout_widgets';
  info: {
    displayName: 'CheckoutWidget';
  };
  attributes: {};
}

export interface WidgetsClientTestWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_client_test_widgets';
  info: {
    displayName: 'ClientTestWidget';
  };
  attributes: {};
}

export interface WidgetsHeaderWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_header_widgets';
  info: {
    displayName: 'HeaderWidget';
  };
  attributes: {
    menuWidget: Schema.Attribute.Relation<
      'oneToOne',
      'api::widget-instance.widget-instance'
    >;
  };
}

export interface WidgetsHtmlWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_html_widgets';
  info: {
    displayName: 'HtmlWidget';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface WidgetsMenuWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_menu_widgets';
  info: {
    displayName: 'MenuWidget';
  };
  attributes: {
    menu: Schema.Attribute.JSON;
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
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WidgetsServerTestWidget extends Struct.ComponentSchema {
  collectionName: 'components_widgets_server_test_widgets';
  info: {
    displayName: 'ServerTestWidget';
  };
  attributes: {};
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
      'widgets.banner-widget': WidgetsBannerWidget;
      'widgets.checkout-widget': WidgetsCheckoutWidget;
      'widgets.client-test-widget': WidgetsClientTestWidget;
      'widgets.header-widget': WidgetsHeaderWidget;
      'widgets.html-widget': WidgetsHtmlWidget;
      'widgets.menu-widget': WidgetsMenuWidget;
      'widgets.product-list': WidgetsProductList;
      'widgets.product-widget': WidgetsProductWidget;
      'widgets.server-test-widget': WidgetsServerTestWidget;
      'widgets.splitter': WidgetsSplitter;
    }
  }
}
