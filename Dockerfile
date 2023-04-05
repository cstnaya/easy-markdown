FROM node:16-alpine

WORKDIR /app

COPY "package*.json" ./

RUN npm install --production

COPY . .

COPY .env.example .env

EXPOSE 8000

CMD ["npm", "run", "start"]