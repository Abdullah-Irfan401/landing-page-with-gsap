import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[24.3rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[2.846rem] leading-[3.045rem]">
            <div>
              <span>“We've partnered with Better Off for years,</span>
            </div>
            <div>
              <span> and are always impressed by their</span>
            </div>
            <div>
              <span>innovative brand development and precise</span>
            </div>
            <div>
              <span>execution. Their work during our recent</span>
            </div>
            <div>
              <span>rebrand matched our vision perfectly.”</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-33.2rem] text-[1.2rem] font-pp ">
            <img
              src="./Andrew Watson.avif"
              alt=""
              className="h-[3.2rem] w-[3.2rem] rounded-full ml-[-3.5rem] mb-[-3.2rem] "
            />
            <h4 className=" mb-[-.4rem] ">Andrew Watson</h4>
            <h4>Built Things / Owner</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
