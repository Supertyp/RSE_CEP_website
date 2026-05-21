# Plan: pattern-enhancements

## Purpose

Three enhancements to individual pattern display pages (`/patterns/[slug]/`):
1. "Contribute or change pattern" button — links to a pre-filled GitHub issue for the specific pattern
2. "Download .md File" button — lets users download the raw markdown source for use in their own tooling
3. Removal of duplicate Pattern Metadata table — the metadata was rendered twice (once by the layout, once inside the markdown body); the in-body duplicate was removed

## Source files

| File | Role |
|------|------|
| `src/pages/patterns/[...slug].astro` | Added action buttons and computed issue/download URLs |
| `src/pages/patterns/[slug].md.ts` | New static endpoint — serves raw `.md` per pattern |
| `src/content/patterns/*.md` | Removed duplicate `## Pattern Metadata` table block from each file |

## Components

### Contribute/change button
- URL built from `encodeURIComponent`-encoded `title` and `body` query params pointing to `https://github.com/Supertyp/RSE_CEP_website/issues/new`
- Body pre-fills pattern ID, title, file path, and a "Proposed change:" prompt
- Opens in new tab (`target="_blank" rel="noopener"`)

### Download .md button
- Resolves download URL as `${base}patterns/${pattern.id}.md`
- Served by `src/pages/patterns/[slug].md.ts` — a static Astro endpoint that reads the source file from `src/content/patterns/` with `fs.readFileSync` and returns it with `Content-Type: text/markdown` and `Content-Disposition: attachment`
- `download` attribute hints the filename to the browser

### Duplicate metadata removal
- The `## Pattern Metadata` table block (generated during earlier content work) was embedded inside the markdown body of each pattern file, duplicating the frontmatter already rendered by the layout
- Removed from all three pattern files: `src/content/patterns/`

## Integration points

- Buttons share `.pattern-actions` / `.change-pattern-btn` CSS class already defined in `[...slug].astro`
- Static endpoint uses Astro's `getStaticPaths` + `GET: APIRoute` pattern — no new dependencies
- `BASE_URL` used via `import.meta.env.BASE_URL` (accounts for `/RSE_CEP_website/` prefix)

## Testing

No automated tests (project uses manual verification only — see `docs/constitution.md`).

Verification:
1. `npm run build` completes without errors; pattern `.md` files generated in `dist/patterns/`
2. "Contribute or change pattern" button renders on each pattern page and opens a pre-filled GitHub issue
3. "Download .md File" button downloads the correct `.md` file
4. No duplicate metadata table visible on any pattern page
