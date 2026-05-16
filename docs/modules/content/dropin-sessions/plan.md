# Plan: drop-in sessions

## Purpose

A dedicated events page at `/events/` announcing the weekly RSE-CEP drop-in sessions. Covers the Zoom link, monthly topic rotation with full date schedule, session format, and rationale.

## Source files

| File | Role |
|------|------|
| `src/pages/events.astro` | New page — full session content |
| `src/layouts/BaseLayout.astro` | Added "Events" nav link |

## Components

- **Session meta block** — dl/dt/dd structure (matches `contact.astro` pattern): When, Where (Zoom link), Who
- **Topic rotation table** — 4 rows (1st–4th Wednesday), topic name, 2026 dates in monospace
- **Format list** — open / online / informal bullets
- **Why section** — prose paragraph from brief

## Integration points

- `BaseLayout.astro` nav: Events link inserted between Patterns and Contact; uses same `active()` helper and `aria-current` pattern as existing links.
- CSS tokens: page uses only existing `--color-*`, `--font-*`, `--color-border` tokens — no new tokens introduced.

## Testing

No automated tests (project uses manual verification only — see `docs/constitution.md`).

Verification:
1. `npm run build` completes without errors
2. `/events/` renders: session meta, rotation table with all four topics, format list, Why section
3. "Events" nav link active-highlighted on `/events/`
4. Events link present in mobile hamburger at ≤640 px
