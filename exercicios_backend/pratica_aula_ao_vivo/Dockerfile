FROM node:14-alpine

WORKDIR /usr/node_app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev