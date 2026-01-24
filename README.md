# Widget-Portal

Here is example of DataService + CMS + Portal based on NextJs where page and widgets can be
configured in runtime with support SSG.

For more info please read paper https://blog.stswoon.ru/pages/2025/Configurable%20Portal/index.html 

![](docs/arch2.png)

## E2E TC

1) Open portal "https://widget-portal.stswoon.ru"
    * ER=AR: BannerWidget displays under HeaderWidget but above ProductListWidget
2) Click on "CMS" button in header (creds `***/***`)
3) Move BannerWidget under ProductListWidget
4) Click "Revalidate" button in header
5) Open portal again
    * ER=AR: BannerWidget displays under ProductListWidget

## Architecture

![](docs/arch.png)

```plantuml
@startuml
autonumber
skinparam responseMessageBelowArrow true
actor User
participant Portal
participant DynamicPortalPage
participant AppRouterPageEngine
participant CMS_Strapi
participant PageEngineRenderWidget
participant PAGE_ENGINE


User -> Portal: /portal

== Register widgets ==

Portal -> DynamicPortalPage: render SSG, cache and display
DynamicPortalPage -> PAGE_ENGINE: register page render widgets
note over DynamicPortalPage
PAGE_ENGINE.register("widgets.splitter", Splitter);
PAGE_ENGINE.register("widgets.product-list",
    dynamic(()=>import("@/widgets/ProductList")
    .then(m=>m.ProductList)));
end note
DynamicPortalPage <-- PAGE_ENGINE

== Render page ==

    DynamicPortalPage -> AppRouterPageEngine++: render
    AppRouterPageEngine -> CMS_Strapi: /api/pages?pLevel
    AppRouterPageEngine <-- CMS_Strapi: StrapiCmsPage[]
    AppRouterPageEngine -> AppRouterPageEngine: use adapter to convert raw StrapiCmsPage\nto some standard CmsPage.\n(Skipped in this prototype)
    AppRouterPageEngine -> AppRouterPageEngine: match StrapiCmsPage by urlPattern
    AppRouterPageEngine -> AppRouterPageEngine++: get widgets from page content zone
    
== Render random widget ==
        
    AppRouterPageEngine -> PageEngineRenderWidget++: render
    note over AppRouterPageEngine
    <PageEngineRenderWidget
        key={strapiCmsPage.contentZone[i].widgetReference.name}
        cmsWidgetReference={strapiCmsPage.contentZone[i].widgetReference}
        urlParams={matchPage(props.path, StrapiCmsPage.urlPattern)}
    />
    end note
    
        PageEngineRenderWidget -> PAGE_ENGINE: get widget by name
        note over PageEngineRenderWidget
        Widget = PAGE_ENGINE.get(cmsWidgetReference.__component)
        end note
        PageEngineRenderWidget <-- PAGE_ENGINE: ReactComponent
        PageEngineRenderWidget -> ReactComponent**: render
        note over PageEngineRenderWidget
        const widgetProps = {...cmsWidgetProps, ...urlParams};
        return (<Widget {...widgetProps} />)
        end note
        PageEngineRenderWidget <-- ReactComponent
      
    AppRouterPageEngine <-- PageEngineRenderWidget--
    
    AppRouterPageEngine--
    DynamicPortalPage <-- AppRouterPageEngine--
    
Portal <-- DynamicPortalPage: SSG

User <-- Portal: HTML, CSS, JS

@enduml
```

## Plan

* [x] next, standalone, mui, prettier
* [x] data-service, stubdata
* [x] cms, types, pages
* [x] docker, deploy
* [x] normal app
* [x] normal app: ssg
* [x] normal app: standalone
* [x] page-renderer
* [x] page-renderer: widget in widget
* [x] page-renderer: server - client - server widget: update checkout
* [x] page-renderer: reset
* [x] todos, refactor
* [x] architecture docs, paper in blog

## Strapi

* creds: `user@user.xxx \ One12345`
* readonly token
  ```
  4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43
  ```

Request

```
GET http://localhost:3401/api/pages?pLevel
Authorization: Bearer 4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43
```

## Data-Service

Request

```
GET http://localhost:3402/posts
```

## Portal

docker build and expose 3 port + 1 for 80

```
docker build . -t widget-portal:v1
docker run --rm --name widget-portal-container -p 8200:3400 -p 8201:3401 -p 8202:3402 -m 2048m widget-portal:v1
```

Used `standalone` mode because it save memory very much.
