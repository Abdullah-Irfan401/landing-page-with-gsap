import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

import React, { useRef } from "react";

function Footer() {
  const move1 = useRef();
  const move2 = useRef();
  const move3 = useRef();
  const move4 = useRef();
  const move5 = useRef();

  const Subscribe = useRef();

  const main = useRef();

  useGSAP(() => {
    gsap.to(main.current, {
      y: -600,
      // pin: true,
      scrollTrigger: {
        // markers: true,
        trigger: main.current,
        scrub: 1,
        start: "top 750rem",
      },
    });
  });

  useGSAP(() => {
    gsap.to(move1.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 25,
      ease: "none",
    });
  });
  useGSAP(() => {
    gsap.to(move2.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 25,
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(move3.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 25,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move4.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 25,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move5.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 25,
      ease: "none",
      // ease: "inOut",
    });
  });

  useGSAP(() => {
    Draggable.create(Subscribe.current, {
      type: "x",
      // bounds: Subscribe.current,
      inertia: true,
    });
  });

  return (
    <div
      className="  absolute z-[140]  w-[100%]  bg-[#1E1E1E]  mt-[294.3rem] pb-[4rem] "
      ref={main}
    >
      <div className="flex items-stretch justify-between font-pp px-6  text-[white] font-semibold mt-[7rem]  ">
        <div className=" text-[2.7rem]  leading-[3.3rem] mr-[3rem] ">
          <div>
            <span> Still unsure whether our</span>
          </div>
          <div>
            <span>plans are right for you?</span>
          </div>
        </div>
        <div className=" text-[2.7rem] mt-[3.3rem] leading-[3.3rem] mr-[rem] ">
          <div>
            <span>Let’s chat</span>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center mt-[3rem] ">
        <div className="   border-t border-b border-[#4B4B4B]  w-[96%] "></div>
      </div>

      <div className="flex relative items-start justify-start px-6 text-[1.25rem] z-[210] font-semibold ">
        <div className=" w-[35rem] h-[15rem] mt-[13rem] flex items-center justify-between ">
          <div className=" flex-col ">
            <div className=" mb-[1.2rem] ">
              <span className=" text-[white]  ">Sitemap</span>
            </div>
            <div>
              <span className=" text-[white] ">Overview</span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Work
              </span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Feed
              </span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Pricing
              </span>
            </div>
          </div>
          <div className=" flex-col mt-[-3.8rem] ">
            <div className=" mb-[1.2rem] ">
              <span className=" text-[white]  ">Legal</span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Terms
              </span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Privacy
              </span>
            </div>
          </div>
          <div className=" flex-col mt-[-3.8rem] ">
            <div className=" mb-[1.2rem] ">
              <span className=" text-[white]  ">Social</span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Instagram
              </span>
            </div>
            <div>
              <span className=" text-[#4B4B4B] font-bold hover:text-[white] transition-colors duration-300 cursor-pointer ">
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex -mt-[23rem]  " ref={Subscribe}>
        <div className="flex items-center justify-center gap-4 " ref={move1}>
          <h1 className="text-[25.04rem] text-[white] font-founders cursor-default mt-[16rem] ml-[13rem]">
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move2}>
          <h1 className="text-[25.04rem] text-[white] font-founders cursor-default mt-[16rem] ml-[13rem]">
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move3}>
          <h1 className="text-[25.04rem] text-[white] font-founders cursor-default mt-[16rem] ml-[13rem]">
            SUBSCRIBE 
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move4}>
          <h1 className="text-[25.04rem] text-[white] font-founders cursor-default mt-[16rem] ml-[13rem]">
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move5}>
          <h1 className="text-[25.04rem] text-[white] font-founders cursor-default mt-[16rem] ml-[13rem]">
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
      </div>

      <div className=" flex items-start justify-start px-6 mt-[-6rem] ">
        <div>
          <span className=" text-[white] font-pp font-semibold text-[1.25rem] ">
            Copyright © Better Off 2024
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
