import { useState } from "react";

const ExpandableSection = ({ number, title, content, tags }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
  
      return (
        <div className="border-t border-b border-[#353535] py-5 text-white">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleExpand}>
          <div className="font-semibold text-[1.252rem] mr-4"> {number} </div>
          <div className="flex-1 pl-[4.5rem] text-[1.252rem] tracking-wider font-semibold font-pp"> {title} </div>
          <div className="text-4xl"> {isExpanded ? '-' : '+'} </div>
        </div>
      
        {isExpanded && (
          <div className="mt-6 pl-[6.6rem] text-[#949690] font-pp ">
            <p className=" text-[1.25rem] font-semibold leading-[1.69rem] mb-[2rem]  ">
              {content}
            </p>
            <div className="flex flex-wrap gap-2 text-[1rem] mb-[2rem] ">
              {tags.map((tag, index) => (
                <span key={index} className="bg-[#353535] py-[.30rem] px-4 rounded-lg text-white">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      )
  }
  
  export default ExpandableSection
  