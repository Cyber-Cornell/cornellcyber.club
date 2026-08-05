import { useState } from "react";
import "./Join.css";
import cybear from "../assets/cybear.jpeg";

const POPUP_SIZE = 170;
const POPUP_DIRECTIONS = ["left", "left", "left", "down", "right", "right", "right"] as const;

const POPUP_CONTENT = [
  { header: "Apps Open", body: "Club applications are now open! Link is attached below." },
  { header: "Club Fest", body: "Find us at club fest in Barton Hall!" },
  { header: "Info Session", body: "Join us for our info session in RPCC to learn more about the club." },
  { header: "Info Session", body: "Join us for our info session in RPCC to learn more about the club." },
  { header: "Apps Close!", body: "We are no longer accepting club applications beyond this date." },
  { header: "Decisions Out!", body: "Welcoming our new members.." },
  { header: "Join Us!", body: "Stay tuned for next semester!" },
];

const CIRCLE_DATA_RAW = [
  { angle: -70, date: "01/23", bg: "#E1DAD3" },
  { angle: -46.67, date: "01/24", bg: "#D9D9D9" },
  { angle: -23.33, date: "01/28", bg: "#CBC6C6" },
  { angle: 0, date: "01/30", bg: "#B8B8B8" },
  { angle: 23.33, date: "01/31", bg: "#A5A5A5" },
  { angle: 46.67, date: "02/03", bg: "#8F8F8F" },
  { angle: 70, date: "02/10", bg: "#7A7A7A" },
];

