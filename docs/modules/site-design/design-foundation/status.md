# Status: design-foundation

Complete. ANU Gold (`#BE830E`) replaces the blue accent in `global.css`; `--font-sans` updated to Inter Variable. Font loaded via `@import '@fontsource-variable/inter'` in `global.css` — Vite bundles the WOFF2 into the build output (no CDN at runtime). All five pages verified with correct colors and font. `npm run build` passes.
