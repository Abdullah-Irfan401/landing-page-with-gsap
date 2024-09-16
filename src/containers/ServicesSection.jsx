import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import { useRef } from "react";

import React from "react";
import ExpandableSection from "../components/ExpandableSection";
import Toggler from "../components/Toggler";

function ServicesSection() {
  const main = useRef();

  useGSAP(() => {
    gsap.to(main.current, {
      y: -300,
      pin: true,
      scrollTrigger: {
        // markers: true,
        trigger: main.current,
        scrub: 1,
        start: "top 650rem",
        end: "top 1rem",
      },
    });
  });

  return (
    <div
      className=" bg-[#1E1E1E] w-full absolute text-9xl z-[115] mt-[70rem] pb-[0rem] "
      ref={main}
    >
      <div className="flex items-stretch justify-between font-pp px-6  text-[white] font-semibold mt-8  ">
        <div className="text-[1.1rem]  ">
          <h4>● CONCIERGE CREATIVE</h4>
          <h4 className=" mt-3 ">(BO® — 03)</h4>
        </div>

        <div className=" text-[2.7rem]  leading-[3.3rem] mr-[3rem] ">
          <div>
            <span> Superior brands require sophisticated</span>
          </div>
          <div>
            <span> capabilities that many businesses could not</span>
          </div>
          <div>
            <span>access until now.</span>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center font-founders text-[27.035rem] text-[white] ">
        <span>SERVICES</span>
      </div>
      <div className=" flex items-center justify-center  ">
        <div className=" text-[3rem] w-[57%] ml-[20rem] mt-[3rem] ">
          <h4 className=" text-[1.25rem] font-pp text-[white] font-semibold pb-[1.25rem] ">
            Our process and capabilities include:
          </h4>
          <ExpandableSection
            number="1"
            title="Strategy"
            content="Behind every surprising campaign, compelling site launch, or must-watch piece of content, there’s a well-considered strategy that engineered the outcome. During this crucial phase, we address the foundational and psychological factors that drive the desired interaction between brand and customer. We match logic-based journeys with pinpoint executions that create memorable and lasting engagements."
            tags={[
              "Brand Architecture & Roadmaps",
              "Brand Strategy",
              "Digital Strategy",
              "Product Launch Strategy",
              "SEO & Content Strategy",
              "Information Architecture (IA)",
              "Design Systems",
              "Brand Messaging",
              "User Research & Testing",
              "New Revenue Streams",
            ]}
          />
          <ExpandableSection
            number="2"
            title="Design"
            content="Our design services focus on pitch-perfect brand identities, flawless UX and UI design, and unforgettable product builds that ensure your vision is brought to life with intention and precision. Our rapid prototyping and ironclad design systems streamline the development process, while our expertise in information architecture and motion design enhances usability and engagement. We create intuitive product interfaces and captivating social media designs that pop off the screen and elicit action."
            tags={[
              "Brand Identity",
              "Brand Guidelines",
              "UX and UI Design",
              "Website & App Design",
              "Art Direction",
              "Product Concepting",
              "Rapid Prototyping",
              "Content Design",
              "Motion Design",
              "Product Interfaces",
              "Social Media Design",
            ]}
          />
          <ExpandableSection
            number="3"
            title="Technology"
            content="We build full-stack digital brand extensions that serve as the online anchors of our clients’ multichannel narratives. Our no-code Framer and Webflow solutions enable rapid and efficient development timelines for both sites and products. As Shopify Plus e-commerce partners and WordPress master developers, we offer the most advanced functionality options paired with the simplest and most robust content management systems. When it comes to development, our velocity and versatility is unrivaled. "
            tags={[
              "No-code Framer Solutions",
              "Webflow Solutions",
              "Shopify Plus (Partners)",
              "Advanced E-commerce",
              "WordPress",
              "Full Stack Development",
              "Journey Mapping & Testing",
              "Accessibility (WCAG) 2.1",
            ]}
          />
          <ExpandableSection
            number="4"
            title="content"
            content="We craft content designed to cancel noise, cut through clutter, and connect with your customers on an emotional level. We view content as branded behavior that must reflect the position and principles of the company, and serve as an authentic extension of its story. Every content launch includes a strategy that aligns with your business objectives and a deployment plan that ensures the project comes in on-deadline and on-budget.   "
            tags={[
              "Brand Asset Development",
              "Brand Asset Development",
              "Social Content Development",
              "Email Campaign Development",
              "Generative AI Image Creation",
              "Copywriting",
              "Brand Naming",
              "Project Management",
            ]}
          />
        </div>
      </div>

      <div>
        <div className="border-t border-b border-[#353535] mt-[15rem]  "></div>
        <div className="flex static items-center justify-between px-6 text-[1.1rem] mt-8 font-pp uppercase font-semibold text-[white]  ">
          <h2>● client APPROVAL</h2>
          <h2 className="ml-[-15rem]">CREATIVE AS BUNDLED PROJECTS</h2>
          <h2>(BO® — 04)</h2>
        </div>
      </div>
      <div>
        <Toggler />
      </div>
    </div>
  );
}

export default ServicesSection;