const Join = () => {
  const [openPopups, setOpenPopups] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpenPopups((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const close = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    setOpenPopups((prev) => {
      const next = new Set(prev);
      next.delete(i);
      return next;
    });
  };

  const circleData = CIRCLE_DATA_RAW.map(({ angle, date, bg }) => {
    const rad = (angle * Math.PI) / 180;
    const radius = 550;
    const circleSize = 120;
    const half = circleSize / 2;
    const left = 300 + radius * Math.sin(rad) - half;
    const bottom = radius * Math.cos(rad) - half - 20;
    const centerX = left + half;
    const centerY = 600 - (bottom + half);
    return { left, bottom, centerX, centerY, date, bg };
  });

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center px-4">
      <h1 className="mt-8 md:mt-12 font-['Roboto_Mono'] text-[#E1DAD3] text-2xl md:text-4xl mb-4 md:mb-20 flex items-center justify-center gap-0.5">
        become a cybear?
        <span className="cursor-blink text-[#FA2139]">_</span>
      </h1>

     
      <div className="hidden md:flex relative w-[600px] h-[600px] justify-center items-center scale-[0.55] sm:scale-[0.8] md:scale-100 origin-center my-auto">
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 600 600"
          style={{ overflow: "visible" }}
        >
          {circleData.slice(0, -1).map((p, i) => {
            const next = circleData[i + 1];
            return (
              <line key={"main" + i} x1={p.centerX} y1={p.centerY} x2={next.centerX} y2={next.centerY} stroke="#FA2139" strokeWidth="2.5" />
            );
          })}
          {circleData.map((p, i) => {
            const satellites = [
              { dx: -90, dy: -50, branchX: -20, branchY: -30 },
              { dx: 80, dy: -40, branchX: 30, branchY: -20 },
              { dx: -50, dy: 80, branchX: -10, branchY: 40 },
              { dx: 40, dy: 60, branchX: 20, branchY: 30 },
            ];
            return satellites.map((s, j) => {
              const x = p.centerX + s.dx;
              const y = p.centerY + s.dy;
              const bx = x + s.branchX;
              const by = y + s.branchY;
              return (
                <g key={`sat-${i}-${j}`}>
                  <line x1={p.centerX} y1={p.centerY} x2={x} y2={y} stroke="#FA2139" strokeWidth="1.5" opacity="0.7" />
                  <line x1={x} y1={y} x2={bx} y2={by} stroke="#FA2139" strokeWidth="1" opacity="0.4" />
                  <circle cx={x} cy={y} r="5" fill={j % 2 === 0 ? "#FA2139" : "#E1DAD3"} />
                  <circle cx={bx} cy={by} r="3" fill="#FA2139" opacity="0.6" />
                </g>
              );
            });
          })}
        </svg>

        <img
          src={cybear}
          alt="Cybear mascot"
          className="absolute left-1/2 bottom-[50px] -translate-x-1/2 z-10 w-[400px] h-auto object-contain"
        />

        {circleData.map(({ left, bottom, date, bg }, i) => (
          <div
            key={i}
            className="date-circle absolute w-[120px] h-[120px] rounded-full border-[5px] border-[#FA2139] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(250,33,57,0.2)]"
            style={{ left: `${left}px`, bottom: `${bottom}px`, backgroundColor: bg }}
            onClick={() => toggle(i)}
          >
            <span className="font-['Roboto_Mono'] text-black text-lg font-semibold">{date}</span>
          </div>
        ))}

        {[...openPopups].map((i) => {
          const { left, bottom } = circleData[i];
          const dir = POPUP_DIRECTIONS[i];
          const gap = 10;
          const circleW = 120;
          const circleH = 120;
          const offset = (POPUP_SIZE - circleH) / 2;
          let popupStyle: React.CSSProperties;
          if (dir === "right") {
            popupStyle = { left: `${left + circleW + gap}px`, bottom: `${bottom - offset}px` };
          } else if (dir === "left") {
            popupStyle = { left: `${left - POPUP_SIZE - gap}px`, bottom: `${bottom - offset}px` };
          } else {
            popupStyle = { left: `${300 - POPUP_SIZE / 2}px`, bottom: `${550}px` };
          }
          const { header, body } = POPUP_CONTENT[i];
          return (
            <div key={i} className="popup-square" style={popupStyle}>
              <button type="button" className="popup-close" onClick={(e) => close(e, i)}>×</button>
              <div className="popup-content">
                <h3 className="popup-header">{header}</h3>
                <p className="popup-body">{body}</p>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-0 w-[600px] h-[300px] bg-[#494141] rounded-t-full border-[30px] border-b-0 border-[#FA2139] overflow-hidden z-20 flex flex-col items-center justify-center gap-2">
          
         <a href="https://docs.google.com/forms/u/0/" target="_blank" rel="noopener noreferrer" className="font-['Roboto_Mono'] text-[#CBC6C6] text-4xl font-bold underline decoration-[#CBC6C6] hover:decoration-white hover:text-white transition-colors duration-200 cursor-pointer">applications</a>
          <p className="font-['Roboto_Mono'] text-[#CBC6C6] text-3xl">
            status: <span className="text-[#FF0000] font-bold">closed</span>
          </p>
        </div>
      </div>

    
      <div className="flex md:hidden mobile-timeline">
        {CIRCLE_DATA_RAW.map((item, i) => (
          <div key={i} className="mobile-timeline-item">
            {i > 0 && <div className="mobile-connector" />}
            <div
              className="date-circle w-[100px] h-[100px] rounded-full border-[4px] border-[#FA2139] flex items-center justify-center shadow-[0_0_15px_rgba(250,33,57,0.2)]"
              style={{ backgroundColor: item.bg }}
              onClick={() => toggle(i)}
            >
              <span className="font-['Roboto_Mono'] text-black text-base font-semibold">{item.date}</span>
            </div>
            {openPopups.has(i) && (
              <div className="popup-square mobile-popup">
                <button type="button" className="popup-close" onClick={(e) => close(e, i)}>×</button>
                <div className="popup-content">
                  <h3 className="popup-header">{POPUP_CONTENT[i].header}</h3>
                  <p className="popup-body">{POPUP_CONTENT[i].body}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="mobile-apps">
          <a href="https://docs.google.com/forms/u/0/" target="_blank" rel="noopener noreferrer">applications</a>
          <p>status: <span>open</span></p>
        </div>
      </div>
    </div>
  );
};

export default Join;