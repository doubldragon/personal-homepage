# Personal Homepage — Plan

## Overview

A minimal, clean personal site serving as a portfolio and professional presence.

## Stack

- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **Package manager:** Yarn
- **Deployment:** GitHub Pages

## Pages

| Page | Path | Purpose |
|---|---|---|
| Homepage | `index.tsx` | Intro, featured work, links |
| Resume | `resume.tsx` | Work history, skills, education |
| Projects | `projects/` | Individual project pages/components |

## Build Phases

### Phase 1 — Project setup
- [ ] Initialize Next.js app with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up GitHub Pages deployment (static export)
- [ ] Create base file structure (`index.tsx`, `resume.tsx`, `projects/`)

### Phase 2 — Homepage (`index.tsx`)
- [ ] Hero section (name, tagline, brief bio) + links (GitHub, LinkedIn, email, phone)
- [ ] Projects section (imports components from `projects/`)
- [ ] Work experience section

### Phase 3 — Theming
- [x] Add CSS custom properties for the color palette (bg, surface, border, text, accent) in `globals.css`
- [x] Register tokens with Tailwind's `@theme` so they're usable as `bg-theme-*` / `text-theme-*` classes
- [x] Apply basic placeholder colors for light mode — to be refined once a final theme is chosen
- [x] Define a dark mode palette under a `[data-theme="dark"]` selector (or `prefers-color-scheme: dark` media query) using the same token names

### Phase 4 — Navbar
- [x] Create `components/Navbar.tsx`
- [x] Name / logo on the left; section scroll-links on the right
- [x] Mobile responsive: links collapse into a hamburger menu at `md` breakpoint and below
- [x] Add section IDs to `index.tsx` (`#hero`, `#about`, `#projects`, `#experience`) for scroll targets
- [x] Dark/light mode toggle button in the navbar — persists preference via `localStorage` and applies `data-theme="dark"` on `<html>`
- [x] Mount navbar in `index.tsx` layout

### Phase 5 — Resume page (`resume.tsx`)
- [ ] Work experience
- [ ] Education
- [ ] Skills

### Phase 6 — Projects
- [ ] Define project component structure
- [ ] Add first project page
- [ ] Iterate for additional projects

### Phase 7 — Polish
- [ ] Responsive design review
- [ ] Typography and spacing pass
- [ ] SEO metadata
- [ ] Custom domain (if applicable)

## Design Principles

- Minimal and clean — whitespace over decoration
- Typography-driven
- Fast and accessible
- Content first
