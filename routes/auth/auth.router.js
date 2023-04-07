const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const authController = require("./auth.controller");
const config = require("../../configs/config");

const { authedMiddleware } = require("../../middlewares/authed.middle");

const AUTH_OPTIONS = {
  callbackURL: config.CALLBACK_URL,
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
};

passport.use(new GoogleStrategy(AUTH_OPTIONS, authController.verifiedCallback));

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    session: false,
  }),
  authController.authCallbackHandler
);

authRouter.post("/logout", authController.logout);

authRouter.get("/verify", authedMiddleware, authController.verifyAuthed);

module.exports = authRouter;
