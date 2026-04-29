# Feature: design-foundation

**Module:** site-design

**Purpose:** Replace the generic color tokens with the ANU brand palette and load Inter Variable font via `@fontsource-variable/inter`.

## Components

| Component | File | Change |
|-----------|------|--------|
| CSS tokens | `src/styles/global.css` | `--color-accent` → ANU Gold (`#BE830E`); `--font-sans` → Inter Variable stack |
| Font loading | `src/layouts/BaseLayout.astro` | Add `import '@fontsource-variable/inter'` in frontmatter |
| Package manifest | `package.json` | Add `@fontsource-variable/inter` dependency |

**Note on ANU colors:** `#BE830E` is an approximation of ANU Gold. Verify against official ANU brand guidelines at implementation time.

## Testing

All acceptance criteria are manual (CSS visual change — no automated test applies):

- `npm run build` passes
- All five pages: ANU gold visible as link/accent color
- Inter font loads; browser DevTools → Network shows no external CDN font request
- No console errors

## Acceptance criteria

- [ ] `npm run build` passes
- [ ] ANU gold accent visible on all five pages
- [ ] Inter Variable loading from local bundle (no CDN)
- [ ] No console errors
