# cyber-security-website

The Vite app behind [cornellcyber.club](https://cornellcyber.club). See the
[repo README](../README.md) for commands and [IMAGES.md](../IMAGES.md) for how to
add images.

## Layout

```
src/
  App.tsx          routes (HashRouter) + the fixed matrix-rain backdrop
  index.css        design tokens — colors live here, see below
  App.css          Tailwind entry point
  pages/           one file per route
  components/      everything reused across pages
  assets/          images, all WebP/AVIF
public/            copied to the site root verbatim (favicon)
```

## Colors

Every color is a token defined once in `src/index.css` under `@theme`. Use the
Tailwind class, not a hex:

| Token | Class | Use |
|---|---|---|
| `--color-accent` | `text-accent` / `bg-accent` / `border-accent` | the club red |
| `--color-accent-bright` | `text-accent-bright` | the lighter red for labels on dark |
| `--color-cream` | `text-cream` | body text on dark |
| `--color-ink` | `text-ink` | text on top of a red or cream panel |
| `--color-muted` | `text-muted` | disabled and secondary text |

Adding a hex literal to a component is how the palette drifted to seven
different reds last time. If a shade is genuinely missing, add a token.

## Routes

Defined in `App.tsx`. `/join` currently redirects to `/` because applications
are closed — `pages/Join.tsx` is kept intact for when they reopen; restore it by
pointing the route back at `<Join />`.
