import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShowDetailView from '@/views/ShowDetailView.vue'
import SearchResultsView from '@/views/SearchResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchResultsView,
    },
    {
      path: '/show/:id',
      name: 'show-detail',
      component: ShowDetailView,
    },
  ],
})

export default router
