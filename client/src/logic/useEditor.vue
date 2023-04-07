<script>
import { ref, computed } from 'vue'

export const useEditor = () => {
  const text = ref('')

  const markedText = computed(() => text.value)

  const modifyText = (newText) => {
    text.value = newText
  }

  return { text, markedText, modifyText }
}
</script>
