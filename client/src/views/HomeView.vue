<script setup>
import { storeToRefs } from 'pinia'
import { useAuthed } from '@/stores/useAuthed'
import HeaderView from '@/components/HeaderView.vue';
import PostListView from '../components/PostListView.vue';

const authStore = useAuthed()
const { user } = storeToRefs(authStore)
</script>

<template>
  <div>
    <HeaderView />
    <main>
      <section class="ctx ctx--black">
        <div class="container text-center">
          <h1>Start to colorful your own life!</h1>
          <div>
            <router-link to="/new" class="btn--add" v-if="user">+ New Post</router-link>
            <a :href="`/auth/google`" class="btn--add" v-else>login</a>
          </div>
        </div>
      </section>
      <PostListView v-if="user" />
    </main>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
  font-size: 3rem;
}

.container {
  margin: 3em auto;
  width: min(100%, 750px);
}

.text-center {
  text-align: center;
}

.ctx {
  padding: 3em 0 10em;
}
.ctx--black {
  background: #222;
}

.btn--add {
  font-size: 2rem;
  padding: 0.25em 1.75em;
  border-radius: 100px;
  text-decoration: none;
  color: #000;
  background-color: #fff;
}

.btn--add:hover {
  background-color: #fefefe;
}
</style>
