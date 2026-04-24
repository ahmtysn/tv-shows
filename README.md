# TV ShowHub

TV show dashboard built with Vue 3 — browse shows by genre, view details with cast, and search. Powered by [TVMaze API](https://www.tvmaze.com/api).

## Quick Start

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server at localhost:5173 |
| `npm run build` | Production build |
| `npm run test:unit` | Run Vitest tests |

## Tech Stack

Vue 3 · TypeScript · Pinia · Vue Router · Vite · Vitest · CSS Custom Properties

## Key Decisions

- **Pinia** — devtools, HMR(Hot Module Replacement), cleaner shared state across routes
- **`useAsyncData`** — generic composable for loading/error/data, removes boilerplate
- **`useTitle`** — updates browser tab title reactively per view
- **CSS design tokens** — dark/light theming with custom properties, no framework
- **Code splitting** — lazy-load non-landing views for a smaller initial bundle
- **`?embed=cast`** — one API call returns show + cast, avoids extra request
- **`SearchResultsView`** — `/search?q=` URL is shareable, back/forward works
- **Env variable** — API base URL via `VITE_TVMAZE_BASE_URL`
- **Global error handler** — catches unhandled component errors
- **Route validation** — `:id(\d+)` regex + catch-all 404
- **Accessibility** — semantic HTML, skip-link, ARIA, keyboard nav, `focus-visible`

## Trade-offs

- **No SSR** — client-side SPA keeps deployment simple; SSR would improve SEO and first paint
- **No pagination** — loads first page only (250 shows); API supports `?page=N` for more shows
- **No caching** — every navigation re-fetches; an in-memory TTL cache or service worker would help
- **Scoped CSS over CSS Modules** — less syntax, Vue-idiomatic; Modules would give stricter isolation

## Potential Improvements

- Infinite scroll or pagination for the full show catalog
- In-memory cache with TTL to avoid repeated API calls
- E2E tests with Cypress or Playwright
- SSR with Nuxt for better SEO
- Error monitoring integration (Sentry, Datadog)

## Structure

```
src/
├── assets/        # Design tokens (theming)
├── components/    # Reusable UI components
├── composables/   # Shared logic (useAsyncData, useDebounce, useTheme, useTitle)
├── router/        # Routes (code-split views)
├── services/      # API layer
├── stores/        # Pinia stores (shows, search)
├── types/         # TypeScript interfaces
└── views/         # Page components
tests/             # Unit tests
```
