import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const selectedPlan = useSelector((state) => state.form.selectedPlan);
  const addOnsMonthly = useSelector((state) => state.form.setAddOnsMonthly);
  const addOnsYearly = useSelector((state) => state.form.setAddOnsYearly);

  const addOns = selectedPlan?.yearly ? addOnsYearly : addOnsMonthly;

  const navigate = useNavigate();

  return (
    <div className="summary-container bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Finishing Up</h2>
      <p className="text-gray-500 mb-4">
        Double-check everything looks OK before confirming.
      </p>

      <div className="summary-details mb-4">
        <h3 className="text-xl font-semibold">{selectedPlan?.name}</h3>
        <p className="text-gray-500">
          {selectedPlan?.monthly ? selectedPlan?.monthly : selectedPlan?.yearly}
        </p>
      </div>

      <div className="addons-details">
        <h3 className="text-xl font-semibold">Add-ons</h3>
        {addOns.onlineService && (
          <p className="text-gray-500">
            Online Service: {selectedPlan?.yearly ? "+$10/yr" : "+$1/mo"}
          </p>
        )}
        {addOns.largerStorage && (
          <p className="text-gray-500">
            Larger Storage: {selectedPlan?.yearly ? "+$20/yr" : "+$2/mo"}
          </p>
        )}
        {addOns.customizableProfile && (
          <p className="text-gray-500">
            Customizable Profile: {selectedPlan?.yearly ? "+$20/yr" : "+$2/mo"}
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          className="text-blue-950 text-sm"
          onClick={() => navigate("/add-ons-yearly")}
        >
          Go Back
        </button>
        <button className="bg-blue-950 text-white px-6 py-2 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
