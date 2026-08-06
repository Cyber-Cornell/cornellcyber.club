import mailIcon from "../assets/mail_icon2.webp";
import linkIcon from "../assets/link2_icon.avif";

export type TeamMember = {
  name: string;
  /** Title shown in the label at the bottom of the card. */
  role: string;
  headshot: string;
  /** Advisors are listed without a major or contact links. */
  major?: string;
  email?: string;
  linkedin?: string;
  /** Advisor portraits are taller than officer headshots. */
  tallPhoto?: boolean;
};

/**
 * The name and role labels sit on the card's border, so they need an explicit
 * width to punch a hole in it. The card font is monospace, so one character is
 * exactly 1ch — sizing off the text length keeps a long title from wrapping out
 * of its box without hand-tuning a pixel width per member.
 */
const labelWidth = (text: string) => ({
  width: `calc(${text.length}ch + 1rem + 2px)`,
});

const TeamMemberCard = ({
  name,
  role,
  headshot,
  major,
  email,
  linkedin,
  tallPhoto = false,
}: TeamMember) => {
  return (
    <div className="relative w-full max-w-[350px] min-h-[470px] border-2 border-white p-[10px] rounded-lg mt-8">
      <p
        className="absolute -top-[15px] bg-[#000000] text-white text-md font-['Roboto_Mono'] pl-2 pr-2"
        style={labelWidth(name)}
      >
        {name}
      </p>

      <img
        src={headshot}
        alt={name}
        className={`w-[290px] mx-auto mt-3 ${
          tallPhoto ? "h-[400px]" : "h-[300px]"
        }`}
      />

      {major && <p className="mt-4 text-center">Major: {major}</p>}

      {(email || linkedin) && (
        <div className="flex md:flex-row flex-wrap gap-5 justify-center items-center mt-2">
          {email && (
            <a href={`mailto:${email}`}>
              <img
                src={mailIcon}
                alt={`Email ${name}`}
                className="w-[100px] h-[70px]"
              />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src={linkIcon}
                alt={`${name} on LinkedIn`}
                className="w-[50px] h-[50px]"
              />
            </a>
          )}
        </div>
      )}

      <p
        className="absolute -bottom-[15px] left-3/4 -translate-x-1/2 bg-[#000000] text-white text-md font-['Roboto_Mono'] pl-2 pr-2"
        style={labelWidth(role)}
      >
        {role}
      </p>
    </div>
  );
};

export default TeamMemberCard;
