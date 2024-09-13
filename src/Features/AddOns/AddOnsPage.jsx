import React, { useState } from "react";
import AddOnsYearly from "./AddOnsYearly";
import AddOnsMonthly from "./AddOnsMonthly";
// import AddOnsMonthly from "./AddOnsMonthly";
// import AddOnsYearly from "./AddOnsYearly";

const AddOnsPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <div className="w-1/4 p-6 bg-blue-950 text-white rounded-lg">
        <ul className="space-y-4">
          <li className="text-white">
            <span className="block">STEP 1</span>
            YOUR INFO
          </li>
          <li className="text-white">
            <span className="block">STEP 2</span>
            SELECT PLAN
          </li>
          <li className="text-blue-500 font-bold">
            <span className="block">STEP 3</span>
            ADD-ONS
          </li>
          <li className="text-white">
            <span className="block">STEP 4</span>
            SUMMARY
          </li>
        </ul>
      </div> */}

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-3">Pick add-ons</h2>
        <p className="mb-6 text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>

        {/* Toggle Between Monthly/Yearly */}
        <div className="mb-6">
          <button
            className={`px-4 py-2 rounded-md mr-2 ${
              !isYearly ? "bg-blue-950 text-white" : "bg-gray-200 text-blue-950"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              isYearly ? "bg-blue-950 text-white" : "bg-gray-200 text-blue-950"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>

        {/* Conditionally render AddOnsMonthly or AddOnsYearly */}
        {isYearly ? <AddOnsYearly /> : <AddOnsMonthly />}
      </div>
    </div>
  );
};

export default AddOnsPage;
