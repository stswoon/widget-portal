FROM node:22.11.0-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run all:install-dependencies
RUN npm run all:build

FROM node:22.11.0-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/node_modules /app/node_modules  ./
COPY --from=builder /app/portal/.next/standalone ./portal
COPY --from=builder /app/cms ./cms
COPY --from=builder /app/data-service ./data-service
RUN npm run all:start
