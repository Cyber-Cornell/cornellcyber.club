import { useEffect, useRef } from "react";

/** Hoisted out of the draw loop — the colour never changes mid-animation, so
 *  parsing it once per mount beats re-running the regex for every column of
 *  every frame. */
const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

type Props = {
  color?: string;
  fontSize?: number;
  fpsCap?: number;
  speed?: number;
  maxHeight?: number; // Maximum height in pixels
};

export default function MatrixRain({
  // Mirrors --color-muted. Kept as a literal because the canvas needs a hex it
  // can parse into channels, not a CSS variable.
  color = "#5c5f6b",
  fontSize = 22,
  fpsCap,
  speed = 0.3,
  maxHeight,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;

    // The canvas is backed by device pixels but drawn in CSS pixels, so every
    // fill below measures against these rather than canvas.width/height.
    let cssWidth = 0;
    let cssHeight = 0;

    const setSize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const { innerWidth: w, innerHeight: h } = window;
      const canvasHeight = maxHeight ? Math.min(h, maxHeight) : h;
      cssWidth = w;
      cssHeight = canvasHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${canvasHeight}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(canvasHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initColumns();
    };

    let columns: number[] = [];
    const columnWidth = fontSize;
    const initColumns = () => {
      const count = Math.ceil(window.innerWidth / columnWidth);
      columns = new Array(count)
        .fill(0)
        .map(() => Math.floor(Math.random() * -50));
    };

    const bgFade = 0.08;
    const glyphs = ["0", "1"];
    const rgb = hexToRgb(color);

    let frame = 0;
    const step = Math.max(1, Math.round(1 / speed));

    const draw = (now: number) => {
      if (fpsCap) {
        const minDelta = 1000 / fpsCap;
        if (now - lastFrameRef.current < minDelta) {
          rafRef.current = requestAnimationFrame(draw);
          return;
        }
        lastFrameRef.current = now;
      }

      ctx.fillStyle = `rgba(0,0,0,${bgFade})`;
      ctx.fillRect(0, 0, cssWidth, cssHeight);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
      ctx.textBaseline = "top";

      frame++;

      const maxCanvasHeight = maxHeight
        ? Math.min(window.innerHeight, maxHeight)
        : window.innerHeight;

      for (let i = 0; i < columns.length; i++) {
        const x = i * columnWidth;
        const y = columns[i] * fontSize;

        if (frame % step === 0) {
          const char = glyphs[(Math.random() * glyphs.length) | 0];

          // Fade from fully opaque at the top of the viewport to invisible at
          // the bottom.
          const opacity = Math.max(0, 1 - y / maxCanvasHeight);

          if (rgb) {
            ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
          } else {
            // Fallback: use globalAlpha for non-hex colors
            ctx.globalAlpha = opacity;
            ctx.fillStyle = color;
          }
          
          ctx.fillText(char, x, y);
          
          // Reset globalAlpha if we used it
          ctx.globalAlpha = 1.0;

          if (y > maxCanvasHeight && Math.random() > 0.975) {
            columns[i] = Math.floor(Math.random() * -20);
          } else {
            columns[i]++;
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    setSize();
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [color, fontSize, fpsCap, speed, maxHeight]);

  const canvasStyle = maxHeight ? { height: `${maxHeight}px` } : {};

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none"
      style={canvasStyle}
      aria-hidden="true"
    />
  );
}
