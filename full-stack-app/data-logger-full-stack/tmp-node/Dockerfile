FROM node:16-alpine AS build

WORKDIR /usr/src/app

RUN apk update && apk add bash

RUN npm install --global typescript

COPY . .

RUN npm ci

RUN tsc

FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=build ./usr/src/app/package.json ./package.json
COPY --from=build ./usr/src/app/package-lock.json ./package-lock.json
COPY --from=build ./usr/src/app/node_modules ./node_modules
COPY --from=build ./usr/src/app/dist ./dist


CMD ["node", "./dist/index"]