import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import React, { useRef, useState } from "react";

function PremiumWorkSection() {
  const main = useRef();
  const video = useRef();
  const work = useRef();
  const cursorRef = useRef(); 
  
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useGSAP(() => {
    gsap.to(main.current, {
      y: -700,
      // pin: true,

      scrollTrigger: {
        // markers: true,
        trigger: main.current,
        scrub: 1,
        start: "top 650rem",
      },
    });
  });

  useGSAP(() => {
    gsap.to(video.current, {
      scale: 2.6,
      // width:"95%",
      // height: "80%",
      x: "-2rem",
      y: "35rem",
      // x: "-26rem",
      pin: true,
      // ease: "power3.inOut",
      scrollTrigger: {
        trigger: work.current,
        scrub: 1,
        // markers: true,
        start: "top 450rem",
        end: "bottom 450rem",
        // pin: true
      },
    });
  });

  useGSAP(() => {
    gsap.to(work.current, {
      gap: 0,
      scrollTrigger: {
        trigger: work.current,
        scrub: 1,
        // markers: true,
        start: "top 450rem",
        end: "bottom 650rem",
      },
    });
  });

  useGSAP(() => {
    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

       
        if (isCursorVisible) {
            // gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 })
            gsap.to(cursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        }
    };


    
    // const video = document.getElementsByClassName(".Video")
    // video.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mousemove", handleMouseMove);

    
    
}, [isCursorVisible]);

const showCursor = () => setIsCursorVisible(true);
const hideCursor = () => setIsCursorVisible(false);

  return (
    <div ref={main} className="bg-white  size-full pb-[115rem] absolute z-[100] ">
      <div className="flex static items-center justify-between px-6 text-[1.138rem] mt-8 font-pp  font-semibold text-[#1e1e1e]  ">
        <h2>● PROJECTS</h2>
        <h2 className="ml-[-18rem]">(BO® — 02)</h2>
        <h2>See all of our work</h2>
      </div>
      <div className="flex items-center justify-center text-[27.035rem] font-founders  text-[#1E1E1E] mt-[-6rem] ">
        <span>PREMIUM</span>
      </div>
      <div
        className="flex items-center justify-center text-[27.035rem] font-founders mt-[-20rem] text-[#1E1E1E] gap-[32rem] "
        ref={work}
      >
        <div>
          <span>WO</span>
        </div>
        <div>
          <span>RK</span>
        </div>
      </div>

      <div className="flex justify-center items-center  mt-[-27.2rem]  ">
        <div className="  w-[33rem] ml-[5.5rem]  ">
          <video
            ref={video}
            src="./video.mp4"
            autoPlay
            loop
            muted
            className="h-[17rem] z-50  "
            onMouseEnter={showCursor}   onMouseLeave={hideCursor} 
          ></video>
          {/* <div className="flex items-center justify-between px-6 pr-[2rem] text-[1.1rem] mt-3 font-pp uppercase font-semibold text-[#1e1e1e]  ">
            <h2 className="font-pp">● Creative as it should be</h2>
            <h2>(BO® — 01)</h2>
          </div> */}
        </div>
      </div>

      <div
        className={'pointer-events-none fixed flex items-center justify-center w-[12rem] h-[4rem] bg-white rounded-lg z-10'}
        ref={cursorRef}
        style={{ display: isCursorVisible ? "block" : "none" }}
      >
        <p className="text-[1.5rem] ml-[4rem] mt-[.8rem] font-pp">See All(5)</p>
        <img
          src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
          alt=""
          className="absolute w-[3rem] h-[3rem] mt-[-2.6rem] ml-[.4rem] rounded-lg"
        />
      </div>
    </div>
  );
}

export default PremiumWorkSection;
