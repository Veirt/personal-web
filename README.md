# veirt's website

A small, static personal portfolio built with Astro. Astro components and Markdown content become plain HTML at build time; there are no client-side UI frameworks or hydrated components. Small browser scripts handle the light/dark toggle and live GitHub and Last.fm data.

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

The homepage fetches a contribution calendar in the browser from the public GitHub Contributions API. If the service is unavailable, the page shows a short fallback message.

The calendar shows GitHub contributions, not only commits.
