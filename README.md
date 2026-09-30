# britneyscripts.github.io

Source code for [britneyscripts.github.io](https://britneyscripts.github.io), the technical blog of Bê Acosta: essays and research notes on Agentic Commerce, RAG, AI search and e-commerce infrastructure, in English and Portuguese.

## Stack

- [Astro](https://astro.build) static site, no UI framework
- Vanilla CSS design tokens in `src/styles/global.css`
- Markdown posts authored in Obsidian and validated by a Zod content schema
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Structure

```text
src/
├── content/blog/{en,pt}/   # Posts (Markdown). Files starting with _ are ignored.
├── content.config.ts       # Frontmatter schema: title, description, date, tags, draft, translationOf
├── layouts/Layout.astro    # Shared <head>, navigation, hreflang
├── pages/
│   ├── index.astro         # Home
│   ├── about.astro
│   ├── [lang]/blog.astro   # Archive per language, with tag filter
│   └── blog/[...slug].astro # Post page
└── styles/global.css
```

## Writing a post

Create `src/content/blog/<lang>/<slug>.md`:

```yaml
---
title: "Post title"
description: "One-line summary"
date: 2026-09-30T19:00:00-03:00
tags: ["rag", "agentic-commerce"]
draft: true              # set to false to publish
translationOf: "en/..."  # optional, links translated versions
---
```

## Running locally

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # production build in ./dist
```
