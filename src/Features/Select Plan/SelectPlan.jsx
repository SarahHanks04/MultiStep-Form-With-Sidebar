import React, { useState } from "react";
import Arcade from "../../assets/Arcade.svg";
import IconAdvance from "../../assets/IconAdvance.svg";
import IconPro from "../../assets/IconPro.svg";
import Toggle from "./Toggle";
import { NavLink } from "react-router-dom";

const SelectPlan = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (value) => {
    setIsYearly(value);
  };

  const plans = [
    { name: "Arcade", monthly: "$9/mo", yearly: "$90/yr", image: Arcade },
    {
      name: "Advanced",
      monthly: "$12/mo",
      yearly: "$120/yr",
      image: IconAdvance,
    },
    { name: "Pro", monthly: "$15/mo", yearly: "$150/yr", image: IconPro },
  ];

  return (
    <div className="container max-w-xl">
      <div className="flex flex-col md:flex-row md:justify-between bg-white w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold mb-3">Select Your Plan</h1>
          <p className="text-gray-500 mb-6">
            You have the option of monthly or yearly billing.
          </p>
          <div className="mt-2 flex flex-col md:flex-row gap-6 mb-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="border-2 rounded-lg w-full md:w-1/3 p-4 cursor-pointer transition-all duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              >
                <div className="flex flex-col items-center">
                  <img src={plan.image} alt="" width={50} height={80} />
                  <h3 className="text-xl font-bold text-blue-900 mt-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500">
                    {isYearly ? plan.yearly : plan.monthly}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Toggle onToggle={handleToggle} />
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <NavLink
          to="/"
          className="w-full md:w-auto text-gray-400 text-sm px-6 py-2 rounded-md"
        >
          Go Back
        </NavLink>
        <NavLink
          to="/add-ons"
          className="w-full md:w-auto bg-blue-950 text-white px-6 py-2 rounded-md"
        >
          Next Step
        </NavLink>
      </div>
    </div>
  );
};

export default SelectPlan;
