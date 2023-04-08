const Article = require("./article.mongo");

// insert new post
async function saveArticle(newArticle) {
  const article = { ...newArticle, updatedAt: new Date() };
  await Article.create(article);

  return article;
}

// display one post with its detail
async function readArticle(id) {
  return await Article.findOne({ id: id }, { "_id": 0, "__v": 0 });
}

// show all articles with
async function showAllArticles(authorId) {
  return await Article.find(
    {
      authorId: authorId,
      deletedAt: { $exists: false },
    },
    { "_id": 0, "__v": 0, "content": 0 }
  );
}

async function updateArticle(id, updatedArticle) {
  const article = await Article.findOneAndUpdate(
    { id: id },
    { ...updatedArticle, updatedAt: new Date() },
    { returnDocument: 'after' }
  );

  return article;
}

async function deleteArticle(id) {
  await Article.updateOne({ id: id }, { deletedAt: new Date() });
}

async function isAuthorized(id, authorId) {
  const result = await Article.findOne({
    deletedAt: { $exists: false },
    authorId: authorId,
    id: id,
  });

  if (result) {
    return true;
  }

  return false;
}

module.exports = {
  saveArticle,
  readArticle,
  showAllArticles,
  updateArticle,
  deleteArticle,
  isAuthorized,
};
