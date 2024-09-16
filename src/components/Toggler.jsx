import React, { useState } from "react";
import TogglerText1 from "./TogglerText1";
import TogglerText2 from "./TogglerText2";
import TogglerText3 from "./TogglerText3";
import TogglerText4 from "./TogglerText4";
import TogglerText5 from "./TogglerText5";

function Toggler() {
  const [isSelected, setIsSelected] = useState(0);

  const buttons = [
    { src: "./toggle1.avif", alt: "icon1" },
    { src: "./toggle2.avif", alt: "icon2" },
    { src: "./toggle3.avif", alt: "icon3" },
    { src: "./toggle4.avif", alt: "icon4" },
    { src: "./toggle5.avif", alt: "icon5" },
  ];

  const RenderToggleText = ({ index }) => {
    switch (index) {
      case 0:
        return <TogglerText1 />;

        case 1:
          return <TogglerText2 />;

        case 2:
          return <TogglerText3 />;

        case 3:
          return <TogglerText4 />;

        case 4:
          return <TogglerText5 />;

      default:
        break;
    }
  };

  return (
    <div>
      
      <div>
      
        <div className="flex flex-col items-strech justify-between">
        <div className="flex   text-2xl font-pp text-white  mt-[22rem] mb-[10rem]">
            <h4 className="mt-[-15rem] pl-[1.5rem] " >1 — 5</h4>
          </div>
         

          <div  >
            {/* Replace with <ToggleText1 /> */}
            <RenderToggleText index={isSelected} />
          </div>

          <div className="flex justify-center p-8 mt-[-7rem] ">
            {buttons.map((button, index) => (
              <a
                key={index}
                className={`w-[260px] h-[170px] flex justify-center items-center bg-[#1c1c1c] cursor-pointer text-none border border-[#444] transition-all duration-300 ease ${
                  isSelected === index ? "border-t-4 border-white" : ""
                } hover:border-white`}
                onClick={() => setIsSelected(index)}
              >
                <img
                  src={button.src}
                  alt={button.alt}
                  className={`w-20 h-20 transition-all duration-300 ease-in-out ${
                    isSelected === index
                      ? "w-[7rem] h-[7rem]"
                      : "hover:w-[7rem] hover:h-[7rem]"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toggler;
