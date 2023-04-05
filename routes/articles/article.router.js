const express = require("express");

const { authorizedMiddleware } = require("../../middlewares/authorized.middle");

const articleController = require("./article.controller");
const articleRouter = express.Router();

// create router
articleRouter.post("/", articleController.httpCreateArticle);

// read all
articleRouter.get("/", articleController.httpShowAllArticles);

// read
articleRouter.get(
  "/:articleId",
  authorizedMiddleware,
  articleController.httpReadArticle
);

// update
articleRouter.patch(
  "/:articleId",
  authorizedMiddleware,
  articleController.httpUpdateArticle
);

// delete
articleRouter.delete(
  "/:articleId",
  authorizedMiddleware,
  articleController.httpDestroyArticle
);

module.exports = articleRouter;
