# Feature: navigation-mobile

**Module:** site-design

**Purpose:** Add a Search link to the primary navigation and a CSS-only mobile hamburger so the site is properly usable on small screens.

## Components

| Component | File | Change |
|-----------|------|--------|
| Nav HTML | `src/layouts/BaseLayout.astro` | Wrap nav links in `<details>`/`<summary>` for mobile toggle; add Search link |
| Nav styles | scoped `<style>` in `BaseLayout.astro` | Responsive rules: hamburger shown at ≤640 px, normal horizontal nav at >640 px |

## Technical approach

`<details>`/`<summary>` CSS-only pattern:

- The `<nav>` contains a `<details>` wrapping the link list
- `<summary>` is the hamburger button (visible at ≤640 px, hidden at >640 px)
- At >640 px: `details` has `open` forced via CSS (`details { display: contents }` or similar), `summary` is `display: none`
- At ≤640 px: normal `<details>` behaviour — closed by default, `<summary>` click toggles open
- No JavaScript

Search link added as a standard `<li>` item alongside Team · Blog · Contact.

## Acceptance criteria

- [ ] `npm run build` passes
- [ ] Desktop (>640 px): horizontal nav, all four links (Team · Blog · Contact · Search) visible
- [ ] Mobile (≤640 px): hamburger button shown; tap reveals links stacked vertically
- [ ] Search link navigates to `/search/`
- [ ] Nav renders correctly in both light and dark mode
