# Status: rss-feeds

Implementation complete and deployed. Blog RSS at `/rss.xml` and patterns RSS at `/patterns/rss.xml` both generate during build and resolve on the live site. Discovery tag in `<head>` and visible icon buttons on both index pages.

Key constraint to remember: use `import.meta.env.SITE + import.meta.env.BASE_URL.slice(0, -1)` for URL base construction — `context.site` is undefined in static Astro builds.

Next move: none — feature is stable and complete.
