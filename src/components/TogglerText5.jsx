import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[25.3rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[2.846rem] leading-[3.045rem]" >
           <div><span>“We have a long history with this company</span></div> 
           <div><span> and several major projects together. Their </span></div>
           <div><span>expertise consistently makes us look good.” </span></div> 
          </div>
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-27.3rem] text-[1.2rem] font-pp ">
            <img
              src="./Fran Mayo.avif"
              alt=""
              className="h-[3.2rem] w-[3.2rem] rounded-full ml-[-3.5rem] mb-[-3.2rem] "
            />
            <h4 className=" mb-[-.4rem] " >Fran Mayo</h4>
            <h4>Space Craft / Marketing Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
