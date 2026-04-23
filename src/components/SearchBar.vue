<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useDebounce } from '@/composables/useDebounce'

const searchStore = useSearchStore()
const input = ref('')
const debouncedInput = useDebounce(input)

watch(debouncedInput, (value) => {
  searchStore.search(value)
})

function onClear() {
  input.value = ''
  searchStore.clear()
}
</script>

<template>
  <div class="search-bar">
    <input
      v-model="input"
      type="text"
      placeholder="Search TV shows..."
      class="search-bar__input"
    />
    <button v-if="input" class="search-bar__clear" @click="onClear">✕</button>
  </div>
</template>

<style scoped>
.search-bar {
  position: relative;
  max-width: 400px;
}

.search-bar__input {
  width: 100%;
  padding: 0.6rem 2.5rem 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.search-bar__input:focus {
  border-color: #666;
}

.search-bar__clear {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #999;
}
</style>
