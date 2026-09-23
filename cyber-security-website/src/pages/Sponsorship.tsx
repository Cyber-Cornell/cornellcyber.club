import PageHeading from "../components/PageHeading";

const Sponsorship = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1l6N3hVTod1jawR906S_-viu-ymoqXPbW/view?usp=sharing";

  return (
    <div className="w-full text-cream flex flex-col items-center pt-10 px-4 pb-24">
      <PageHeading>sponsors</PageHeading>

      <section aria-labelledby="sponsors-heading" className="mb-12 w-full max-w-3xl">
        <h2 id="sponsors-heading" className="text-center text-3xl text-white mb-4">our sponsors</h2>
        <p className="mb-8 text-center text-sm leading-relaxed text-cream">
          Thank you to the organizations supporting Cyber@Cornell. Sponsors are recognized by sponsorship tier.
        </p>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cream/60 bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">Platinum tier</span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl">platinum sponsors</h3>
        </div>
        <a
          href="https://www.icr-team.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-7 rounded-lg border-2 border-cream/60 bg-black/85 p-6 sm:flex-row sm:p-8 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div className="flex h-40 w-full max-w-56 shrink-0 items-center justify-center p-3">
            <img src="/sponsors/icr.png" alt="ICR — Ideas, Commitment, Results" width="300" height="187" className="h-auto w-full brightness-0 invert" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="mb-2 text-3xl font-bold text-white">ICR</h4>
            <p className="text-sm leading-relaxed text-cream">Proudly supporting the next generation of cybersecurity talent at Cornell.</p>
            <span className="mt-5 inline-block text-sm text-accent-bright underline underline-offset-4 group-hover:text-white">Meet ICR <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></span>
          </div>
        </a>
        <div className="mt-8 border-t border-cream/20 pt-6">
          <h3 className="mb-3 text-xs uppercase tracking-[0.14em] text-cream/70">Educational partner</h3>
          <a
            href="https://www.ainfosec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-md bg-black/85 py-3 text-cream hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span>
              <span className="block text-lg font-medium">AIS</span>
              <span className="mt-1 block text-xs text-cream/70">Assured Information Security</span>
            </span>
            <span aria-hidden="true" className="text-cream/70">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      <section aria-labelledby="packet-heading" className="w-full max-w-3xl border-2 border-cream rounded-lg bg-black/85 p-6 sm:p-8 text-center">
        <h2 id="packet-heading" className="mb-5 text-2xl text-white">become a sponsor</h2>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Interested in supporting Cyber@Cornell? Our sponsorship
          packet includes information about our mission, events, and how your
          organization can get involved.
        </p>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-accent text-accent-bright px-6 py-2 rounded-full tracking-wide text-sm md:text-base hover:bg-accent hover:text-ink transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          View Sponsorship Packet (PDF)
        </a>

        <p className="mt-4 text-xs md:text-sm text-muted">
          The PDF will open in a new tab on Google Drive.
        </p>
      </section>
    </div>
  );
};

export default Sponsorship;
