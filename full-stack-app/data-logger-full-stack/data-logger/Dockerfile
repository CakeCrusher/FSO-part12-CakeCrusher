FROM node:14-alpine

WORKDIR /usr/src/app

RUN apk update && apk add bash

RUN npm install --global expo-cli typescript

COPY . .

RUN npm ci

ENV DEBUG=app:*

CMD ["expo", "start", "--web"]

