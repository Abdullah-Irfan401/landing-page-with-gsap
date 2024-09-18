import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import React, { useRef } from "react";

import Questions from "../components/Questions";
import ToggleButton from "../components/ToggleButton";
import PricingCard from "../components/PricingCard";

function Plans() {
  const main = useRef();

  useGSAP(() => {
    gsap.to(main.current, {
      y: -800,
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
      className=" bg-[white] w-full absolute z-[110] mt-[127rem] pb-[35rem] "
      ref={main}
    >
      <div className="flex  items-center justify-between px-6 text-[1.1rem] mt-8 font-pp uppercase font-semibold text-[#1e1e1e]  ">
        <h2>● Plans</h2>
        <h2 className="ml-[-15rem]">(BO® — 06)</h2>
        <h2>ADD-TO-CART CREATIVE</h2>
      </div>
      <div className="flex  items-start  justify-start gap-[.5rem] px-6 text-[1.1rem] mt-[6rem] font-pp uppercase font-semibold text-[#1e1e1e]">
        <div>
          <span>Subscriptions</span>{" "}
        </div>
        <ToggleButton />
        <div>
          <span>Projects</span>
        </div>
      </div>
      <div className="flex-col items-start justify-start px-6 mt-[3rem] font-pp text-[2.85rem] leading-[3rem] tracking-[0.015em] font-semibold text-[#1E1E1E] ">
        <div>
          <span>Subscriptions are like having an in-house</span>
        </div>
        <div>
          <span>creative department without the headaches of</span>
        </div>
        <div>
          <span>managing salaried employees.</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-8 ">
        <PricingCard
          badgeText="Most popular"
          badgecolor={{ backgroundColor: "#CFA9ED" }}
          title="Part-time Pro"
          description="One part-time creative dedicated to your continuous stream of projects."
          price="$6400"
          pricetime="/month"
          duration="Pause or cancel anytime."
          buttonText="Subscribe now"
          infoLinkText="Need more info? Let’s chat."
          includedItems={[
            "One dedicated creative, 20 hrs a week",
            "Unlimited requests",
            "Unlimited revisions",
            "Project management",
            "Access to all services",
            "Pause or cancel anytime",
          ]}
        />
        <PricingCard
          badgeText="Best Value"
          badgecolor={{ backgroundColor: "#E0F07D" }}
          title="Full-time Premium"
          description="One elite full-timer working simultaneously on multiple projects."
          price="$12800"
          pricetime="/month"
          duration="Pause or cancel anytime."
          buttonText="Subscribe now"
          infoLinkText="Need more info? Let’s chat."
          includedItems={[
            "One senior creative, 40 hrs a week",
            "Unlimited requests",
            "Unlimited revisions",
            "Project management",
            "Access to all services",
            "Pause or cancel anytime",
          ]}
        />
        <PricingCard
          price= {[ "Build your own subscription. We’ll tailor the perfect", "team."]}
          padding={{ padding: "1.2rem 0rem" }}
          buttonText="Customize my plan"
          infoLinkText="Need more info? Let’s chat."
          includedItems={[
            "Full access to all creative capabilities",
            "Coverage from kickoff to delivery",
            "Senior-level talent",
            "Creative direction",
            "Project management",
            "Easy add-on services mid-project",
          ]}
        />
      </div>
      <div className="flex items-stretch justify-between font-pp px-6  mt-[12rem] text-[#000000] font-semibold   ">
        <div className="text-[1.138rem]  ">
          <h4>● FAQ</h4>
          <h4>(BO® — 07)</h4>
        </div>

        <div className=" text-[2.846rem] tracking-wide leading-[3.045rem] mr-[14rem] ">
          <div>
            <span> We love talking shop and</span>
          </div>
          <div>
            <span>answering questions. See the</span>
          </div>
          <div>
            <span>most common inquiries below or</span>
          </div>
          <div>
            <span>book a chat.</span>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-[5rem] ">
        <div className="   border-t border-b border-[#E5E7DF]  w-[96%] "></div>
      </div>

      <div className=" flex items-stretch justify-between text-[1.25rem] font-semibold mt-[-.5rem]  px-6 ">
        <div className=" mt-[1.8rem] ">
          <div>
            <span>Frequently asked questions</span>
          </div>
        </div>
        <div>
          <Questions
            title="What distinguishes us from other agencies?"
            content="We have worked at the largest agencies in the world and we’ve owned our own digital development studios. From those experiences, we identified all the wasteful processes that inflate fees, over-complicate communications, and delay turnaround times. In creating our subscriptions and ready-made projects, we have streamlined creative services to include only what’s absolutely essential for achieving the best client outcomes. By eliminating the bloat, it allowed us to offer growing businesses access to high-end creative that they wouldn’t have otherwise been able to afford. We’re innovative. We’re doing it to serve you. And we’re exceptional at what we do. That’s what distinguishes us.  "
          />
          <Questions
            title="Why not hire an in-house designer or freelancer?"
            content="In today’s job market, a senior creative will cost you six figures. It’ll take at least a couple months to recruit and onboard them. Then you’ll have to manage them, their personality, and their narrow area of expertise. With a subscription or ready-made project, you have access to multi-disciplined talent, all senior level, and we do the managing. As far as freelancers, the A-listers are usually booked, and those that are available are juggling a roster of other clients. They’re often undependable, and having to jump from one to another causes brand inconsistency."
          />
          <Questions
            title="Are creative requests truly unlimited?"
            content="Once you’re a client, you’re free to submit as many requests as you’d like within your Project Workflow, and we’ll deliver them one-after-another, in order of priority, as defined by you. A Project Workflow is a queue of active requests serviced by your dedicated creative. Each request that comes is worked on one at a time. If you want two project requests serviced simultaneously, you would simply subscribe to our more robust plan with double the workflows and dedicated creatives.  "
          />
          <Questions
            title="How fast will I receive my work?"
            content="Depends on the project requested. But, on average, we complete most design requests within 2-3 days. More complex requests require lengthier timelines. But we’re always upfront and reasonable about our estimated delivery dates, as well as any phases that require milestones to reach them.   "
          />
          <Questions
            title="What’s your refund policy?"
            content="We work tirelessly to revise and tweak and refine until you love our work. Considering the amount of effort, attention, and quality that we pour into our work, we cannot issue refunds. "
          />
          <Questions
            title="What if I have a single project?"
            content="Our subscriptions work best for companies that have ongoing branding needs. If you’ve got a single project, we offer a full-service menu of prepackaged projects to suit most creative needs. If you don’t find the project you’re looking for, please book a chat and we’ll tailor a service to meet your exact needs.  "
          />
          <Questions
            title="What don’t we do?"
            content="Our array of services are comprehensive. But there are a few areas that don’t fall within our expertise: Media buying, technical copywriting, and 3D modeling are a few. If you have something specific in mind, reach out and let’s discuss the specs.  "
          />
          <Questions
            title="How do I submit a creative request?"
            content="Once you’ve signed up, you will receive an email that grants access to your client dashboard with a project request form that will walk you through the steps to initiate your job. Once submitted, your dedicated Project Manager will contact you within 24 hours and immediately assign an appropriate creative. You will begin receiving daily project updates that will continue until final delivery. Simple, easy, and thorough.  "
          />
          <Questions
            title="Do I own my work?"
            content="Every piece of creative we develop is tailored specifically for your brand and 100% owned by you. We share access to all your native source files.  "
          />
          <Questions
            title="How is my team assembled?"
            content="Your dedicated Project Manager will review your  projected workflow before assigning the appropriate creative based on the personality of the brand and the nature and scope of the work. For more complex projects, your dedicated creative will change, depending on the phase of the project. For example, on a website development assignment, your dedicated creative would shift according to the stage of work: strategist, copywriter, art director, designer, developer.  "
          />
          <Questions
            title="How soon can I submit a project request?"
            content="Immediately upon sign up, you will receive an email that grants access to your client dashboard with a project request form that will notify your dedicated Project Manager to assign your creative. From sign-up to the start of work happens within 24 hours. "
          />
          <Questions
            title="How do I upgrade, downgrade, or cancel?"
            content="Scaling is painless. For any changes to your plan, simply email your desired status update to subscribe@betteroff.studio. Upgrade costs are prorated during your current billing cycle.

For downgrades, your plan will renew at the lower level on your next billing date. To cancel, all you have to do is email subscribe@betteroff.studio and we’ll take care of you!  "
          />
        </div>
      </div>
    </div>
  );
}

export default Plans;
