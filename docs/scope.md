# Scope — RSE CEP Website

## Current scope

Visual design overhaul and content build-out of the RSE CEP Astro site:

- ANU brand color palette applied as CSS custom properties
- Self-hosted Inter font (Latin subset, WOFF2) loaded via `@import` in `global.css`
- Dark mode via `prefers-color-scheme: dark` overriding the token set
- Search link added to primary navigation
- CSS-only mobile hamburger menu in `BaseLayout.astro`
- Drop-in sessions page (`/events/`) with topic rotation, schedule, and Zoom link
- Pattern display enhancements: "Contribute or change pattern" button (GitHub issue), "Download .md File" button (raw markdown endpoint), removal of duplicate metadata table
- RSS feeds: blog at `/rss.xml`, patterns at `/patterns/rss.xml`; `<link rel="alternate">` discovery tag in `<head>`; visible RSS icon buttons on blog and patterns index pages
- "Powered by" label above ANU footer logo

## Current non-goals

- Resources / publications page
- Enhanced team profiles (photos, individual pages)
- Backend services, user accounts, CMS integration
- Newsletter or mailing list management
- Multi-language support

## Success criteria

| Criterion | Met? |
|-----------|------|
| ANU color palette applied across all five pages | ✓ |
| Inter font loaded from local bundle on all pages | ✓ |
| Dark mode activates correctly under `prefers-color-scheme: dark` | ✓ |
| Search page reachable from primary navigation | ✓ |
| Mobile hamburger menu functional at ≤640 px viewport | ✓ |
| `npm run build` completes without errors | ✓ |
| Drop-in sessions page renders at `/events/` with nav link | ✓ |
| Pattern pages include "Contribute or change pattern" and "Download .md File" buttons | ✓ |
| Blog RSS feed available at `/rss.xml` and linked in `<head>` | ✓ |
| Patterns RSS feed available at `/patterns/rss.xml` | ✓ |
| Visible RSS icon buttons on blog and patterns index pages | ✓ |
| "Powered by" label renders above ANU footer logo | ✓ |
| Deployed site visually verified on GitHub Pages | ✓ |
