# sathwikanumandla.in

Personal portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Styling** — Tailwind CSS 4 with CSS custom properties for theming
- **Fonts** — Melodrama (headings), Jost (body), self-hosted
- **Icons** — Font Awesome 7

## Development

```bash
npm install
npm run dev
```

Runs on [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Adding a project

All project content lives in `src/lib/projects.ts`. Add an entry to the `projects` array with these fields:

```ts
{
  slug: "project-slug",
  title: "Project Title",
  date: "month year",
  description: "Short description shown on cards.",
  content: "Longer description shown on the project detail page.",
  tech: ["next.js", "react"],
  github: "https://github.com/...",  // use "#" to hide
  live: "https://...",               // use "#" to hide
  reflections: "What you learned.",
}
```

Place project images in `public/images/<slug>/`.
