import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function InitialText({ setShowContent }) {
  const name = "Martin Gamboa Dinardi ";
  const name_dot = name.replace(/ /g, ".");
  const name_arr = [...name];
  const name_arr_dot = [...name_dot];

  useGSAP(() => {
    gsap.from(".chart", {
      y: 70,
      stagger: 0.03,
      delay: 0.2,
      ease: "back.out",
      duration: 0.6,
    });

    gsap.fromTo(
      ".chart",
      { opacity: 1 },
      { opacity: 0, duration: 0.4, delay: 1.6 }
    );
    gsap.fromTo(
      ".circular-text",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.9,
        delay: 1.9,
        onComplete: () => {
          gsap.delayedCall(0.2, () => {
            setShowContent(true);
          })
        },
      }
    );
    gsap.fromTo(
      ".circular-text",
      { height: "100vh", right: "50%" },
      { height: "65px", duration: 1.3, delay: 2.2, right: "65px", ease: "power2.out" }
    );
  });

  return (
    <div className="h-screen w-full overflow-hidden flex content-center justify-center absolute">
      <div className="flex justify-center items-center">
        <h1 className="w-fit absolute overflow-hidden">
          {name_arr.map((chart, index) => {
            return (
              <span key={index} className="chart inline-block min-w-3 font-[200]">
                {chart}
              </span>
            );
          })}
        </h1>
      </div>
      <div className="fixed h-screen flex justify-center items-center circular-text">
        <h1 className="text-lg h-[278px] text">
          {name_arr_dot.map((chart, index) => {
            return (
              <span
                className="absolute"
                key={index}
                style={{
                  transform: `rotate(${index * 16.5}deg)`,
                  transformOrigin: "0 150px",
                }}
              >
                {chart.toUpperCase()}
              </span>
            );
          })}
        </h1>
      </div>
    </div>
  );
}

export default InitialText;
