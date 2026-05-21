# RSE Capacity Enhancement Project Website

**Live site: [supertyp.github.io/RSE_CEP_website](https://supertyp.github.io/RSE_CEP_website/)**

Static website for the Research Software Engineering Capacity Enhancement Project (RSE CEP). Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Pages

- **Home** — project description, latest patterns and blog posts
- **Team** — project team members and bios
- **Blog** — news and project updates, with pagination and search
- **Patterns** — RSE pattern library grouped by type
- **Events** — weekly drop-in session schedule and Zoom link
- **Search** — site-wide full-text search (powered by Pagefind)
- **Contact** — contact information

## RSS feeds

- Blog: `/rss.xml`
- Patterns: `/patterns/rss.xml`

## Local development

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build + Pagefind index
npm run preview   # preview production build
```

> **Note:** run `npm run build` and `npm run dev` from inside WSL if on Windows — the npm scripts invoke Astro via cmd.exe, which does not support UNC paths.

## Adding content

### Blog post

Create a `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
pubDate: 2026-04-10
description: "A short summary shown in listings."
author: "Author Name"
---

Post content here.
```

The filename becomes the URL slug — `my-post.md` → `/blog/my-post/`.

### Pattern

Create a `.md` file in `src/content/patterns/`. Required frontmatter:

```markdown
---
title: "Pattern Title"
pattern_id: X-000
pattern_type: architectural   # architectural | implementation | design | process
keywords: [keyword-one, keyword-two]
hass_domains: [linguistics, digital-humanities]
author: Author Name
last_updated: 2026-05-01
source_type: talk-transcript  # or paper, workshop, etc.
source_ref: "Reference string"
---
```

Each pattern page automatically gets a **Contribute or change pattern** button (opens a pre-filled GitHub issue) and a **Download .md File** button.

### Team member

Edit the `team` array in `src/pages/team.astro`.

## Project structure

```
src/
├── content/
│   ├── blog/              # Blog posts (Markdown)
│   └── patterns/          # RSE patterns (Markdown)
├── layouts/
│   └── BaseLayout.astro   # Shared layout, nav, footer
├── pages/
│   ├── index.astro
│   ├── team.astro
│   ├── contact.astro
│   ├── events.astro
│   ├── search.astro
│   ├── rss.xml.ts         # Blog RSS feed
│   ├── blog/
│   └── patterns/
│       ├── rss.xml.ts     # Patterns RSS feed
│       └── [slug].md.ts   # Pattern .md download endpoint
└── styles/
    └── global.css         # Design tokens, dark mode, base styles
```

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`. The workflow builds with Node.js 24 and uploads the `dist/` output to GitHub Pages.
