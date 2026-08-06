type NotchedLabelProps = {
  /** Label text — also drives the width, so it must be a plain string. */
  children: string;
  /** Which of the card's borders the label sits on. */
  position?: "top" | "bottom";
  /** Colour and size for the label; the base styles set neither, so these
   * never have to fight the defaults. */
  className?: string;
};

/**
 * A caption that straddles a card's border, masking it with the page
 * background so the text reads as a notch cut into the outline.
 *
 * Both the width and the offset are derived from the text rather than
 * hand-tuned: the card font is monospace, so a label is exactly as many `ch`
 * wide as it has characters, and `-translate-y-1/2` centres it on the border
 * whatever font size the caller sets.
 */
const NotchedLabel = ({
  children,
  position = "top",
  className = "",
}: NotchedLabelProps) => (
  <p
    className={[
      "absolute bg-black font-['Roboto_Mono'] px-2",
      position === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2",
      className,
    ].join(" ")}
    style={{ width: `calc(${children.length}ch + 1rem + 2px)` }}
  >
    {children}
  </p>
);

export default NotchedLabel;
