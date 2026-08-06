type PageHeadingProps = {
  children: string;
  /** The blinking underscore reads as a prompt, so only the first heading on a
   *  page should carry it. */
  showCursor?: boolean;
};

/** The lowercase terminal-style heading used at the top of each page. */
const PageHeading = ({ children, showCursor = true }: PageHeadingProps) => (
  <h1 className="mt-12 mb-10 text-cream text-4xl flex items-center justify-center gap-0.5">
    {children}
    {showCursor && <span className="cursor-blink text-accent">_</span>}
  </h1>
);

export default PageHeading;
