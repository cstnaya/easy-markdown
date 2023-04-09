<script>
import { httpUpdatePost, httpReadPost, httpShowAllArticles, httpDeleteArticle } from '@/api/api'

export const usePost = () => {
  const updatePost = async (postId, newTitle, newContent) => {
    try {
      return await httpUpdatePost(postId, newTitle, newContent)
    } catch (e) {
      throw new Error('Update article failed.')
    }
  }

  const readPostDetail = async (postId) => {
    try {
      return await httpReadPost(postId)
    } catch (e) {
      return null
    }
  }

  const showAllPosts = async () => {
    try {
      return await httpShowAllArticles()
    } catch (e) {
      return []
    }
  }

  const deletePost = async (postId) => {
    await httpDeleteArticle(postId)
  }

  return { updatePost, deletePost, readPostDetail, showAllPosts }
}
</script>