FROM node:22.11.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run install:all
RUN npm run build:all

FROM node:22.11.0-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/portal/.next/standalone ./portal
COPY --from=builder /app/cms ./cms
COPY --from=builder /app/data-service ./data-service
EXPOSE 3100
EXPOSE 3101
EXPOSE 3102
ENV PORT=3100
ENV HOSTNAME=0.0.0.0

CMD npm run start:all

# docker build . -t widget-portal:v1
# docker run --rm --name widget-portal-container -p 8200:3100 -p 8201:3101 -p 8202:3102 -e PORT=3100 -e HOSTNAME=0.0.0.0 -m 2048m widget-portal:v1
# docker run --rm --name widget-portal-container -p 8200:3100 -p 8201:3101 -p 8202:3102 -m 2048m widget-portal:v1