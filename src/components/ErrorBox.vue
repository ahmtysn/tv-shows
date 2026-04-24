<script setup lang="ts">
defineProps<{
  message: string
  retryLabel?: string
}>()

defineEmits<{
  retry: []
}>()
</script>

<template>
  <div class="error-box" role="alert">
    <p class="error-box__message">{{ message }}</p>
    <button class="error-box__retry" @click="$emit('retry')">
      {{ retryLabel ?? 'Try again' }}
    </button>
  </div>
</template>

<style scoped>
.error-box {
  text-align: center;
  padding: 3rem 1rem;
}

.error-box__message {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.error-box__retry {
  background: #ffc107;
  color: #000;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.2s;
}

.error-box__retry:hover {
  opacity: 0.85;
}
</style>
