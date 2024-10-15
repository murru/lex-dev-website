# syntax = docker/dockerfile:1

FROM node:18-alpine as base

ARG PORT=3000

ENV NODE_ENV=production
ENV ENDPOINT=https://cloud.appwrite.io/v1
ENV PROJECT=6705446b0011038f27f7
ENV DATABASE=670546a9001d85dcc600
ENV NAV_OPTIONS=67055b78001792acd3f4
ENV HOMEPAGE=670547ac000e51867811

WORKDIR /src

# Build
FROM base as build

COPY --link package*.json ./
RUN npm install --production=false

COPY --link . .

RUN npm run build
RUN npm prune

# Run
FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "node", ".output/server/index.mjs" ]