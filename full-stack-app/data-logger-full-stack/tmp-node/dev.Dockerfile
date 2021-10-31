FROM node:14-alpine

WORKDIR /usr/src/app

RUN apk update && apk add bash

RUN npm install --global typescript

COPY . .

ENV CHOKIDAR_USEPOLLING=true

RUN npm install

CMD ["npm", "run", "start-dev"]