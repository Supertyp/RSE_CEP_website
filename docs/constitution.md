# Working Conventions — RSE CEP Website

## Process

Work follows the Bower framework. See `CLAUDE.md` for Bower commands and documentation conventions.

## Technology

- **Site generator:** Astro 5.6
- **Local dev:** `npm run dev` → http://localhost:4321
- **Build:** `npm run build` — runs Astro then Pagefind indexing; output in `dist/`
- **Preview built site:** `npm run preview`
- **Deployment:** Automatic via GitHub Actions on push to `main`

## Content authoring

**Blog posts** — create a `.md` file in `src/content/blog/`. Required frontmatter:

```markdown
---
title: "Post Title"
pubDate: 2026-04-29
description: "Short summary shown in listings."
author: "Author Name"
---
```

The filename becomes the URL slug (e.g. `my-post.md` → `/blog/my-post/`).

**Team members** — edit the `team` array in `src/pages/team.astro`.

## Testing approach

This is a static site with no automated tests. Feature verification is manual:

1. `npm run build` — must complete without errors
2. `npm run preview` or check the deployed GitHub Pages URL
3. Visually verify all affected pages at desktop and mobile (≤640 px) viewport widths

**Dark mode:** test by switching OS to dark mode or using browser DevTools to emulate `prefers-color-scheme: dark`.

## Verification required for ✓

A feature may only be marked ✓ in `status.md` and `module-status.md` after the manual build-and-check above has been completed and passed.

## Out-of-tree reference

The live deployed site at https://supertyp.github.io/RSE_CEP_website/ serves as the visual oracle for verifying deployments.
