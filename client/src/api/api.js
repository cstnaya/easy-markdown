import axios from 'axios'

async function httpIsAuthorized() {
  try {
    // const res = await axios(`/auth/verify`)
    // const { userId } = await res.json()
    // console.log(userId)
  } catch (e) {
    console.error(e)
  }

  return true // TODO:
}

async function httpCreateNewPost(newPostId) {
  return newPostId // TODO:
}

export { httpCreateNewPost, httpIsAuthorized }
