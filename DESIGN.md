# DESIGN.md — the Cyber@Cornell design system

One page, one truth. The site's identity is a **terminal**: monospace type,
black canvas, matrix rain, a blinking prompt, and the club red. Everything
below codifies that so new sections read as part of the same site. If a rule
here conflicts with what you're building, change the rule here first.

See also: [README](README.md) for commands and layout, [IMAGES.md](IMAGES.md)
for image formats, and the color-token notes in
`cyber-security-website/README.md`.

## Color

Tokens live once in `cyber-security-website/src/index.css` under `@theme`,
which also generates the Tailwind utilities (`text-accent`, `bg-black/85`,
`border-team-blue/60`, …). Never write a hex into a component — the palette
drifted to seven near-identical reds the last time that happened.

| Token | Value | Use |
|---|---|---|
| `accent` | `#fa2139` | the club red — borders, solid fills, focus rings |
| `accent-bright` | `#ff3b3b` | lighter red for small text on black |
| `team-blue` | `#2f8fff` | SecDev/CCDC (defensive) identity |
| `team-blue-bright` | `#61adff` | accessible blue labels on dark |
| `cream` | `#e1dad3` | body text on dark |
| `ink` | `#0a0a0a` | text on red or cream surfaces |
| `muted` | `#5c5f6b` | secondary text, disabled controls |
| `white` / `black` | — | headings / the canvas; usable directly |

Red is the site's voice; blue appears **only** for the defensive-security
team identity (SecDev + CCDC card on About). Alpha variants of a token are
fine (`bg-black/85`, `border-accent/60`); in page CSS use
`color-mix(in srgb, var(--color-accent) 45%, transparent)` instead of rgba.

## Type

Everything is Roboto Mono (300–700), loaded in `index.css` — there is no
second font. Hierarchy comes from size, case, and color:

- **Page heading** (`PageHeading`): lowercase, `text-4xl text-cream`, first
  heading on the page ends with a blinking red `_` — "meet our team",
  "contact us", "become a cybear." Only the first heading gets the cursor.
- **Section headings**: lowercase, `text-3xl md:text-4xl tracking-wide`,
  white — "what we do", "our two teams", "major events".
- **Kickers** (eyebrows above a heading): uppercase, tracked
  `tracking-[0.14em]`+, bold, `accent-bright` (or `team-blue-bright` inside
  the blue card) — "Fall recruitment // timeline".
- **Body**: normal sentences, `cream`, `leading-relaxed`.
- **Metadata**: `muted`, small — dates, captions, footnotes.

Headings are lowercase like a shell prompt; brand names keep their caps
("what is Cyber@Cornell?"). The `//` separator is the house connective:
"Deadline // September 16", "5:30 PM // Location TBA", "Build // defend //
break". The navbar renders links in `[brackets]`; the brand is a fake prompt
(`cornellcyber/about`) with a flashing underscore.

## Surfaces

The site is flat and boxed, like panels drawn in a terminal. No blur, no
glassmorphism, no drop shadows on static elements — depth comes from borders
and the rain behind them. Four recipes cover the whole site:

| Surface | Recipe | Used by |
|---|---|---|
| **Outlined box** | `border-2 border-<white\|accent\|team-blue\|muted>` + `rounded-lg` + `bg-black/85` when text sits over the rain (omit the fill for media cards) | `EventCard`, About team cards, Home apply banner, Join timeline cards |
| **Notched card** | outlined box with its heading notched into the border (`NotchedLabel`), transparent fill | `OutlinedCard`, `TeamMemberCard`, Contact form |
| **Accent banner** | `bg-accent` + `rounded-xl` + ink text | About title banner + join CTA |
| **Light card** | `bg-cream` + `rounded-lg` + red pill header | `ActivityCard` |

Rules of thumb:

- **Radius scale**: `rounded-full` for buttons/chips/status dots, `rounded-xl`
  (12px) for page-wide banners and the hero, `rounded-lg` for content cards
  and photos, `rounded-md` for form fields.
- **Borders are 2px** — the boxy ASCII-frame look. 1px borders read as
  modern UI chrome and are reserved for dividers *inside* a card.
- **Fill** is either transparent or `bg-black/85` (one number) so the rain
  reads through text panels without hurting legibility. Never blur it.

## Buttons

| Role | Recipe |
|---|---|
| **Primary** | solid pill: `bg-accent text-ink rounded-full font-bold`, `hover:scale-105` |
| **Secondary** | outlined pill: `border-accent text-accent rounded-full`, fills red on hover |
| **On a red banner** | inverted pill: `bg-ink text-white rounded-full` |

The Join hero's apply button (Join.css) is the same primary pill with an
added hover glow. Text links use `accent-bright`, underline, and shift to
white on hover. Every interactive element gets
`focus-visible:outline-2 outline-offset-4 outline-accent`.

## Depth and glow

The design is flat: static elements carry **no shadows at all** — a box and
its fill are the whole surface. The one exception is glow
(`0 0 18–28px color-mix(… 16–45%, transparent)`), a *semantic* effect reserved
for "live" state: the featured nav pill, the active timeline card, the pulsing
status dot, and hover feedback on the primary CTA. If nothing is live, nothing
glows. `backdrop-blur` is banned — it is the fast lane back to glassmorphism.

## Motion

The site animates like a terminal, never like a carousel:

- **Typing** — hero title and CTAs type themselves out (`TextType`); nav
  underscore flashes (`FlashingChar`); page headings blink (`cursor-blink`,
  defined once in `index.css`).
- **Ambient** — the matrix-rain canvas sits fixed behind everything
  (`Matrix.tsx`), one instance per site, not per page.
- **State** — the recruitment status dot pulses; cards lift via
  `hover:scale-105` transforms only (no layout-shifting hovers).
- Respect `prefers-reduced-motion`: disable pulses and transitions as
  Join.css does.

## Where styles live

- Tokens and global keyframes: `src/index.css` (only place hex values may
  appear; `Matrix.tsx` holds one commented exception because canvas needs a
  parseable color).
- Components and pages: Tailwind utilities inline, next to the markup they
  style.
- Page CSS files (`Join.css`, `Navbar.css`, …): only for layouts too complex
  for utilities (heroes, timelines) — and always via `var(--color-*)` /
  `color-mix`, never raw hex or rgba.

## Checklist for a new section

1. Lowercase heading; blinking cursor only if it opens the page.
2. Tokens only — no hex, no rgba; alphas through Tailwind or `color-mix`.
3. Right surface: outlined box / notched card / accent banner / light card.
4. Primary action is a solid red pill; secondary is outlined.
5. No blur, no shadows on static elements; glow only if the thing is "live".
6. Focus rings and `//` separators where metadata joins.
7. Reduced-motion respected for anything that pulses or transitions.
