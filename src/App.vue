<script setup lang="ts"></script>

<template>
  <div class="app">
    <header class="app-header">
      <RouterLink to="/" class="app-header__title">TV Shows</RouterLink>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  color: #1a1a1a;
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>

<style scoped>
.app-header {
  background: #1a1a2e;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.app-header__title {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
}

.app-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
}
</style>
