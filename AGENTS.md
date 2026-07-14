# 🤖 Agent Context Handoff & Instructions

This file provides full context and instructions for AI agents (like Antigravity or Claude) operating in this repository (`/Users/evabettinaacostadepaula/blog`).

---

## 🎯 Project Overview
We are rebuilding Bettina (Bê) Acosta's personal technical blog and portfolio.
* **Target Domain:** `https://britneyscripts.github.io/blog` (GitHub Pages)
* **Framework:** Astro (Static Site Generator, initialized as "Empty" template, Node.js v24.18.0)
* **Theme & Styling:** Minimalist terminal-like dark theme (Vanilla CSS, zero frameworks/Tailwind)
* **Writing Workflow:** Local authoring in Obsidian (.md files), synced via Git, auto-deployed via GitHub Actions.

---

## 🎨 Design System Specs (The "Investigative Tech" Palette)
Defined in `src/styles/global.css`:
* **Background:** Deep Slate Charcoal (`#12141c`)
* **Cards/Code:** Darker Slate (`#1a1d29`)
* **Text:** Soft Off-White (`#e4e6eb`)
* **Accent:** Scorpio Wine Burgundy (`#8c303e`)
* **Hover Accent:** Brighter Wine (`#b83f53`)
* **Borders:** Steel Gray 1px grid (`#2a2e3d`)
* **Fonts:** `Inter` / `Outfit` (sans-serif) and `Fira Code` / `Roboto Mono` (monospace)

---

## 📂 Codebase Architecture (Created Files)
All base layouts, pages, and config schemas are already implemented:
1. `src/styles/global.css` - Custom styling tokens, layout padding, typography, markdown code block layouts.
2. `src/layouts/Layout.astro` - Base head wrapper, dynamically resolves `import.meta.env.BASE_URL` for navigation on GitHub Pages subfolder.
3. `src/pages/index.astro` - Landing page with hero, career narrative bio, interactive-style technical stack grid, and latest 3 posts list.
4. `src/pages/blog.astro` - Full blog post archive, sorted by date descending.
5. `src/pages/about.astro` - Detailed "About me" page highlighting Bettina's research on Agentic Commerce, Ghostprod, and connections.
6. `src/pages/blog/[slug].astro` - Dynamic route for parsing and rendering individual Markdown posts.
7. `src/content/config.ts` - Content collection schema for Zod validation, mapping `title`, `description` (optional), `date` (z.coerce.date()), `author`, `tags`, and `draft`.

---

## 📋 Active Tasks & Next Steps

If you are a newly spawned agent, the initial site migration is already complete.
The current workflow is to:
1. Maintain existing features.
2. Publish new markdown posts.
3. Ensure SEO and structural integrity (e.g., maintaining the tags system and `translationOf` links for multi-lingual content).
