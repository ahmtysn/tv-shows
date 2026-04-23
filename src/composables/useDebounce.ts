import { ref, watch, type Ref } from 'vue'

export function useDebounce(source: Ref<string>, delay = 300) {
  const debounced = ref(source.value)
  let timeout: ReturnType<typeof setTimeout>

  watch(source, (value) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      debounced.value = value
    }, delay)
  })

  return debounced
}
