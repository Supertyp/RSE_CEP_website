# Architecture — RSE CEP Website

## System overview

The RSE CEP website is a statically generated Astro 5 site deployed to GitHub Pages via GitHub Actions. All pages are built at compile time; there is no server-side logic. The design layer is vanilla CSS with custom properties — chosen for simplicity and zero framework overhead. A small team can read and modify it without specialist knowledge.

## Key components

| Component | File(s) | Responsibility |
|-----------|---------|----------------|
| Design tokens | `src/styles/global.css` | CSS custom properties: ANU color palette, Inter font family, spacing. Single source of truth for visual identity. Dark-mode overrides live here in a `prefers-color-scheme` block. |
| Font loading | `global.css` + `public/fonts/` | `@font-face` declarations for self-hosted Inter WOFF2 (Latin subset). No external CDN. |
| Site chrome | `src/layouts/BaseLayout.astro` | Shared `<head>`, `<header>` (nav with Search link + mobile hamburger), `<main>`, `<footer>`. All pages use this layout. |
| Blog content | `src/content/blog/` | Markdown files with frontmatter (`title`, `pubDate`, `description`, `author`). Astro content collections handle typing and querying. |
| Search | Pagefind (build-time) + `src/pages/search.astro` | Pagefind indexes the built `dist/` output. The search UI is served as a static page; no server-side query handling. |

## Data flow

```
src/ (Astro components + Markdown)
  → astro build → dist/
  → pagefind --site dist → dist/pagefind/
  → GitHub Actions → GitHub Pages
```

All content is static. No runtime data fetching.

## Technology stack

| Concern | Choice |
|---------|--------|
| Site generator | Astro 5.6 |
| Styling | Vanilla CSS + custom properties |
| Typography | Inter (self-hosted WOFF2, Latin subset) |
| Search | Pagefind 1.3 |
| Deployment | GitHub Actions → GitHub Pages |
| Base URL | `/RSE_CEP_website/` (configured in `astro.config.mjs`) |

## Key design decisions

See `docs/design/design-decisions.md` for full rationale. Summary:

- **Self-hosted Inter** — consistent typography without external CDN or privacy risk
- **ANU brand colors** — institutional credibility; applied as CSS custom properties for easy extension
- **Dark mode via `prefers-color-scheme`** — zero JS, respects OS preference, natural fit for the CSS variable structure
- **CSS-only mobile nav** — no JavaScript for a presentational concern
- **Vanilla CSS** — no framework overhead; maintainable by a small team

## Known constraints

- **Static only** — no server-side logic; all content must be statically generated or client-side
- **Base URL** — all asset paths must account for `/RSE_CEP_website/` (handled by Astro's `BASE_URL` env variable)
- **ANU brand colors** — exact hex values require verification against official ANU brand guidelines before implementation

## Extension points

- New pages inherit the token system automatically via `BaseLayout.astro`
- Dark-mode overrides extend by adding properties to the existing `prefers-color-scheme` block in `global.css`
- New content types (resources, events) follow the same content collection pattern as `src/content/blog/`
