FROM node:18.14.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 2

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start"]