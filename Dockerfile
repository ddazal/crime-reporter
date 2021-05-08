FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

RUN npm run migrate:up

CMD [ "npm", "run", "dev" ]