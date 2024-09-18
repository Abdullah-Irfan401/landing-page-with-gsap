import React from "react";

const PricingCard = ({
  badgeText,
  title,
  description,
  price,
  pricetime,
  buttonText,
  infoLinkText,
  includedItems,
  duration,
  badgecolor,
  padding
}) => {
  return (
    <div className="flex flex-col items-start justify-start border border-gray-200 rounded-xl w-[26.5rem]  font-pp" style={padding} >
      <div className="text-left p-4 px-8">
        <div className=" text-[#000000] py-1 px-4 rounded-md mt-[-2rem] text-sm font-medium" style={badgecolor} >
          <span>{badgeText}</span>
        </div>
      </div>

      <div className=" px-10 pb-6">
        <div className="text-[1.25rem] font-semibold mb-[1rem]">
          <span>{title}</span>
        </div>

        <div className="text-[1rem] text-gray-600 mt-[1rem]">
          <span>{description}</span>
        </div>

        <div className=" flex-col items-start justify-start mt-6">
          <div className="text-4xl font-bold">
            <span>{price}</span>
            <span className="text-xl font-normal">{pricetime}</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            <span>{duration}</span>
          </div>
        </div>

        <button className=" flex items-stretch  justify-between px-6 pt-[1.3rem] bg-[#1E1E1E] text-white w-full h-[4rem] py-3 mt-6 rounded-md hover:bg-[#E0F07D] transition-colors duration-700 cursor-pointer hover:text-[#000000] transition-colors duration-700 cursor-pointer ">
          <span>{buttonText}</span>
          <svg
            data-v-bd0729da=""
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3   overflow-hidden"
            id="SVG 5"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1"
            height="1"
          >
            <path
              data-v-bd0729da=""
              d="m11.18 7.84-1.56-.02V2.88L1.94 10.6.8 9.44l7.72-7.7H3.56V.2h7.62v7.64Z"
              class="fill-current"
              fill="#1E1E1E"
            ></path>
          </svg>
        </button>

        <div className="flex justify-center items-center mt-3">
          <a
            href="#"
            className="text-sm  text-[#000000] underline hover:text-gray-800"
          >
            <span>{infoLinkText}</span>
          </a>
        </div>
      </div>

      <div className="bg-gray-50 py-2 px-10  rounded-b-xl border-t w-full">
        <div className="text-md font-semibold mb-4">
          <span>What’s included</span>
        </div>
        <div className="flex flex-col items-start text-[1.025rem]  tracking-wide font-medium text-[#000000]">
          {includedItems.map((item, index) => (
            <div key={index} className="flex items-start mb">
              <span className="text-[#000000] mt-[-.2rem] font-semibold mr-2">
                <svg
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-auto mr-15"
                  id="SVG 6"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="5"
                  height="13"
                >
                  <path
                    d="M1 4.5L5 8.5L12.5 1"
                    stroke="#1E1E1E"
                    stroke-width="2px"
                    fill="none"
                  ></path>
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
