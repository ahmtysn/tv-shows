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
  padding: var(--space-2xl) var(--space-md);
}

.error-box__message {
  color: var(--color-danger);
  margin-bottom: var(--space-md);
  font-size: 0.95rem;
}

.error-box__retry {
  background: var(--color-accent);
  color: var(--color-on-accent);
  border: none;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity var(--transition-base);
}

.error-box__retry:hover {
  opacity: 0.85;
}
</style>
