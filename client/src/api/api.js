import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

async function httpIsAuthorized() {
  const res = await api.get(`/auth/verify`)
  return res.data.user
}

async function httpCreateNewPost(newPostId) {
  const res = await api.post(`/api/articles`, {
    id: newPostId
  })
  return res.data
}

async function httpUpdatePost(postId, newTitle, newContent) {
  const res = await api.patch(`/api/articles/${postId}`, { content: newContent, title: newTitle })
  return res.data.article
}

async function httpReadPost(postId) {
  const res = await api.get(`/api/articles/${postId}`)
  return res.data.article
}

async function httpShowAllArticles() {
  const res = await api.get(`/api/articles`)
  return res.data.articles
}

async function httpDeleteArticle(postId) {
  await api.delete(`/api/articles/${postId}`)
}

export { httpCreateNewPost, httpIsAuthorized, httpUpdatePost, httpReadPost, httpShowAllArticles, httpDeleteArticle }
