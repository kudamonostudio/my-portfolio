import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MainMenu() {
  // const options = ["About me", "Works", "Experience", "Contact me"];
  const options = [
    ["Designing and ", "developing"],
    ["inspiring digital ", "experiences"],
    ["that connect with people"],
  ];

  const presentationText = `Hi there, I'm MARTIN, A full stack
  developer based in Maldonado, URUGUAY`

  useEffect(() => {

    gsap.fromTo(".menu-option", 
    { opacity: 0, y: 70 },
    { opacity: 1, duration: 0.75, delay: (index) => index * 0.3, y: 0 }
  );
    
    gsap.fromTo(".presentation-text", 
      { opacity: 0, y: 20 },
      { opacity: 1, duration: 0.75, delay: 1.1, y: 0 }
    );

    ScrollTrigger.create({
      trigger: ".menu-option",
      start: "top top", 
      end: "bottom 60%", 
      onEnter: () => {
        gsap.to(".menu-option", {
          opacity: 0, 
          y: 50,
          duration: 0.50,
          delay: (index) => index * 0.1
        });
      },
      onLeaveBack: () => {
        gsap.fromTo(".menu-option", 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.50, delay: (index) => index * 0.1 }
        );
      }
    });

    ScrollTrigger.create({
      trigger: ".presentation-text",
      start: "top 80%", 
      end: "bottom 60%", 
      onEnter: () => {
        gsap.to(".presentation-text", {
          opacity: 0, 
          y: 20,
          duration: 0.75,
          delay: 0.5
        });
      },
      onLeaveBack: () => {
        gsap.fromTo(".presentation-text", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.50, delay: 0.5 }
        );
      }
    });
  }, []);



  return (
    <div className="header-left w-1/2 flex flex-col justify-between absolute left-0 h-full">
      <div className="flex flex-col">
        {options.map((option, index) => {
          return (
            <h1
              key={option}
              className={`text-[5.7rem] menu-option leading-[1.05] max-[33rem] font-thin`}
            >
              {option.length > 1 ? (
                <>
                  {option[0]}
                  <span className="font-[300]">{option[1]}</span>
                </>
              ) : (
                option
              )}
            </h1>
          );
        })}
      </div>
      <div className="flex justify-end h-[100px]">
        <div className="text-left-content">
            <p className="indent-[25px] text-right whitespace-break-spaces presentation-text font-extralight">
              {
                presentationText
              }
            </p>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
