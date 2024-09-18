import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable);

import React, { useRef } from "react";

function HeroSection() {
  const move1 = useRef();
  const move2 = useRef();
  const move3 = useRef();
  const move4 = useRef();
  const move5 = useRef();

  const subscribe = useRef();
  const Subscribe = useRef();

  useGSAP(() => {
    gsap.to(move1.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 32,
      ease: "none",
    });
  });
  useGSAP(() => {
    gsap.to(move2.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 32,
      ease: "none",
    });
  });

  useGSAP(() => {
    gsap.to(move3.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 32,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move4.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 32,
      ease: "none",
      // ease: "inOut",
    });
  });
  useGSAP(() => {
    gsap.to(move5.current, {
      transform: "translateX(-100%)",
      repeat: -1,
      duration: 32,
      ease: "none",
      // ease: "inOut",
    });
  });

  useGSAP(() => {
    gsap.to(Subscribe.current, {
      scale: 1.8,
      scrollTrigger: {
        trigger: Subscribe.current,
        scroller: "body",
        start: "top -50rem",
        end: "750rem",
        scrub: true,
        // markers: true,
      },
    });
    Draggable.create(Subscribe.current, {
      type: "x",
      // bounds: Subscribe.current,
      inertia: true,
    });
  });

  return (
    <div className="bg-[#E5E7DF] size-full pb-[8rem] pt-20 font-pp  overflow-x-hidden ">
      <div className="flex justify-between items-stretch text-4xl font-bold mt-24 pl-6 ">
        <div className="flex-col  leading-[1.537rem] text-[1.138rem]  font-[500] text-[#1E1E1E]  mt-[-3rem]">
          <div>
            <span>Pick a plan, submit a job request,</span>
          </div>
          <div>
            <span>and your project will kickoff within</span>
          </div>
          <div>
            <span>24 hours.</span>
          </div>
          <div>
            <a
              href="#"
              className="relative z-10 inline-flex items-center mt-[1.9rem] tracking-wider text-[1.138rem] font-pp font-semibold text-[#1E1E1E] border-b-[1.5px] border-[#1E1E1E] pb-1 transition-all duration-300 ease-out group"
            >
              Explore Plans
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#1E1E1E"
                className="ml-[3.1rem] transition-transform  duration-300 ease-in-out group-hover:translate-x-2"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
              <span className="absolute bottom-0 left-0 w-full h-[0.05em] bg-current scale-x-0 origin-bottom-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
            </a>
          </div>
        </div>
        <div className="flex-col mt-[-3rem] font-pp  mr-[-.3rem] text-[2.7rem] tracking-wider  leading-[3.045rem] text-[#1E1E1E] font-semibold  pr-6 ">
          <div>
            <span>Premium quality creative at lean rates</span>
          </div>
          <div>
            <span>for growing businesses. Packaged as</span>
          </div>
          <div>
            <span>subscriptions or bundled projects.</span>
          </div>
        </div>
      </div>

      <div className="flex -mt-[25rem]" ref={Subscribe}>
        <div className="flex items-center justify-center gap-4 " ref={move1}>
          <h1
            className="text-[25.04rem] text-[#1e1e1e] font-founders cursor-default mt-[16rem] ml-[13rem]"
            ref={subscribe}
          >
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move2}>
          <h1
            className="text-[25.04rem] text-[#1e1e1e] font-founders cursor-default mt-[16rem] ml-[13rem]"
            ref={subscribe}
          >
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move3}>
          <h1
            className="text-[25.04rem] text-[#1e1e1e] font-founders cursor-default mt-[16rem] ml-[13rem]"
            ref={subscribe}
          >
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move4}>
          <h1
            className="text-[25.04rem] text-[#1e1e1e] font-founders cursor-default mt-[16rem] ml-[13rem]"
            ref={subscribe}
          >
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-4 " ref={move5}>
          <h1
            className="text-[25.04rem] text-[#1e1e1e] font-founders cursor-default mt-[16rem] ml-[13rem]"
            ref={subscribe}
          >
            SUBSCRIBE
          </h1>
          <img
            className="w-[46.5rem] h-[15.9rem] mt-[18.5rem] pr-[10rem] cursor-default"
            src="https://www.datocms-assets.com/106915/1717687183-betteroffstudio_work-loop_11.jpg?auto=format%2Ccompress&fit=max&h=800&w=800"
            alt=""
          />
        </div>
      </div>
      <div className="flex-col relative items-stretch justify-start ml-6 mt-[13rem]  text-[2.95rem] font-pp font-[600] leading-[3rem] text-[#1e1e1e] ">
        <div className="">
          <div>
            <span>No more inflated agency fees. No more flaky</span>
          </div>
          <div>
            <span>freelancers. No more salaried employees to</span>
          </div>
          <div>
            <span>manage. Just top-tier creative that’s easy,</span>
          </div>
          <div>
            <span>high velocity, and sensibly priced.</span>
          </div>
        </div>
        <div className="mt-[3rem]">
          <div>
            <span>Get transformational talent and capabilities </span>
          </div>
          <div>
            <span>in a turnkey platform that promises your</span>
          </div>
          <div>
            <span>brand will be Better Off®.</span>
          </div>
        </div>
      </div>
      <div>
        <hr className=" flex items-center justify-center text-center h-4 px-6 mt-[6rem] border-[#CDCFC7]  " />
        <div className="flex items-center justify-between px-6 text-[1.138rem] mt-3 font-pp uppercase font-bold text-[#1e1e1e]  ">
          <h2 className="font-pp">● Creative as it should be</h2>
          <h2>(BO® — 01)</h2>
        </div>
        <div className="flex-col justify-center items-center relative ml-[43.2rem] -mt-8 pb-[2rem]">
          <div>
            <h4 className="text-[#1E1E1E] font-pp text-[1.252rem] font-[600] mb-[1.25rem] ">
              Fully Loaded
            </h4>
            <div className="text-[#949690] text-[1.252rem] leading-[1.69rem] mb-[2.5rem] font-semibold ">
              <div>
                <span>From complex strategies to intricate identities</span>
              </div>

              <div>
                <span>to bleeding-edge digital development, every</span>
              </div>

              <div>
                <span>project is now possible with a click.</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[#1E1E1E] font-pp text-[1.252rem]  font-semibold mb-[1.25rem] ">
              Flat Fee Flex
            </h4>

            <div className="text-[#949690] text-[1.252rem] mb-[2.5rem] leading-[1.69rem] font-semibold ">
              <div>
                <span>We do not haggle over hours. Our plans are</span>
              </div>

              <div>
                <span>nimble and allow plenty of wiggle room to</span>
              </div>

              <div>
                <span>account for shifting priorities and rethinking.</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[#1E1E1E] font-pp text-[1.252rem] font-semibold mb-[1.25rem] ">
              Creative Control
            </h4>

            <div className="text-[#949690] text-[1.252rem] mb-[2.5rem] leading-[1.69rem] font-semibold ">
              <div>
                <span>We do not want our clients to ever feel trapped</span>
              </div>

              <div>
                <span>or locked into anything. If you want to pump</span>
              </div>

              <div>
                <span>the brakes or step on the gas, feel free to</span>
              </div>

              <div>
                <span>pause, cancel, or upgrade anytime.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
