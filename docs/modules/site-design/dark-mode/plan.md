# Feature: dark-mode

**Module:** site-design

**Purpose:** Add `@media (prefers-color-scheme: dark)` token overrides to `global.css` so the site automatically switches to a dark palette when the user's OS is in dark mode.

## Components

| Component | File | Change |
|-----------|------|--------|
| Dark token overrides | `src/styles/global.css` | `@media (prefers-color-scheme: dark)` block appended after `:root {}` |

**Token overrides:**
- `--color-bg: #1A1A1A`
- `--color-text: #F0F0F0`
- `--color-muted: #9CA3AF`
- `--color-border: #374151`
- `--color-accent: #D4A017` (slightly brighter gold — readable on dark background)

## Testing

All acceptance criteria are manual:

- `npm run build` passes
- `prefers-color-scheme: dark` emulation (DevTools or OS toggle): dark background on all five pages
- Text readable in dark mode; ANU gold accent readable on dark background

## Acceptance criteria

- [ ] `npm run build` passes
- [ ] Dark background (#1A1A1A) visible on all five pages under dark-mode preference
- [ ] All text legible in dark mode
- [ ] ANU gold accent (#D4A017) visible on dark background
