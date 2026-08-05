import groupPhoto from "../assets/fa-25-teamphoto.jpeg";

const About = () => {
  return (
    <div className="w-full min-h-screen text-[#E1DAD3] flex flex-col items-center pt-20 overflow-x-hidden">
      {/* Red box with the requested content */}
      <section className="w-full flex justify-center py-8 mb-8">
        <div className="bg-[#FA2136] rounded-xl px-10 py-12 text-center max-w-2xl w-full">
          <h2 className="text-4xl text-[#0A0A0A] font-['Roboto_Mono'] text-left">
            What is the Cybersecurity Club?
          </h2>
        </div>
      </section>

      {/* About Us section from remote */}
      <div className="w-full flex flex-col md:flex-row gap-5 justify-center items-center mt-5 px-4">
        <div className="relative w-full max-w-[700px] h-[200px] border-2 border-white p-[10px] rounded-lg">
          <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[100px] text-lg font-['Roboto_Mono']">
            {" "}
            About Us{" "}
          </p>
          <p className="mt-8 w-[600px] ml-5">
            {" "}
            We are Cornell University's only student organization for
            cybersecurity, offering an exhaustive cybersecurity curriculum for
            both beginners and experienced individuals. Topics range from binary
            exploitation to cryptography, reverse engineering, and more.
          </p>
        </div>
        <img src={groupPhoto} alt="Picture here" className="w-[300px] h-[200px] ml-30 object-cover" />
      </div>

      <h2 className="text-3xl tracking-wide mb-8 mt-10 font-['Roboto_Mono']">
        What We Do
      </h2>
      <div className="flex flex-col items-center mt-5 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-2 w-full max-w-[800px]">
          {/*<img src="" alt="Picture here" className="w-[80px] h-[80px] mr-30" />*/}
          <div className="w-full max-w-[500px] h-[180px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center">
            <div className="flex justify-center items-center w-[120px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
              <p className="text-center text-black"> Education </p>
            </div>
            <div>
              <p className="text-center text-black mt-6">
                {" "}
                We host weekly technical workshops for our members to learn new
                skills and put their knowledge to the test.
              </p>
            </div>
          </div>
          {/*<img src="" alt="Picture here" className="w-[80px] h-[80px] ml-30" />*/}
        </div>
      </div>

      <div className="w-full px-4">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
          <div className="relative w-full max-w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[40px] text-lg font-['Roboto_Mono']">
              {" "}
              NME{" "}
            </p>
            <p> New Member Education (NME) provides the basics for beginners in cybersecurity to get started in competing and finding what specializations they may be interested in through interactive CTF problems.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
          <div className="relative w-full max-w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[40px] text-lg font-['Roboto_Mono']">
              {" "}
              SWE{" "}
            </p>
            <p className="mt-3"> SWE team is the software development wing of Cornell Cyber that applies CS and design skills 
                towards building tools to support operations. The SWE team is currently developing a command 
                and control (C2) framework to support the RvB team in competitions and simulate attacks.</p>
          </div>
          <div className="relative w-full max-w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[120px] text-lg font-['Roboto_Mono']">
              {" "}
              CTF B Team{" "}
            </p>
            <p className="mt-9"> CTF B team is the bridge from NME to competing on our official competition team. Members go through learning 
                materials, practice CTFs, and specialize in an area in CTF competition.</p>
          </div>
       </div>


        <div className="flex flex-col items-center mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-2 w-full max-w-[800px]">
            {/*<img
              src=""
              alt="Picture here"
              className="w-[80px] h-[80px] mr-30"
            />*/}
            <div className="w-full max-w-[500px] h-[200px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center">
              <div className="flex justify-center items-center w-[120px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> Competition </p>
              </div>
              <div>
                <p className="text-center text-black mt-6">
                  {" "}
                  One of our greatest purposes is to compete in global hacking
                  competitions known as CTFs. Members compete in practice
                  competitions and real events.
                </p>
              </div>
            </div>
            {/*<img
              src=""
              alt="Picture here"
              className="w-[80px] h-[80px] ml-30"
            />*/}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-2 w-full max-w-[800px]">
            {/*<img
              src=""
              alt="Picture here"
              className="w-[80px] h-[80px] mr-30"
            />*/}
            <div className="w-[500px] border-2 p-[10px] bg-[#E1DAD3] rounded-lg flex flex-col items-center mt-5">
              <div className="flex justify-center items-center w-[150px] h-[30px] border-2 border-black mt-2 bg-[#FF0000]/50">
                <p className="text-center text-black"> What is a CTF? </p>
              </div>
              <div className = "h-max">
                <p className="text-center text-black">
                  {" "}
          
                  "In cybersecurity, Capture the Flag (CTF) competitions are
                  exercises in which participants, either individually or as
                  part of a team, are challenged to find and exploit
                  vulnerabilities in a system to capture a 'flag' or piece of
                  information" (Filipkowski, 2024, p. 3).
                </p>
              </div>
            </div>
            {/*<img
              src=""
              alt="Picture here"
              className="w-[80px] h-[80px] ml-30"
            />*/}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
          <div className="relative w-full max-w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[100px] text-lg font-['Roboto_Mono']">
              {" "}
              CTF Team{" "}
            </p>
            <p className="mt-2"> The CTF Team competes in weekly jeopardy-style cybersecurity competitions. 
                Typical challenges fall into these common categories: Website Exploitation, 
                Reverse Engineering, Cryptography, and Binary Exploitation. The team also 
                creates challenges to further expand their understanding with respect to their fields.</p>
          </div>
          <div className="relative w-full max-w-[500px] h-[200px] border-2 border-white p-[10px] rounded-lg">
            <p className="absolute -top-[15px] bg-[#0A0A0A] text-[#FF3B3B] w-[200px] text-lg font-['Roboto_Mono']">
              {" "}
              Red vs Blue Team{" "}
            </p>
            <p className="mt-2"> The Red vs. Blue Team is our premier attack-and-defense unit, dedicated to understanding 
                how real-world enterprise systems are compromised and how to defend them effectively. Members 
                primarily take on defensive (Blue Team) roles since most of our competitions require us to act 
                as the Blue Team under a simulated attack.</p>
          </div>
        </div>
      </div>

      <div className="w-full text-[#E1DAD3] flex flex-col items-center">
        {/* --- JOIN SECTION --- */}
        <section className="w-full flex justify-center py-10">
          <div className="bg-[#FA2136] rounded-xl px-10 py-12 text-center max-w-2xl w-full">
            <h2 className="text-xl text-[#0A0A0A] tracking-wide mb-6">
              READY TO JOIN?
            </h2>
            <span
              className="bg-gray-400 text-gray-700 px-6 py-2 rounded-full font-medium cursor-not-allowed inline-block"
              title="applications closed"
            >
              Join Us
            </span>
          </div>
        </section>

        {/* --- GALLERY PLACEHOLDER SECTION --- */}
        <section className="w-11/12 md:w-4/5 lg:w-3/5 h-64 bg-[#D9D9D9] text-[#0A0A0A] rounded-md flex items-center justify-center mb-8 d hidden">
        {/* Remove hidden when set */}
          <p className="tracking-wide text-sm">Gallery of pictures??</p>
        </section>

        {/* --- CORE VALUES (Square Bracket Style) --- */}
        <section className="w-full flex flex-col items-center pb-16 mt-4 hidden">
        {/* Remove hidden when set */}
          <h2 className="text-3xl tracking-wide mb-16 font-['Roboto_Mono']">
            Core Values
          </h2>

          <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center justify-between gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                {/* Bracket Icon Container */}
                <div className="relative flex items-center justify-center h-24 w-24 text-[#FA2136]">
                  {/* left bracket */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold select-none">
                    [
                  </span>

                  {/* right bracket */}
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-bold select-none">
                    ]
                  </span>

                  {/* Inside text or icon */}
                  <span className="text-xs uppercase tracking-widest">
                    Icon
                  </span>
                </div>

                {/* Description label */}
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-center">
                  Expand On Value
                </p>
              </div>
            ))}
          </div>

          {/* Divider Line */}
          {/*<div className="w-11/12 md:w-4/5 mt-24">
            <div className="border-t border-[#FA2136]" />
          </div>*/}
        </section>
      </div>
      
    </div>
  );
};

export default About;
