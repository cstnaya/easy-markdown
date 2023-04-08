<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['updatedAt', 'modeStatus'])
const emit = defineEmits(['switchMode'])
</script>

<template>
    <footer>
        <p>Last updated: {{ updatedAt }}</p> |
        <button class="btn--mode" @click.prevent="emit('switchMode')">{{ modeStatus }}</button>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.btn--mode {
    cursor: pointer;
    appearance: none;
    padding: .125rem 1rem;
    border-radius: 42px;
    outline: none;
}

.btn--mode:hover {
    background: #e0e0e0;
}

.btn--mode:active {
    background: #d0d0d0;
}
</style>