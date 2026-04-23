<script setup lang="ts">
import { onMounted } from 'vue'
import { useShowsStore } from '@/stores/shows'
import { useSearchStore } from '@/stores/search'
import ShowCard from '@/components/ShowCard.vue'
import SearchBar from '@/components/SearchBar.vue'

const store = useShowsStore()
const searchStore = useSearchStore()

onMounted(() => {
  store.loadShows()
})
</script>

<template>
  <div>
    <h1>TV Shows Dashboard</h1>
    <SearchBar />

    <!-- Search results -->
    <template v-if="searchStore.query">
      <p v-if="searchStore.isLoading">Searching...</p>
      <template v-else>
        <h2>Results for "{{ searchStore.query }}"</h2>
        <div class="search-results">
          <ShowCard
            v-for="show in searchStore.results"
            :key="show.id"
            :show="show"
          />
        </div>
        <p v-if="!searchStore.results.length">No shows found.</p>
      </template>
    </template>

    <!-- Genre dashboard -->
    <template v-else>
      <p v-if="store.isLoading">Loading shows...</p>
      <p v-else-if="store.error">{{ store.error }}</p>

      <template v-else>
        <section v-for="genre in store.genres" :key="genre">
          <h2>{{ genre }}</h2>
          <div class="genre-row">
            <ShowCard
              v-for="show in store.showsByGenre[genre]"
              :key="show.id"
              :show="show"
            />
          </div>
        </section>
      </template>
    </template>
  </div>
</template>

<style scoped>
.genre-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.search-results {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
