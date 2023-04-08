<script setup>
import { useDebounceFn } from '@vueuse/core'

defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

const debouncedUpdate = useDebounceFn((event) => {
  emit('update:modelValue', event.target.value)
}, 600)
</script>

<template>
  <textarea :value="modelValue" @input="debouncedUpdate" class="editor" placeholder="start to type something..." />
</template>

<style scoped>
.editor {
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  padding: 1em;
}
</style>