# Module: site-design

**Purpose:** Apply ANU brand identity, Inter typography, dark mode, and mobile navigation to the RSE CEP website.

**Shared data:** CSS custom properties in `src/styles/global.css` and `src/layouts/BaseLayout.astro`. All three features read from or write to these two files.

**Integration test:** `npm run build` completes without errors; all five pages (Home, Team, Blog, Contact, Search) render with ANU color palette, Inter font loaded from `public/fonts/`, Search link present in nav, hamburger functional at ≤640 px viewport, dark mode active under `prefers-color-scheme: dark`. Verified on the deployed GitHub Pages URL.

**Dependencies:** None — self-contained module.

## Build order

1. design-foundation — ✓
2. dark-mode — ✓
3. navigation-mobile — ✓
