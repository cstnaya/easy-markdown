<script setup>
import EditView from '../components/EditView.vue'
import MarkView from '../components/MarkView.vue'

import { useEditor } from '../logic/useEditor.vue'

const { text, markedText, modifyText } = useEditor()
</script>

<template>
  <div>
    <EditView :text="text" @modifyText="modifyText" />
    <MarkView :markedText="markedText" />
  </div>
</template>
