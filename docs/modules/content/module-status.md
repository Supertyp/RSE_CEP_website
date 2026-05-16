# Module: content

**Purpose:** Static content pages that extend the site beyond the core design — events, announcements, and similar one-off pages.

**Shared data:** None between features. Each page uses `BaseLayout.astro` and the global CSS token set.

**Integration test:** `npm run build` completes without errors; all content pages render correctly with correct nav highlighting and mobile hamburger inclusion.

**Dependencies:** Depends on `site-design` module (tokens, BaseLayout).

## Build order

1. dropin-sessions — 🚧
