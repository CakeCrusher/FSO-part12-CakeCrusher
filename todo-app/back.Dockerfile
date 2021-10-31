FROM node:16

USER node

WORKDIR /usr/src/todo-app/todo-backend

COPY --chown=node:node ./todo-backend/ .

RUN npm ci --only-production

ENV DEBUG=todo-backend:*

CMD npm start