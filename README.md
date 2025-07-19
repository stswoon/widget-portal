# Widget-Portal

**Plan**

* [ ] next, standalone, mui, prettier
* [ ] data-service, stubdata
* [ ] cms, types, pages
* [ ] docker, deploy
* [ ] normal app
* [ ] page-renderer-lib
* [ ] architecture docs, paper in blog

## Strapi

* creds: `user@user.xxx \ One12345`
* readonly token
  ```
  4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43
  ```

Request

```
GET http://localhost:3101/api/pages?pLevel
Authorization: Bearer 4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43
```

## Data-Service

Request

```
GET http://localhost:3102/posts
```

## Portal

docker build and expose 3 port + 1 for 80

```
docker build . -t widget-portal:v1
docker run --rm --name widget-portal-container -p 3100:8200 -p 3101:8201 -p 3102:8202 -e PORT=3100 -m 2048m widget-portal:v1
```