// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

import React from "react";

function About() {
  // const main = useRef();

  // useGSAP(() => {
  //   gsap.to(main.current, {
  //     y: -500,
  //     // pin: true,
  //     scrollTrigger: {
  //       markers: true,
  //       trigger: main.current,
  //       scrub: 1,
  //       start: "top 750rem",
  //     },
  //   });
  // });

  return (
    <div className="  absolute z-[120]  w-[100%]  bg-[#E5E7DF]  mt-[270rem] pb-[8rem] ">
      <div className="flex  items-center justify-between px-6 text-[1.1rem] mt-8 tracking-wider font-pp uppercase font-semibold text-[#1e1e1e]  ">
        <h2>● what we’re about</h2>
        <h2 className="ml-[-15rem]">(BO® — 08)</h2>
        <h2>CREATIVE AS BUNDLED PROJECTS</h2>
      </div>
      <div className=" flex items-center justify-center  ">
        <div className=" text-[27.035rem] font-founders  text-[#1E1E1E]  ">
          <p className=" mt-[-6rem]  ">GET</p>
          <p className=" mt-[-40.5rem] ml-[60.2rem] ">TO</p>
          <p className=" mt-[-21rem] ml-[5.4rem] ">KNOW US</p>

          <div className=" flex items-center justify-center reletive  ">
            <img
              className=" absolute mt-[-77rem] ml-[10rem] h-[17rem] "
              src="./about.avif"
              alt=""
            />
          </div>
          <div>
            <div className="flex relative items-stretch justify-between font-pp px-6  text-[#000000] font-semibold mt-8    ">
              <div className=" flex-col  ">
                <div className=" flex relative z-50 items-center justify-center reletive overflow-hidden mt-[-6rem] ml-[-1rem] bg-red-700 h-[11rem] w-[20rem] ">
                  <img
                    className="  transition-transform duration-300 hover:scale-105 h-[12rem] "
                    src="./article.avif"
                    alt=""
                  />
                </div>
                <div className="text-[1.1rem] ml-[-1rem] mt-[.5rem] font-medium   ">
                  <h4>How Subscriptions End Agency </h4>
                  <h4>Excess.</h4>
                  <h4 className=" text-[#949690] ">Article - 7 minute read</h4>
                </div>
              </div>

              <div className=" text-[2.7rem] text-[#1E1E1E] leading-[3.3rem] tracking-wide mr-[1.2rem] mt-[-6rem] ">
                <div>
                  <span> More than a blog, The Feed is our</span>
                </div>
                <div>
                  <span>point of view. It reflects who we are</span>
                </div>
                <div>
                  <span>and what we’re into. It’s where</span>
                </div>
                <div>
                  <span>industry, culture, lifestyle, and our own</span>
                </div>
                <div>
                  <span>work intersect in a meaningful way.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
