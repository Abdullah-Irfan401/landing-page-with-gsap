import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[28rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[3rem]">
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
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-15.2rem] text-[1.2rem] font-pp ">
            <img
              src="./Tina Rossell.avif"
              alt=""
              className="h-16 w-16 rounded-full ml-[-5rem] mb-[-3.4rem]  "
            />
            <h4 className=" mb-[.4rem] ">Tina Rossell</h4>
            <h4>Royal Carribbean / Commodity & Marketing Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
