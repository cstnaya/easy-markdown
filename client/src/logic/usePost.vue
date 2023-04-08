<script>
import { httpUpdatePost } from '@/api/api'

export const usePost = () => {
  const updatePost = async (postId, newTitle, newContent) => {
    try {
      return await httpUpdatePost(postId, newTitle, newContent)
    } catch (e) {
      throw new Error('Update article failed.')
    }
  }

  const deletePost = async () => {} // TODO:

  const readPostDetail = async () => {} // TODO:

  const showAllPosts = async () => {} // TODO:

  return { updatePost, deletePost, readPostDetail, showAllPosts }
}
</script>