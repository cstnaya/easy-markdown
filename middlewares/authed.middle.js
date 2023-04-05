const jwt = require("jsonwebtoken");
const config = require("../configs/config");

function authedMiddleware(req, res, next) {
  const accessToken = req.cookies.token;

  if (!accessToken) {
    return res.status(401).json({ error: "You haven't logged in." });
  }

  try {
    const decoded = jwt.verify(accessToken, config.JWT_SECRET_KEY);
    const userId = decoded.userId;

    req.user = userId;
  } catch (e) {
    return res.status(401).json({ error: "Access token is invalid." });
  }

  next();
}

module.exports = { authedMiddleware };
