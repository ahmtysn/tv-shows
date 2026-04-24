<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header class="app-header">
    <nav class="app-header__inner" aria-label="Main navigation">
      <RouterLink to="/" class="app-header__brand">
        <span class="app-header__logo" aria-hidden="true">TV</span>
        <span class="app-header__title">ShowHub</span>
      </RouterLink>
      <div class="app-header__actions">
        <SearchBar />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background: var(--color-surface-elevated);
  padding: 1.1rem 0;
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  border-bottom: 1px solid var(--color-border-subtle);
}

.app-header__inner {
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
}

.app-header__logo {
  background: var(--color-accent);
  color: var(--color-on-accent);
  font-weight: 900;
  font-size: 0.95rem;
  padding: 4px 8px;
  border-radius: var(--radius-md);
  line-height: 1;
}

.app-header__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex: 1;
  justify-content: flex-end;
}

@media (max-width: 480px) {
  .app-header__inner {
    flex-wrap: wrap;
  }

  .app-header__title {
    font-size: 1rem;
  }
}
</style>
