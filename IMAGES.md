# Adding images to the site

Every image in `src/assets/` should be WebP, sized for where it actually appears.
The originals are 3–25× larger than their display size, which is why the footer
alone used to be 1.7 MB on every page load.

Requires ImageMagick 7 (`magick`). Run these from `cyber-security-website/`.

## The rule

Resize to **2× the CSS size** the image renders at, strip metadata, encode WebP
at quality 82.

```sh
magick input.png -strip -resize 2Wx2H -quality 82 -define webp:method=6 src/assets/name.webp
```

`-define webp:method=6` is the slowest/smallest encoder setting. It takes a
second or two per image and is worth it.

## If the CSS crops the image

Anything with a fixed `w-[…] h-[…]` (headshots, the group photo) is cropped by
CSS, so crop it the same way at export or it comes out squashed:

```sh
magick input.jpg -strip -resize '580x600^' -gravity center -extent 580x600 \
  -quality 82 -define webp:method=6 src/assets/name.webp
```

The `^` means "cover" — fill the box, overflow on the long side. `-extent` then
trims the overflow from the center.

## Don't upscale

`-resize` will happily enlarge a small source and the WebP gets *bigger* while
looking no better. If the source is smaller than 2× display, export at its
native size instead. A 400×400 headshot exported at 580×600 came out at 49 KB;
the same one at 387×400 is a fraction of that and looks identical on screen.

Check first:

```sh
magick identify src/assets/*.png src/assets/*.jpg
```

## Transparency

`bear_sticker.png` has real transparency. Don't flatten it — just omit any
`-background`/`-flatten` flags and WebP keeps the alpha channel.

## Current sizes

| Image | Display | Export |
|---|---|---|
| Officer headshots | 290×300 | native (~400×400) or 580×600 |
| Advisor headshots | 290×400 | native |
| Footer social icons | 40×40 | 120×120 |
| Footer bear sticker | 150×150 | 400×400 |
| Group photo (About) | 300×200 | 600×400 |
| Mail icon | 100×70 | 200×140 |

## After exporting

1. Update the import in the page/component — the extension changes:
   ```ts
   import raman from "../assets/raman_headshot.webp";
   ```
2. `git mv` the original into `assets-archive/` (kept out of `src/` so it is
   unambiguously not build input). Don't delete — the original is the source
   for any future re-export.
3. `npm run build`, then `ls -laS dist/assets` — no single image should be over
   ~60 KB.
4. Look at the page in the browser. If it's blurry, the 2× target was too small;
   re-export larger.

## Favicon

Separate from the above — it lives in `public/`, not `src/assets/`, because Vite
copies `public/` to the site root verbatim and `index.html` asks for `/logo.png`.
Regenerate it from the source logo with:

```sh
magick src/assets/logo.png -strip -background black -gravity center \
  -extent 310x310 -resize 180x180 public/logo.png
```

The pad is square so browsers don't distort it, and black because that's the
logo's own background. Favicons cache hard — hard-reload (Ctrl+Shift+R) to see a
change.

## Files to leave alone

The `.avif` files (`jay_headshot`, `noah_headshot`, `link2_icon`) are already
smaller than a WebP re-encode would be. AVIF is fine to use directly — browser
support is universal now.
