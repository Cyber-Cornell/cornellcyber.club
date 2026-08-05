import ramanHeadshot from "../assets/raman_headshot.jpg";
import jakobHeadshot from "../assets/jakob_headshot.png";
import camHeadshot from "../assets/cam_headshot2.png";
import clarissaHeadshot from "../assets/headshot.jpg";
import andrewHeadshot from "../assets/sideheadshot.png";
import parthHeadshot from "../assets/parth_headshot.jpg";
import billHeadshot from "../assets/bill_headshot3.jpg";
import busterHeadshot from "../assets/buster_headshot.jpg";
import jackHeadshot from "../assets/jack_headshot.jpg";
import alexHeadshot from "../assets/alex_headshot.jpg";
import jayHeadshot from "../assets/jay_headshot.avif";
import noahHeadshot from "../assets/noah_headshot.avif";
import mailIcon from "../assets/mail_icon2.jpg";
import linkIcon from "../assets/link2_icon.avif";

const Team = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden pb-24">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
      <h1 className="mt-12 font-['Roboto_Mono'] text-[#E1DAD3] text-4xl mb-10 flex items-center justify-center gap-0.5">
        meet our team
        <span className="cursor-blink text-[#FA2139]">_</span>
      </h1>
      </div>


        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Raman Khanal{" "}
            </p>
            <img
            src={ramanHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:rk677@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/ramankhanal/" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute -bottom-[15px] left-3/4 -translate-x-1/2 bg-[#000000] text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              President{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Jakob Nacanaynay{" "}
            </p>
            <img
            src={jakobHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-30 mt-4"> Major: ECE</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center">
                <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:jn567@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jakob-nacanaynay-a93706213" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[160px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Vice President{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[150px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Cam Mazzacane{" "}
            </p>
            <img
            src={camHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: CS and Math</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:clm357@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/cam-mazzacane" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Treasurer{" "}
            </p>
          </div>
        </div>


        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Clarissa McGhee{" "}
            </p>
            <img
            src={clarissaHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:cm2259@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/clarissa-mcghee" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[100px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Secretary{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Andrew Visconti{" "}
            </p>
            <img
            src={andrewHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-11 mt-4"> Major: Information Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2
            ">
                <a href="mailto:acv49@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/andrewvisconti/" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[130px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Recruitment{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Parth Mittal{" "}
            </p>
            <img
            src={parthHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:pm653@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/parth-mittal-o6/" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              New Member Education{" "}
            </p>
          </div>
        </div>


        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[135px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Bill Nguyen{" "}
            </p>
            <img
            src={billHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-10 mt-4"> Major: Chemical Engineering</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:nn347@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/bill-nguyen-0b1878333/" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Competitions{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Buster Coden{" "}
            </p>
            <img
            src={busterHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
                <a href="mailto:bc678@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/buster-coden" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Events & Operations{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Jack Britton{" "}
            </p>
            <img
            src={jackHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-30 mt-4"> Major: ILR</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center">
                <a href="mailto:jxb4@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/jack-britton-a93282245" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[210px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Events & Operations{" "}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[200px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Alexander Schneider{" "}
            </p>
            <img
            src={alexHeadshot}
            alt="image here"
            className="w-[290px] h-[300px] mx-auto mt-3"
            />
            <p className="pl-15 mt-4"> Major: Computer Science</p>
            <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center">
                <a href="mailto:as4276@cornell.edu">
                  <img
                  src={mailIcon}
                  alt="mail"
                  className="w-[100px] h-[70px]"
                  />
                </a>
                <a href="https://www.linkedin.com/in/alexander-schneider-95376a2b2/" target="_blank" rel="noopener noreferrer">
                  <img
                  src={linkIcon}
                  alt="link icon here"
                  className="w-[50px] h-[50px]"
                  />
                </a>
            </div>
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              External Affairs{" "}
            </p>
          </div>
        </div>

        <h1 className="mt-12 font-['Roboto_Mono'] text-[#E1DAD3] text-4xl mb-10 flex items-center justify-center gap-0.5">
        meet our advisors
      </h1>

      <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5">
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[140px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              James Warne{" "}
            </p>
            <img
            src={jayHeadshot}
            alt="image here"
            className="w-[290px] h-[400px] mx-auto mt-3"
            />
            <p className="absolute -bottom-[15px] left-3/4 -translate-x-1/2 bg-[#000000] text-white w-[170px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Industry Advisor{" "}
            </p>
          </div>
          <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
            <p className="absolute -top-[15px] bg-[#000000] text-white w-[250px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Noah Stephens-Davidowitz{" "}
            </p>
            <img
            src={noahHeadshot}
            alt="image here"
            className="w-[290px] h-[400px] mx-auto mt-3"
            />
            <p className="absolute bg-[#000000] -bottom-[15px] left-3/4 -translate-x-1/2 text-white w-[200px] text-md font-['Roboto_Mono'] pl-2 pr-2">
              {" "}
              Faculty Advisor{" "}
            </p>
          </div>
        </div>

    </div>
  );
};

export default Team;
