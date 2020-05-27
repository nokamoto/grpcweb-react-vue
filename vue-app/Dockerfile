FROM node:12.16.3-alpine3.11

RUN npm install -g serve

COPY dist dist

ENTRYPOINT [ "serve", "-s", "dist", "-p", "5002" ]
