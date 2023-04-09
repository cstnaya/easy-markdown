const {
  saveArticle,
  readArticle,
  showAllArticles,
  updateArticle,
  deleteArticle,
} = require("../../models/articles/article.model");

async function httpCreateArticle(req, res) {
  const decoded = req.body;
  const userId = req.user;
  const newArticle = {
    authorId: userId,
    id: decoded.id,
    title: "untitled",
  };

  try {
    const article = await saveArticle(newArticle);
    res.json(article);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "create article failed." });
  }
}

async function httpReadArticle(req, res) {
  const articleId = req.params.articleId;
  const article = await readArticle(articleId);

  res.json({ article });
}

async function httpShowAllArticles(req, res) {
  const userId = req.user;
  const articles = await showAllArticles(userId);

  res.json({ articles });
}

async function httpUpdateArticle(req, res) {
  const articleId = req.params.articleId;
  const updatedArticle = {
    content: req.body.content,
    title: req.body.title,
  };

 const article = await updateArticle(articleId, updatedArticle);

  res.json({ article });
}

async function httpDestroyArticle(req, res) {
  const articleId = req.params.articleId;

  await deleteArticle(articleId);

  res.json({ success: true });
}

module.exports = {
  httpCreateArticle,
  httpShowAllArticles,
  httpReadArticle,
  httpUpdateArticle,
  httpDestroyArticle,
};
