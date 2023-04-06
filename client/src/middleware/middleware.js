import { nanoid } from 'nanoid'
import { httpCreateNewPost, httpIsAuthorized } from '../api/api'

async function authorized() {
  if (!(await httpIsAuthorized())) {
    return '/'
  }
}

async function createdPost() {
  const newPostId = nanoid()
  await httpCreateNewPost(newPostId)

  return `/${newPostId}`
}

export { authorized, createdPost }
