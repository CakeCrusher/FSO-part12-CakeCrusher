FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm run test

CMD ["npm", "start"]