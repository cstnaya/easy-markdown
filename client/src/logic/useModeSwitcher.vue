<script>
import { ref, computed } from 'vue'

export const useModeSwitcher = () => {
    const MODES = ['Both', 'View', 'Edit']

    const mode = ref(0)

    const modeStatus = computed(() => MODES[mode.value])

    const switchMode = () => {
        mode.value = (mode.value + 1) % MODES.length
    }

    return { modeStatus, switchMode }
}
</script>
