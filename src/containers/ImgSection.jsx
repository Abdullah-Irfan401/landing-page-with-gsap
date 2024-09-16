import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);


import { useRef } from "react";


function ImgSection() {

    const main = useRef()


    useGSAP(() => {
        gsap.to( main.current, {
            y : 250,
            // pin: true,
            scrollTrigger:{
                // markers: true,
                trigger: main.current,
                scrub: 1,  
                start: "top 650rem",
            }
            
        });
    });


    return (
        <div className=" h-[100%] w-[100%] mt-[165rem] " ref={main}  >
            <img className=" h-[100%] w-[100%] "  src="./Sectionimg.avif" alt="" />
        </div>
    )
}

export default ImgSection
