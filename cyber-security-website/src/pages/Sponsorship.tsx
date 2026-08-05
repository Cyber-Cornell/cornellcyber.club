const Sponsorship = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/1l6N3hVTod1jawR906S_-viu-ymoqXPbW/view?usp=sharing";

  return (
    <div className="w-full text-[#E1DAD3] flex flex-col items-center pt-24 px-4 pb-24">
      <h1 className="text-3xl md:text-4xl tracking-wide mb-10 font-['Roboto_Mono']">
        Sponsorship
      </h1>

      <div className="w-11/12 md:w-3/5 lg:w-1/2 border border-[#E1DAD3] rounded-xl p-8 text-center">
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Interested in supporting Cyber@Cornell? Our sponsorship
          packet includes information about our mission, events, and how your
          organization can get involved.
        </p>

        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#FA2136] text-[#FA2136] px-6 py-2 rounded-full tracking-wide text-sm md:text-base hover:bg-[#FA2136] hover:text-[#0A0A0A] transition"
        >
          View Sponsorship Packet (PDF)
        </a>

        <p className="mt-4 text-xs md:text-sm text-[#C2BBB3]">
          The PDF will open in a new tab on Google Drive.
        </p>
      </div>
    </div>
  );
};

export default Sponsorship;
