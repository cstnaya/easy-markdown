<script setup>
import { watch, ref, computed, onMounted } from 'vue'
import { useDebounceFn, useTitle } from '@vueuse/core'

import { VMarkdownEditor, VMarkdownView } from 'vue3-markdown'
import 'vue3-markdown/dist/style.css'

import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

import { useRoute } from 'vue-router';
import { usePost } from '@/logic/usePost.vue'
import { useEditor } from '@/logic/useEditor.vue'
import { useModeSwitcher } from '@/logic/useModeSwitcher.vue'

import { timestampToTime } from '../helps/time'

const route = useRoute();
const { text, title } = useEditor()
const { updatePost, readPostDetail } = usePost()
const { modeStatus, switchMode } = useModeSwitcher()

const postId = route.params.postId

const updatedAt = new ref(+new Date()) // milliseconds
const updatedAtDateTime = computed(() => timestampToTime(updatedAt.value))

onMounted(async () => {
  const article = await readPostDetail(postId)

  if (article) {
    text.value = article.content || ""
    updatedAt.value = article.updatedAt ? +new Date(article.updatedAt) : +new Date()
  }
})

const onUpdatePost = useDebounceFn(async () => {
  const article = await updatePost(postId, title.value, text.value)
  updatedAt.value = +new Date(article.updatedAt)
}, 800)
watch(text, onUpdatePost)

const pageTitle = useTitle('untitled')
watch(title, () => {
  pageTitle.value = title.value
})
</script>

<template>
  <main class="container">
    <HeaderView />
    <div class="flex">
      <VMarkdownEditor v-model="text" locale="en" class="editor" v-show="modeStatus !== 'View'" />
      <VMarkdownView :content="text" class="markdown" v-show="modeStatus !== 'Edit'" />
    </div>
    <FooterView :updatedAt="updatedAtDateTime" :modeStatus="modeStatus" @switchMode="switchMode" />
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex {
  flex: 1;
}

.editor {
  width: 100%;
  min-height: calc(100vh - 135px);
}

.markdown {
  width: 100%;
  padding: 1em;
  max-height: calc(100vh - 135px);
  overflow-y: auto;
  border: 1px solid #e1e4e8;
}

/* width */
.editor:deep(textarea)::-webkit-scrollbar,
.markdown::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.editor:deep(textarea)::-webkit-scrollbar-track:hover,
.markdown::-webkit-scrollbar-track:hover {
  background: #f5f5f5;
}

/* Handle */
.editor:deep(textarea)::-webkit-scrollbar-thumb,
.markdown::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.editor:deep(textarea)::-webkit-scrollbar-thumb:hover,
.markdown::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media (min-width: 50rem) {
  .flex {
    display: flex;
  }
}
</style>
