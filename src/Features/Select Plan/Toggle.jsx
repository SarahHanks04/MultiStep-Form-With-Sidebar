import React, { useState } from "react";
import "../Select Plan/Style.css";

const Toggle = ({ onToggle }) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    onToggle(!isYearly);
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 w-full py-2">
      <span
        className={`mr-6 font-bold ${
          isYearly ? "text-gray-400" : "text-blue-950"
        }`}
      >
        Monthly
      </span>

      <div className="relative inline-block w-16 h-4">
        <input
          type="checkbox"
          id="toggle"
          checked={isYearly}
          onChange={handleToggle}
          className="toggle-checkbox absolute w-0 h-0 opacity-0"
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-full rounded-full cursor-pointer ${
            isYearly ? "bg-blue-950" : "bg-gray-300"
          }`}
        >
          <span
            className={`toggle-dot absolute left-1 top-0.5 h-3 w-3 rounded-full bg-white transition-transform ${
              isYearly ? "translate-x-10" : ""
            }`}
          />
        </label>
      </div>

      <span
        className={`ml-6 font-bold ${
          isYearly ? "text-blue-950" : "text-gray-400"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default Toggle;
