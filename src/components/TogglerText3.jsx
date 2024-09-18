import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[23rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[2.846rem] leading-[3.045rem]">
            <div>
              <span>“This team excelled under pressure,</span>
            </div>
            <div>
              <span> delivering a standout UX/UI update to our</span>
            </div>
            <div>
              <span>booking section that redefined our</span>
            </div>
            <div>
              <span>collaboration and became a highlight for</span>
            </div>
            <div>
              <span>Royal Caribbean.”</span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-15.6rem] text-[1.2rem] font-pp ">
            <img
              src="./Tina Rossell.avif"
              alt=""
              className="h-[3.2rem] w-[3.2rem] rounded-full ml-[-3.5rem] mb-[-3.2rem]   "
            />
            <h4 className=" mb-[-.4rem] ">Tina Rossell</h4>
            <h4>Royal Carribbean / Commodity & Marketing Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
