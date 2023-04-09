<script setup>
import { timestampToTime } from '@/helps/time';

defineProps(['post'])
const emit = defineEmits(['onDeletePost'])

const dateTime = (date) => timestampToTime(date)
</script>

<template>
    <article class="post--item">
        <router-link :to="`/post/${post.id}`" class='post__title' title="Go to edit this post.">{{ post.title
        }}</router-link>
        <div class="post__info">
            <span class="post__date">{{ dateTime(post.updatedAt) }}</span>
            <button class="btn--remove" title="delete this post" @click.prevent="emit('onDeletePost', post.id)"> x
            </button>
        </div>
    </article>
</template>

<style scoped>
.post--item {
    padding: 1em 1.5em;
    border-radius: 12px;
    border: 1px solid #777;
    box-shadow: 1px 1px 1px #222;
    width: 100%;
    text-align: start;
}

.post__title {
    font-weight: bold;
    font-size: 1.2rem;
    color: #222;
    text-decoration: none;
}

.post__title:hover {
    text-decoration: underline;
}

.post__info {
    margin-top: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post__date {
    color: #666;
}

.btn--remove {
    cursor: pointer;
    appearance: none;
    border-radius: 50%;
    padding: 0.25em 0.75em;
}
</style>