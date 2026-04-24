<template>
  <div class="skeleton-card">
    <div class="skeleton-card__poster shimmer" />
    <div class="skeleton-card__title shimmer" />
  </div>
</template>

<style scoped>
.skeleton-card {
  width: 175px;
  flex-shrink: 0;
}

.skeleton-card__poster {
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  background: var(--color-surface-raised);
}

.skeleton-card__title {
  height: 14px;
  width: 70%;
  margin-top: 0.6rem;
  border-radius: var(--radius-sm);
  background: var(--color-surface-raised);
}

.shimmer {
  background: linear-gradient(
    90deg,
    var(--color-surface-raised) 25%,
    var(--color-surface-highlight) 50%,
    var(--color-surface-raised) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 480px) {
  .skeleton-card {
    width: 140px;
  }
}
</style>
