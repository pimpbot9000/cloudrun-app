FROM node:latest

WORKDIR /usr/src/app
COPY src src
COPY public public
COPY index.js index.js
COPY package.json package.json
COPY .env .env
COPY yarn.lock yarn.lock
RUN yarn install
CMD ["yarn", "start"]