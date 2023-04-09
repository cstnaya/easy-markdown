<script setup>
import { onMounted, ref } from 'vue'
import { usePost } from '@/logic/usePost.vue'
import PostItem from '@/components/PostItem.vue';

const { showAllPosts, deletePost } = usePost()
const posts = ref([])

onMounted(async () => {
    posts.value = await showAllPosts()
})

const onDeletePost = async (postId) => {
    await deletePost(postId)
    posts.value = posts.value.filter(p => p.id !== postId)
}
</script>

<template>
    <section class="ctx ctx--white">
        <div class="container">
            <ul class="flex-list">
                <li v-for="post in posts" :key="post.id">
                    <PostItem :post="post" @onDeletePost="onDeletePost" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
.container {
    margin: 3em auto;
    width: min(100%, 1150px);
}

.ctx--white {
    background: #fdfdfd;
    color: #114;
}

.flex-list {
    text-align: center;
    list-style: none;
    padding: 0 1em;
}
.flex-list li {
    margin-bottom: 2em;
}

@media (min-width: 550px) {
    .flex-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2em;
        /* justify-content: space-between; */
    }

    .flex-list li {
        width: 250px;
    }
}
</style>