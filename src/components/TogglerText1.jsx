import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[28rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[3rem]" >
           <div><span>“We involve this team in every new product.</span></div> 
           <div><span> They excel at their work and care about </span></div>
           <div><span>every detail, making each project special </span></div> 
           <div><span>and unique.”</span></div> 
          </div>
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-24.5rem] text-[1.2rem] font-pp ">
            <img
              src="./Jesse Orrico.avif"
              alt=""
              className="h-16 w-16 rounded-full ml-[-5rem] mb-[-3.4rem]  "
            />
            <h4 className=" mb-[.4rem] " >Jesse Orrico</h4>
            <h4>Relevant Compliance / Product Owner</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
