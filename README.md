# RSE Capacity Enhancement Project Website

Static website for the Research Software Engineering Capacity Enhancement Project (RSE CEP). Built with [Astro](https://astro.build).

## Pages

- **Home** — project description and latest blog posts
- **Team** — project team members
- **Blog** — news and project updates
- **Contact** — contact information

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Adding a blog post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
pubDate: 2026-04-10
description: "A short summary shown in listings."
author: "Author Name"
---

Post content here...
```

The filename becomes the URL slug — e.g. `my-post.md` → `/blog/my-post/`.

## Updating the team

Edit the `team` array in `src/pages/team.astro`.

## Deployment (GitHub Pages)

The site deploys automatically via GitHub Actions on every push to `main`.

Before first deploy, update `astro.config.mjs` with your GitHub username:

```js
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io',
  base: '/RSE_CEP_website',
});
```

Then in the GitHub repository: **Settings → Pages → Source → GitHub Actions**.

## Project structure

```
src/
├── content/
│   └── blog/          # Blog posts (Markdown)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── team.astro
│   ├── contact.astro
│   └── blog/
└── styles/
    └── global.css
```
