import React from "react";

function TogglerText1() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center  font-semibold font-pp text-white ml-[26rem] mt-[-24rem] mb-[15rem] transition-all ease-in-out duration-200">
          <div className="text-[2.846rem] leading-[3.045rem]" >
           <div><span>“Referred by a friend, we appreciated this</span></div> 
           <div><span>team's clear pricing and flexible staffing for</span></div>
           <div><span>our major site launches, including Shopify</span></div> 
           <div><span>development. They're now our go-to team in</span></div> 
           <div><span>a pinch.”</span></div> 
          </div>
          <div className="flex flex-col justify-start items-start mt-[3rem] ml-[-24.5rem] text-[1.2rem] font-pp ">
            <img
              src="./Oleksandra Zubrytska.avif"
              alt=""
              className="h-[3.2rem] w-[3.2rem] rounded-full ml-[-3.5rem] mb-[-3.2rem]  "
            />
            <h4 className=" mb-[-.4rem] " >Oleksandra Zubrytska</h4>
            <h4>The Hollis Co. / Technical Project Manager</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglerText1;
