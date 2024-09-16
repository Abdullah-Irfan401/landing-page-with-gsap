const Benefits = ({ number, title, content }) => {
  return (
    <div className="flex flex-col items-start justify-start font-pp">
      <div className="text-[1.25rem] font-semibold mb-[1rem]">({number})</div>

      <div className="border-t border-[#000000] mb-[1.25rem]"></div>

      <div className="text-[1.25rem] font-semibold mb-[1.25rem]">
        <span>{title}</span>
      </div>

      <div className="flex flex-col items-start text-[1.25rem] font-semibold text-[#949690] mb-[4rem]">
        {content.map((text, index) => (
          <div key={index}>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
