import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      className={`w-14 h-8 rounded-full flex items-center cursor-pointer transition-colors duration-300 ${
        isToggled ? "bg-gray-300" : "bg-gray-200"
      }`}
      onClick={toggleButton}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          isToggled ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
