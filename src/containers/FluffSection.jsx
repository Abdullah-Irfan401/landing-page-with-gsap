import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import React, { useRef } from "react";
import Benefits from "../components/Benefits";

function FluffSection() {
  const main = useRef();

  useGSAP(() => {
    gsap.to(main.current, {
      y: -400,
      // pin: true,
      scrollTrigger: {
        // markers: true,
        trigger: main.current,
        scrub: 1,
        start: "top 750rem",
      },
    });
  });

  return (
    <div
      className="  absolute z-[100]  w-[100%] bg-[#E5E7DF]  mt-[10rem] "
      ref={main}
    >
      <div className="flex  items-center justify-between px-6 text-[1.1rem] mt-8 font-pp uppercase font-semibold text-[#1e1e1e]  ">
        <h2>● FULL benefits</h2>
        <h2 className="ml-[-15rem]">(BO® — 05)</h2>
        <h2>CREATIVE AS A SUBSCRIPTION</h2>
      </div>
      <div className=" flex items-center justify-center  ">
        <div className=" text-[27.035rem] font-founders  text-[#1E1E1E]  ">
          <p className=" mt-[-6rem]  ">CREATIVE</p>
          <p className=" mt-[-22rem] ml-[-1.2rem] ">WITH</p>
          <p className=" mt-[-22rem] ml-[4.4rem] ">NO FLUFF</p>

          <div className=" flex items-center justify-center reletive  ">
            <img
              className=" absolute mt-[-75rem] ml-[30rem] h-[17rem] "
              src="./fluffimg.avif"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" flex items-stretch justify-between px-6 pb-[15rem] ">
        <div className=" font-pp font-medium text-[1.25rem] leading-[1.5rem] ">
          <div>
            <span>We've trimmed the fat to</span>
          </div>
          <div>
            <span>focus on essential</span>
          </div>
          <div>
            <span>services at skinny rates.</span>
          </div>
        </div>
        <div className=" flex gap-[1rem] ">
          <div>
            <Benefits
              number="01"
              title="Your deadlines are our lifeblood"
              content={[
                "Go ahead, flood us with project requests. Our",
                "convenient subscriptions offer retainer-level",
                "coverage at fixed, affordable monthly rates.",
              ]}
            />
            <Benefits
              number="03"
              title="Cancel culture"
              content={[
                "Scale on your terms and assume complete",
                "control over your creative needs by cancelling or",
                "upgrading your plan anytime.",
              ]}
            />
            <Benefits
              number="05"
              title="Fast turnarounds, not idle runarounds"
              content={[
                "By trimming fat from the bloated agency process,",
                "we’re able to meet deadlines at turn rates that",
                "average days not weeks",
              ]}
            />
          </div>
          <div>
            <Benefits
              number="02"
              title="Tap previously unattainable talent"
              content={[
                "We’ve already vetted and assembled the most",
                "elite roster of specialists out there. Simply plug",
                "into our power outlet to crank up your brand.",
              ]}
            />
            <Benefits
              number="04"
              title="Endless revisions are the ultimate flex"
              content={[
                "Free yourself from restrictive change order fees!",
                "We are committed to polishing your project until",
                "you think it’s shiny and perfect.",
              ]}
            />
            <Benefits
              number="06"
              title="Your deadlines are our lifeblood"
              content={[
                "Every partnership comes with the strategic",
                "brainpower you’d expect from three decades of",
                "combined branding experience.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FluffSection;
