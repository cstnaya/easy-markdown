import { nanoid } from 'nanoid'
import { useAuthed } from '@/stores/useAuthed'

async function authorized() {
  const { getUserInfo } = useAuthed()

  if (!(await getUserInfo())) {
    return '/'
  }
}

async function createdPost() {
  const { getUserNewPost } = useAuthed()

  const newPostId = nanoid()
  await getUserNewPost(newPostId)

  return `/post/${newPostId}`
}

export { authorized, createdPost }
