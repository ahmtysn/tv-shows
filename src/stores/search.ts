import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Show } from '@/types/show'
import { searchShows } from '@/services/tvmaze'

export const useSearchStore = defineStore('search', () => {
  const query = ref('')
  const results = ref<Show[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function search(term: string) {
    query.value = term
    error.value = null

    if (!term.trim()) {
      results.value = []
      return
    }

    isLoading.value = true

    try {
      const data = await searchShows(term)
      results.value = data.map((item) => item.show)
    } catch {
      results.value = []
      error.value = 'Search failed. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  function clear() {
    query.value = ''
    results.value = []
    error.value = null
  }

  return { query, results, isLoading, error, search, clear }
})
