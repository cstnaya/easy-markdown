const { isAuthorized } = require("../models/articles/article.model");

async function authorizedMiddleware(req, res, next) {
  const userId = req.user;
  const articleId = req.params.articleId;

  if (await isAuthorized(articleId, userId)) {
    next();
  } else {
    return res
      .status(403)
      .json({ error: "You don't have permission to operate it." });
  }
}

module.exports = { authorizedMiddleware };
