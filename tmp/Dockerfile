FROM node:16

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only-production

ENV DEBUG=tmp:*

CMD npm start