<script setup lang="ts">
import { onMounted } from 'vue'
import { useShowsStore } from '@/stores/shows'
import ShowCard from '@/components/ShowCard.vue'

const store = useShowsStore()

onMounted(() => {
  store.loadShows()
})
</script>

<template>
  <div>
    <h1>TV Shows Dashboard</h1>

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
  </div>
</template>

<style scoped>
.genre-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
}
</style>
