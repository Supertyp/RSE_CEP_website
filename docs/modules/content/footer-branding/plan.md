# Plan: footer-branding

## Purpose

Add a "Powered by" label above the ANU logo in the site footer, matching the institutional branding convention shown in the ANU screenshot provided by the user.

## Source files

| File | Role |
|------|------|
| `src/layouts/BaseLayout.astro` | Wrapped ANU logo `<a>` in a `.footer-logo-anu` flex column; added `<span class="powered-by">Powered by</span>` above it |

## Components

- `.footer-logo-anu` — flex column container aligning the label and logo vertically
- `.powered-by` — small label text rendered above the ANU logo image
- No new CSS tokens introduced; label uses existing `--color-text-muted` and `--font-size-sm` tokens (or equivalent inline styles)

## Integration points

- Contained entirely within `BaseLayout.astro` footer section
- No effect on other pages or features

## Testing

No automated tests (project uses manual verification only — see `docs/constitution.md`).

Verification:
1. `npm run build` completes without errors
2. "Powered by" label visible above ANU logo in footer on all pages
3. Label renders correctly in both light and dark modes
