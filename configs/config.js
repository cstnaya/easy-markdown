require("dotenv").config();

const config = {
  BASE_URL: process.env.BASE_RUL,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CALLBACK_URL: "/auth/google/callback",
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  MONGO_DB: process.env.MONGO_DB,
};

module.exports = config;
