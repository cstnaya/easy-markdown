const jwt = require("jsonwebtoken");
const { saveUserData, getUserDetail } = require("../../models/users/user.model");
const config = require("../../configs/config");

const COOKIE_EXPIRED = 1000 * 60 * 60 * 24 * 14;

async function verifiedCallback(accessToken, refreshToken, profile, callback) {
  // store user data into db
  try {
    await saveUserData({
      userId: profile.id,
      name: profile.displayName || "unname",
      email: profile._json.email,
    });

    // pass whole user profile into callback endpoint
    return callback(null, profile);
  } catch (e) {
    throw new Error("login process error.");
  }
}

function authCallbackHandler(req, res) {
  // wrap jwt w. access token, username, permission in payload
  const userId = req.user.id;

  const payload = { userId };
  const token = jwt.sign(payload, config.JWT_SECRET_KEY, {
    expiresIn: "14d",
  });

  // set JWT in cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: COOKIE_EXPIRED,
    sameSite: "Lax",
    secure: true,
  });

  // TODO: successful auth, maybe can send email here
  res.redirect("/");
}

async function verifyAuthed(req, res) {
  const userInfo = await getUserDetail(req.user)
  res.json({ user: userInfo });
}

function logout(req, res) {}

module.exports = {
  verifiedCallback,
  authCallbackHandler,
  logout,
  verifyAuthed,
};
