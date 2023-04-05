Take notes in this project
==========================

## Don't want to remove quote automatically by Prettier.

When using mongoDB, if you don't want to show `_id` & `__v` keys in query results, you need to add `{ "__v": 0, "_id": 0 }` in `model.find()` function.  

However, each time I use prettier, it removed double quotes beside `__v` and `_id` automatically; while it would cause to query error since we can't them quote when querying.  

- [Solution](https://github.com/prettier/prettier-atom/issues/292#issuecomment-898961842) -- This is the way how I resolved this problem.

## nanoid use ESModule in default but not commonJS

Nano ID 4 works only with ESM projects in tests or Node.js scripts. For CommonJS you need Nano ID 3.  

See more detail in [here](https://github.com/ai/nanoid#install).

## passport with jwt

I use `passport-google-oauth2` for OAuth 3rd party authentication.  However, passport supports `session` by default for stateful authentication.  If you perfer using token based auth, you need to do some extra steps by yourself.

I use passport middleware for google sign in, then use jwt for generating stateless token, and store it in cookie.