<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Show } from '@/types/show'
import { fetchShowById } from '@/services/tvmaze'

const route = useRoute()
const router = useRouter()

// loading state management
const show = ref<Show | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  const id = Number(route.params.id)

  try {
    show.value = await fetchShowById(id)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load show'
  } finally {
    isLoading.value = false
  }
})

function goBack() {
  router.back()
}
</script>

<template>
  <div>
    <button class="back-btn" @click="goBack">&larr; Back</button>

    <p v-if="isLoading" class="status">Loading...</p>
    <p v-else-if="error" class="status">{{ error }}</p>

    <template v-else-if="show">
      <div class="detail">
        <img
          v-if="show.image"
          :src="show.image.original"
          :alt="show.name"
          class="detail__image"
        />

        <div class="detail__content">
          <h1>{{ show.name }}</h1>

          <div class="detail__meta">
            <span v-if="show.rating.average">⭐ {{ show.rating.average }}</span>
            <span v-if="show.genres.length">{{ show.genres.join(', ') }}</span>
            <span v-if="show.language">{{ show.language }}</span>
            <span v-if="show.status">{{ show.status }}</span>
          </div>

          <div v-if="show.summary" class="detail__summary" v-html="show.summary" />

          <dl class="detail__info">
            <template v-if="show.network">
              <dt>Network</dt>
              <dd>{{ show.network.name }}</dd>
            </template>
            <template v-if="show.premiered">
              <dt>Premiered</dt>
              <dd>{{ show.premiered }}</dd>
            </template>
            <template v-if="show.schedule.days.length">
              <dt>Schedule</dt>
              <dd>{{ show.schedule.days.join(', ') }} at {{ show.schedule.time || 'TBA' }}</dd>
            </template>
            <template v-if="show.runtime">
              <dt>Runtime</dt>
              <dd>{{ show.runtime }} min</dd>
            </template>
          </dl>

          <a
            v-if="show.officialSite"
            :href="show.officialSite"
            target="_blank"
            rel="noopener"
            class="detail__link"
          >
            Visit official site &rarr;
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.back-btn {
  background: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.back-btn:hover {
  background: #eee;
}

.status {
  text-align: center;
  color: #666;
  padding: 2rem 0;
}

.detail {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.detail__image {
  width: 300px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.detail__content {
  flex: 1;
}

.detail__content h1 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.detail__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: #666;
  margin: 0.5rem 0 1.5rem;
}

.detail__summary {
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #333;
}

.detail__info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1.5rem;
  margin-bottom: 1.5rem;
}

.detail__info dt {
  font-weight: 600;
  color: #555;
}

.detail__info dd {
  margin: 0;
}

.detail__link {
  display: inline-block;
  color: #2563eb;
  font-weight: 500;
}

.detail__link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .detail {
    flex-direction: column;
  }

  .detail__image {
    width: 100%;
    max-width: 300px;
  }
}
</style>
