FROM node:16-alpine

ARG CLIENT_ID
ARG CLIENT_SECRET
ARG JWT_SECRET_KEY
ARG MONGO_DB

ENV CLIENT_ID $CLIENT_ID
ENV CLIENT_SECRET $CLIENT_SECRET
ENV JWT_SECRET_KEY $JWT_SECRET_KEY
ENV MONGO_DB $MONGO_DB

WORKDIR /app

COPY "package*.json" ./

COPY . .

RUN npm run install-all

COPY .env.example .env

RUN apk upgrade && \
    apk add openssl

RUN openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365 -subj '/CN=non /O=My Company Name LTD./C=US'

EXPOSE 8000

CMD ["npm", "run", "prod"]