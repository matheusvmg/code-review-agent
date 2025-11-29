FROM node:22

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4589

CMD ["node", "dist/main.js"]