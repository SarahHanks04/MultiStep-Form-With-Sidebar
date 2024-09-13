import React from "react";
import { NavLink } from "react-router-dom";
import sidebarD from "../assets/sidebarD.svg"

const Sidebar = () => {
  

  return (
    <div className="w-full md:w-1/4 p-8 text-white rounded-md bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: `url(${sidebarD})`,
    }}>
      {/* Step 1 circle */}
      <div className="mb-6 flex">
        <div className="flex-shrink-0 mr-4">
          <div>
            <div className="w-8 h-8 bg-emerald-100 font-medium border rounded-full flex items-center justify-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? " text-black" : "text-white"
                }
              >
                1
              </NavLink>
            </div>
            {/* Step 1 text */}
            <div className="flex flex-col">
              <span className="text-gray-300 text-[14px]">STEP 1</span>
              <span className="text-white font-medium">YOUR INFO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2 circle */}
      <div className="mb-6 flex">
        <div className="flex-shrink-0 mr-4">
          <div>
            <div className="w-8 h-8 bg-emerald-100 font-medium border rounded-full flex items-center justify-center">
              <NavLink
                to="/select-plan"
                className={({ isActive }) =>
                  isActive ? " text-black" : "text-white"
                }
              >
                2
              </NavLink>
            </div>
            {/* Step 2 text */}
            <div className="flex flex-col">
              <span className="text-gray-300 text-[14px]">STEP 2</span>
              <span className="text-white font-medium">SELECT PLAN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 circle */}
      <div className="mb-6 flex">
        <div className="flex-shrink-0 mr-4">
          <div>
            <div className="w-8 h-8 bg-emerald-100 font-medium border rounded-full flex items-center justify-center">
              <NavLink
                to="/add-ons"
                className={({ isActive }) =>
                  isActive ? " text-black" : "text-white"
                }
              >
                3
              </NavLink>
            </div>
            {/* Step 3 text */}
            <div className="flex flex-col">
              <span className="text-gray-300 text-[14px]">STEP 3</span>
              <span className="text-white font-medium">ADD-ONS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 circle */}
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <div>
            <div className="w-8 h-8 bg-emerald-100 font-medium border rounded-full flex items-center justify-center">
              <NavLink
                to="/summary"
                className={({ isActive }) =>
                  isActive ? " text-black" : "text-white"
                }
              >
                4
              </NavLink>
            </div>
            {/* Step 4 text */}
            <div className="flex flex-col">
              <span className="text-gray-300 text-[14px]">STEP 4</span>
              <span className="text-white font-medium">SUMMARY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
