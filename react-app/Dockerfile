FROM node:12.16.3-alpine3.11

RUN npm install -g serve

COPY build build

ENTRYPOINT [ "serve", "-s", "build" ]
