import { ref } from 'vue'
import { defineStore } from 'pinia'
import { httpIsAuthorized, httpCreateNewPost } from '@/api/api'

export const useAuthed = defineStore('auth', () => {
  const user = ref(null)

  const getUserInfo = async () => {
    try {
      if (!user.value) {
        user.value = await httpIsAuthorized()
      }
      return user.value
    } catch (e) {
      return null
    }
  }

  const getUserNewPost = async (newPostId) => {
    return await httpCreateNewPost(newPostId)
  }

  return { user, getUserInfo, getUserNewPost }
})
