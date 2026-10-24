# veirt's website

A small, static personal portfolio built with Astro. Astro components and Markdown content become plain HTML at build time; there are no client-side UI frameworks or hydrated components. The small `/site.js` file only handles the light/dark toggle.

## Development

```sh
bun install
bun run dev -- --port 9000
```

Open <http://localhost:9000/>. Build the static site with `bun run build`; output goes to `dist/`.

## Content

- `projects/*/index.md` — project notes and metadata
- `blog/*/index.md` — blog posts
- `src/pages/` — pages and generated routes
- `src/components/` — shared Astro components
- `src/styles/global.css` — visual system and responsive styles

## GitHub activity

The homepage fetches a contribution calendar at **build time**, so no GitHub requests are made from a visitor's browser. If the calendar service is unavailable, the page falls back to a link to the GitHub profile.

The calendar shows GitHub contributions, not only commits.
