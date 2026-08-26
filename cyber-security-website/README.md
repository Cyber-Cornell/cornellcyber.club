# cyber-security-website

The Vite app behind [cornellcyber.club](https://cornellcyber.club). See the
[repo README](../README.md) for commands, [IMAGES.md](../IMAGES.md) for how to
add images, and [DESIGN.md](../DESIGN.md) for the full design system.

## Layout

```
src/
  App.tsx          routes (HashRouter) + the fixed matrix-rain backdrop
  index.css        design tokens + Tailwind entry point, see below
  pages/           one file per route
  components/      everything reused across pages
  assets/          images (WebP/AVIF where possible)
public/            copied to the site root verbatim (favicon)
```

## Colors

Every color is a token defined once in `src/index.css` under `@theme`. Use the
Tailwind class, not a hex. The full system — surfaces, buttons, type, motion —
is documented in [DESIGN.md](../DESIGN.md); the table below is the quick
reference:

| Token | Class | Use |
|---|---|---|
| `--color-accent` | `text-accent` / `bg-accent` / `border-accent` | the club red |
| `--color-accent-bright` | `text-accent-bright` | the lighter red for labels on dark |
| `--color-team-blue` | `text-team-blue` / `border-team-blue` | SecDev and CCDC blue-team identity |
| `--color-team-blue-bright` | `text-team-blue-bright` | accessible blue labels on dark |
| `--color-cream` | `text-cream` | body text on dark |
| `--color-ink` | `text-ink` | text on top of a red or cream panel |
| `--color-muted` | `text-muted` | disabled and secondary text |

Adding a hex literal to a component is how the palette drifted to seven
different reds last time. If a shade is genuinely missing, add a token.

## Routes

Defined in `App.tsx`. `/join` contains the active recruitment page. Update the
shared application URL and recruiting timeline in `src/data/recruitment.ts` so
the homepage callout and join page stay in sync.
