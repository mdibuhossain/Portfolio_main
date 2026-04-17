# Ibrahim Hossain — Portfolio

A fully responsive personal site for **Md. Ibrahim Hossain**, built with AstroJS.

- **Live focus:** editorial / refined aesthetic — warm-black canvas, cream ink, vivid orange accents.
- **Stack:** Astro 5, Tailwind CSS v4, TypeScript (strict), MDX, Astro Content Collections.
- **Content pipeline:** a file-based "CMS" — every piece of content lives in `src/content/` as JSON or MDX, validated against Zod schemas.
- **Performance:** zero-JS by default; small client scripts for cursor glow, theme toggle, mobile menu, and scroll reveal. Fonts preconnect, prefetch-all navigation.
- **Accessibility:** skip-link, semantic headings, reduced-motion respect, keyboard focus retained.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in ./dist
npm run preview    # preview the built site
npm run check      # astro check + TypeScript
```

## Project structure

```
src/
├── content.config.ts         ← all content schemas (Zod)
├── content/                  ← the "CMS" — edit these to change the site
│   ├── site/config.json      ← name, role, bio, socials, SEO
│   ├── experience/*.json     ← each job = one JSON file
│   ├── projects/*.md         ← each project = one MDX/MD file
│   ├── skills/skills.json    ← stack categories
│   ├── education/*.json
│   └── achievements/*.json
├── layouts/Base.astro        ← HTML shell, SEO, fonts, theme boot
├── components/
│   ├── Header.astro          ← nav + mobile menu + theme toggle
│   ├── Footer.astro
│   ├── CursorGlow.astro      ← soft follow-cursor glow
│   ├── ThemeToggle.astro
│   ├── Marquee.astro
│   ├── ProjectCard.astro
│   └── sections/             ← one file per homepage section
├── pages/
│   ├── index.astro           ← homepage
│   ├── projects/index.astro  ← list of all projects
│   ├── projects/[slug].astro ← a project detail page per MDX file
│   ├── 404.astro
│   └── robots.txt.ts
├── styles/global.css         ← design tokens, theme, utilities
└── utils/formatDate.ts
```

## The content "CMS" — how to edit the site

> **Why no database-backed CMS?** For a personal portfolio maintained by a developer, a full CMS (Sanity, Strapi, etc.) is overkill. Astro Content Collections give you type-safe, validated, git-versioned content in plain files. Every change is a commit, every deploy is a snapshot, and you never have to run a server.

### Quick edits

| What to change                      | File(s)                                     |
|-------------------------------------|---------------------------------------------|
| Name, role, bio, socials, SEO       | `src/content/site/config.json`              |
| Add / edit a job                    | `src/content/experience/*.json`             |
| Add / edit a project (rich content) | `src/content/projects/*.md` (frontmatter + markdown) |
| Skill categories and items          | `src/content/skills/skills.json`            |
| Education entries                   | `src/content/education/*.json`              |
| Awards / recognition                | `src/content/achievements/*.json`           |
| Visual theme tokens                 | `src/styles/global.css` (CSS variables)     |

Schemas are enforced — `npm run check` will flag missing or misshaped fields before build.

### Add a new project

1. Create `src/content/projects/my-new-project.md`:
   ```markdown
   ---
   title: "My New Project"
   tagline: "A one-line hook."
   summary: "A two- to three-sentence paragraph used on the detail page hero."
   year: "2026"
   status: "live"        # live | wip | archived
   featured: true        # shows on homepage if true
   order: 0              # lower = earlier
   liveUrl: "https://example.com"
   sourceUrl: "https://github.com/..."
   stack: ["React", "Node.js"]
   role: "Full-stack"
   cover:
     from: "#6a0dad"
     to: "#ff00aa"
     text: "M/P"
   ---

   ## Context
   Write the story here in markdown / MDX.

   ## What I built
   - Bullet one.
   - Bullet two.
   ```
2. Save. The file's name becomes its slug (`/projects/my-new-project`).
3. The project card and detail page are auto-generated.

### Add a new job

Drop a new JSON file in `src/content/experience/` following the existing shape. Set `current: true` to show the live blinking badge. Jobs sort by `order` descending (higher number = more recent).

### Change the colour palette or fonts

All design tokens live at the top of `src/styles/global.css`. Two themes are defined: `:root` (dark) and `[data-theme="light"]`. Update a single variable (e.g. `--accent`) and the entire site adapts.

### Optional: GUI content editor (Decap CMS)

If you ever want a browser GUI for non-developers (or for editing from your phone), wiring up Decap CMS on top of this content structure is ~30 minutes of work. The schemas map 1:1 to Decap collections. Ping me and I'll add it.

## Deploy

Static output — drop on Vercel, Netlify, Cloudflare Pages, Firebase Hosting, GitHub Pages, or any static host.

**Vercel / Netlify:** connect the repo, build command `npm run build`, output directory `dist`.

**Firebase Hosting** (current `mdibuhossain.web.app`):
```bash
npm run build
firebase deploy --only hosting
```

## What makes this not another AI-generated portfolio

- **Typography:** Fraunces (variable serif with optical sizing + italic) for display, Manrope for body, JetBrains Mono for tags — not a drop of Inter.
- **Colour:** a warm-black base with a single confident accent, not the common "purple gradient on white" default.
- **Layout:** asymmetric 12-column grid, oversized display type, editorial section numbering (01 — 06), hand-styled pull-quotes and marquees.
- **Micro-interactions:** cursor glow, link-underline swipes, blinking availability dot, subtle scroll reveals — each present because the section earned it, not as a default.
- **Restraint:** zero JavaScript for the majority of content. Client scripts are small and feature-gated (no cursor glow on touch devices, no animation with `prefers-reduced-motion`).

---

© Md. Ibrahim Hossain · built with Astro · designed in the dark.
