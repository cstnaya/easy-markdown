# Easy-markdown

## Intro

This is an online markdown application.  You can sign in by Google account and start to use it!

##

- [Online DEMO](https://ezmd.luluo-play-yard.xyz)

## Feature

1. OAuth2.0 Google 3rd party login with JWT
2. Add middleware for authentication and authorization
3. Add soft delete and updatedAt timestamps in articles db
4. CRUD Markdown articles
5. Add security headers by [helmet](https://helmetjs.github.io/) & add CORS rules

## Tools

### Backend

1. nodejs
2. express
3. eslint
4. helmet
5. MongoDB + mongoose
6. passport + passport w. google oauth2
7. jwt
8. cors
9. cookie-parser

### Frontend
1. vue + vue-router for SPA
2. pinia
4. vueuse
5. [vue3-markdown](https://www.npmjs.com/package/vue3-markdown)
6. eslint + prettier
7. nanoid
8. vite

### Others
1. docker
2. dotenv
3. nodemon
4. Github action

## Todo:

### Backend

1. [x] OAuth2 w. google
2. [x] connect w. mongoDB using mongoose
4. [x] use helmet middleware for security
5. [x] CRUD documents
6. [x] add Dockerfile
3. [x] use cors middleware
6. [x] use https/ssl
7. [ ] Github Action flow
8. [ ] Allow frame-ancestors in readonly page 

### Frontend 

1. [x] Connect client with server by cors
2. [x] Add CRUD requests for posts
3. [x] Add markdown parser

## Runs on Local

1. Clone this project
2. Install dependency packages
    ```bash
    $ npm run install-all
    ```
3. Copy and fullfill .env
    ```bash
    $ cp .env.example .env      # CLIENT_ID & CLIENT_SECRET is used for Google Auth
    ```
4. create key.pem
    ```bash
    openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365 -subj '/CN=non /O=My Company Name LTD./C=US'
    ```
5. run this project
    ```bash
    npm run prod
    ```

## For Dockerfile
```bash
$ docker build -t luluo/ez-markdown:latest .
```

```bash
$ docker run -e CLIENT_ID=<CLIENT_ID> -e CLIENT_SECRET=<CLIENT_SECRET> -e JWT_SECRET_KEY=<JWT_SECRET_KEY> -e MONGO_DB=<MONGO_DB> -p 8000:8000 <your-name>/<project-name>:latest
```
- use double quote to quote your variable, like `CLIENT_ID="this-is-my-id"`.
