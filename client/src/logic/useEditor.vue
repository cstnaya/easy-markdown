<script>
import { ref, computed } from 'vue'

export const useEditor = () => {
  const text = ref('')

  const title = computed(() => text.value.split('\n')?.[0])

  return { text, title }
}
</script>
