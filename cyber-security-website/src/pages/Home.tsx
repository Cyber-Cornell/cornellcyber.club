"use client";
import TextType from "../components/TextType";
import LearnMoreButton from "../components/LearnMoreButton";
import CTF from "./CTF";

const Home = () => {
  const title = "Cyber@Cornell";
  const titleTypingSpeed = 97;
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <div>
      <section className="relative flex flex-col text-center mt-20 mx-auto z-10">
        <div className="flex flex-col items-center">
          <TextType
            text={[title]}
            typingSpeed={titleTypingSpeed}
            pauseDuration={0}
            loop={false}
            showCursor={true}
            cursorCharacter="_"
            className="hero-title font-['Roboto_Mono'] text-white mb-2 mt-32"
          />

          <LearnMoreButton delay={buttonDelay} />
        </div>

        <div className="pt-[400px]">
          <CTF />
        </div>
      </section>
    </div>
  );
};

export default Home;
