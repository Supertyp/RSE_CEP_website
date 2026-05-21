# Plan: rss-feeds

## Purpose

RSS feeds for both the blog and patterns content collections, with feed discovery in the page `<head>` and visible RSS icon buttons on the index pages.

## Source files

| File | Role |
|------|------|
| `src/pages/rss.xml.ts` | Blog RSS feed endpoint at `/rss.xml` |
| `src/pages/patterns/rss.xml.ts` | Patterns RSS feed endpoint at `/patterns/rss.xml` |
| `src/layouts/BaseLayout.astro` | Added `<link rel="alternate">` discovery tag in `<head>` |
| `src/pages/blog/index.astro` | Added visible RSS icon button linking to `/rss.xml` |
| `src/pages/patterns/index.astro` | Added visible RSS icon button linking to `/patterns/rss.xml` |

## Components

### Feed endpoints

Both endpoints use Astro's static `GET: APIRoute` pattern. They generate RSS 2.0 XML from content collections.

**Critical implementation note:** `context.site` is `undefined` in Astro static builds. URLs must be constructed as:
```
const base = import.meta.env.SITE + import.meta.env.BASE_URL.slice(0, -1);
```
Do NOT use `new URL(path, context.site)` — it silently produces a broken URL.

- Blog feed: entries sorted by `pubDate` descending; item description from `description` frontmatter
- Patterns feed: entries sorted by `last_updated` descending; item description assembled from `type`, `author`, and `keywords` frontmatter

### Discovery tag

Added to `BaseLayout.astro` `<head>`:
```html
<link rel="alternate" type="application/rss+xml" title="RSE CEP Blog" href={`${base}rss.xml`} />
```

### Visible RSS icon buttons

Inline SVG RSS icon (standard fan-wave symbol) rendered as an `<a>` element beside the `<h1>` on each index page. Styled to match the existing action-button visual language.

## Integration points

- Both endpoints use `getCollection('blog')` and `getCollection('patterns')` — standard Astro content collection API
- `import.meta.env.SITE` and `import.meta.env.BASE_URL` are set in `astro.config.mjs` (`site: 'https://Supertyp.github.io'`, `base: '/RSE_CEP_website'`)
- No new CSS tokens introduced; icon button reuses existing link styles

## Testing

No automated tests (project uses manual verification only — see `docs/constitution.md`).

Verification:
1. `npm run build` completes without errors; `dist/rss.xml` and `dist/patterns/rss.xml` generated
2. Feeds validate as RSS 2.0 with correct item URLs
3. RSS icon buttons visible on blog and patterns index pages, links resolve correctly
4. Browser address bar shows RSS link in supported browsers (via `<link rel="alternate">`)
