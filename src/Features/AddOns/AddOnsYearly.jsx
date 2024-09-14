// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setAddOnsYearly } from "../Slice/Slice";
// import { useNavigate } from "react-router-dom";

// const AddOnsYearly = () => {
//   const [selectedAddOns, setSelectedAddOns] = useState({
//     onlineService: false,
//     largerStorage: false,
//     customizableProfile: false,
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleCheckboxChange = (e) => {
//     setSelectedAddOns({
//       ...selectedAddOns,
//       [e.target.name]: e.target.checked,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setAddOnsYearly(selectedAddOns));
//     navigate("/summary");
//   };

//   return (
//     <div>
//       {/* Add your form content for AddOnsYearly */}
//       <form onSubmit={handleSubmit}>
//         {/* Form contents */}
//         <div className="flex justify-between mt-10">
//           <button
//             type="button"
//             className="text-blue-950 text-sm"
//             onClick={() => navigate("/select-plan")}
//           >
//             Go Back
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-950 text-white px-6 py-2 rounded-md"
//           >
//             Next Step
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddOnsYearly;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddOnsYearly } from "../Slice/Slice";
import { useNavigate } from "react-router-dom";

const AddOnsYearly = () => {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setSelectedAddOns({
      ...selectedAddOns,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddOnsYearly(selectedAddOns));
    navigate("/summary");
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-3">Pick add-ons</h2>
        <p className="mb-6 text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <label className="border border-blue-500 p-3 rounded-lg cursor-pointer flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="onlineService"
                  checked={selectedAddOns.onlineService}
                  onChange={handleCheckboxChange}
                  className="mr-4 h-4 w-4"
                />
                <div>
                  <h3 className="text-base font-bold text-blue-950">
                    Online service
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Access to multiplayer games
                  </p>
                </div>
              </div>
              <span className="text-blue-950 text-sm">+$10/yr</span>
            </label>

            <label className="border border-blue-500 p-3 rounded-lg cursor-pointer flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="largerStorage"
                  checked={selectedAddOns.largerStorage}
                  onChange={handleCheckboxChange}
                  className="mr-4 h-4 w-4"
                />
                <div>
                  <h3 className="text-base font-bold text-blue-950">
                    Larger storage
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Extra 1TB of cloud save
                  </p>
                </div>
              </div>
              <span className="text-blue-950 text-sm">+$20/yr</span>
            </label>

            <label className="border border-blue-500 p-3 rounded-lg cursor-pointer flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="customizableProfile"
                  checked={selectedAddOns.customizableProfile}
                  onChange={handleCheckboxChange}
                  className="mr-4 h-4 w-4"
                />
                <div>
                  <h3 className="text-base font-bold text-blue-950">
                    Customizable profile
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Custom theme on your profile
                  </p>
                </div>
              </div>
              <span className="text-blue-950 text-sm">+$20/yr</span>
            </label>
          </div>

          <div className="flex justify-between mt-10">
            <button
              type="button"
              className="text-blue-950 text-sm"
              onClick={() => navigate("/add-ons")}
            >
              Go Back
            </button>
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-2 rounded-md"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOnsYearly;
