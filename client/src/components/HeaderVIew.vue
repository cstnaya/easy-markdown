<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthed } from '@/stores/useAuthed'
const authStore = useAuthed()

onMounted(() => {
    authStore.getUserInfo()
})

const { user } = storeToRefs(authStore)
</script>

<template>
    <header class="header">
        <div class="logo">
            <router-link to="/" class="logo__item">Markdown</router-link>
        </div>
        <div class="user">
            <router-link to="/" class="user__item" v-if="user">{{ user.name }}</router-link>
            <a :href="`/auth/google`" class="user__item" v-else>login</a>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: bold;
    font-size: 2rem;
}

.logo__item {
    display: block;
    padding: 0.5em;
    text-decoration: none;
    color: #444;
}

.logo__item:hover {
    background: #444;
    color: #fff;
}

.user {
    font-size: 1.25rem;
    margin-right: 1em;
}

.user__item {
    text-decoration: none;
    color: #444;
    padding: .125rem 1rem;
    border-radius: 42px;
    background: #f0f0f0;
    border: 1px solid #444;
    box-shadow: 1px 1px 1px rgb(0, 0, 0);
}

.user__item:hover {}</style>