# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at `localhost:4321`
- `npm run build` — production build to `./dist/`
- `npm run preview` — preview the built site locally
- `npm run astro -- --help` — Astro CLI (e.g. `astro add`, `astro check`)

Requires Node `>=22.12.0`.

## Architecture

Static Astro 6 site (no UI framework integration — plain `.astro` components). Personal portfolio for Mohnish Salian.

- **Pages** live in `src/pages/`; each `.astro` file becomes a route (`src/pages/work/index.astro` → `/work`).
- **Layout**: `src/layouts/BaseLayout.astro` is the single shared shell — it owns `<head>`, font preloads, global CSS import, `<Nav>`, `<Footer>`, and the `.page` container (max-width + padding). New pages should wrap their content in `BaseLayout` rather than duplicating `<html>`/`<head>`.
- **Path alias**: `~/*` maps to `src/*` (configured in `tsconfig.json`). Use `~/components/...` rather than relative paths.
- **Styling**: global CSS only, no CSS-in-JS or Tailwind. `src/styles/global.css` is the entry and imports in order: `tokens.css` (design tokens / CSS custom props — fonts, spacing, colors), `reset.css`, `base.css` (element defaults), `components.css` (reusable class-based components). Page/component-specific styles go in scoped `<style>` blocks inside the `.astro` file; shared patterns belong in `components.css` and shared values in `tokens.css`.
- **Fonts**: loaded via Astro's `fontProviders.google()` in `astro.config.mjs` and exposed as CSS variables `--font-serif` (Source Serif 4), `--font-sans` (Asap Condensed), `--font-mono` (JetBrains Mono). Preloaded in `BaseLayout`. To add a weight/style, edit the config — don't hand-link Google Fonts.
- **Icons**: `astro-icon` with `lucide` and `simple-icons` sets. The icon list is **explicitly allowlisted** in `astro.config.mjs` under `integrations[0].include` — adding a new icon requires adding its name there, or it won't render.
- **Assets**: imported from `src/assets/` when processed by Astro (hashed/optimized); static files that must keep their path live in `public/`.
