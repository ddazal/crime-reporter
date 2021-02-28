FROM node:12-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

FROM base as production

ENV NODE_ENV=production

CMD [ “npm”, “start” ]

FROM base as development

CMD [ "npm", "run", "dev" ]