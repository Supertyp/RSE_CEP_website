# Design Decisions — RSE CEP Website

## Color palette: ANU brand colors

**Decision:** Apply ANU brand colors as CSS custom properties, replacing the generic blue accent.

**Rationale:** The project is an ANU initiative. Institutional color alignment signals credibility and affiliation to the research community without any designer effort. A custom RSE CEP palette was considered but rejected — it would require creative design input not currently available to the team.

**Note:** Exact hex values must be confirmed against official ANU brand guidelines before implementation. Approximate reference: ANU Gold ~`#BE830E`, ANU Dark ~`#1A1A1A`.

---

## Typography: self-hosted Inter

**Decision:** Load Inter (Latin subset, WOFF2) via `@font-face` from `public/fonts/`. No external CDN.

**Rationale:** System fonts render inconsistently across devices and give the site a generic appearance. Google Fonts CDN was rejected: external dependency and a GDPR/privacy concern for a `.edu` context. Self-hosting gives consistent rendering with no privacy or availability risk.

---

## Dark mode: `prefers-color-scheme` media query

**Decision:** Override the CSS token set inside a single `@media (prefers-color-scheme: dark)` block in `global.css`. No JS, no user toggle.

**Rationale:** The existing CSS variable design already supports this pattern — dark-mode overrides are a one-block addition. Respects OS preference automatically. A JS-based toggle was considered unnecessary for a content site with no user accounts.

---

## Mobile navigation: CSS-only hamburger

**Decision:** Implement the mobile menu using a CSS-only pattern (`<details>`/`<summary>` or checkbox/label toggle) in `BaseLayout.astro`. No JavaScript.

**Rationale:** The hamburger is a purely presentational concern. Avoiding JS keeps the site functional without scripting and reduces attack surface.

---

## Navigation: Search link added

**Decision:** Add a Search link to the primary nav pointing to `/search/`.

**Rationale:** Pagefind search was already built and deployed but unreachable from the navigation. Adding a nav link makes an existing feature discoverable at zero implementation cost.
