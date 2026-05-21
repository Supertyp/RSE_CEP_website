# Module: content

**Purpose:** Static content pages and features that extend the site beyond the core design — events, pattern enhancements, RSS feeds, and footer branding.

**Shared data:** All features use `BaseLayout.astro` and the global CSS token set. Pattern enhancements share `src/pages/patterns/` with the patterns content collection.

**Integration test:** `npm run build` completes without errors; all content pages and feeds render correctly. Verified on deployed GitHub Pages site.

**Dependencies:** Depends on `site-design` module (tokens, BaseLayout).

## Build order

1. dropin-sessions — ✓
2. pattern-enhancements — ✓
3. rss-feeds — ✓
4. footer-branding — ✓
