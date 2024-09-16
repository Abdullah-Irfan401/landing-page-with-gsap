import { useState } from "react";

const Questions = ({ title, content}) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
  
      return (
        <div className=" pt-[2rem] text-white  w-[53rem] ">
        <div className="flex justify-start items-start cursor-pointer" onClick={toggleExpand}>
          <div className="flex-1 pl-[5rem] text-[1.5rem] font-medium text-[#000000] ml-[-5rem]  font-pp"> {title} </div>
          <div className="text-4xl text-[#000000] "> {isExpanded ? '-' : '+'} </div>
        </div>
      
        {isExpanded && (
          <div className="mt-6  text-[#949690] font-pp w-[44rem] ">
            <p className=" text-[1.25rem] font-medium leading-7 mb-[3rem]  ">
              {content}
            </p>
          </div>
        )}
        
        <div className="border-t-2  border-[#E5E7DF]   w-[53rem] mt-6" ></div>  
      </div>
      
      )
  }
  
  export default Questions
  