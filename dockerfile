FROM node:21.1.0-slim

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

EXPOSE 9999

CMD [ "npm", "start" ]