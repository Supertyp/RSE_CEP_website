# Scope — RSE CEP Website

## Current scope

Visual design overhaul of the RSE CEP Astro site:

- ANU brand color palette applied as CSS custom properties
- Self-hosted Inter font (Latin subset, WOFF2) loaded via `@import` in `global.css`
- Dark mode via `prefers-color-scheme: dark` overriding the token set
- Search link added to primary navigation
- CSS-only mobile hamburger menu in `BaseLayout.astro`

## Current non-goals

- Resources / publications page
- Enhanced team profiles (photos, individual pages)
- Events / training page
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
| Deployed site visually verified on GitHub Pages | ✗ |
