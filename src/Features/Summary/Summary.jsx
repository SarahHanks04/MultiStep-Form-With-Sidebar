import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const calculateTotal = (planPrice, addOns, isSubscriptionYearly) => {
  let total = planPrice;
  if (addOns.onlineService) total += isSubscriptionYearly ? 10 : 1;
  if (addOns.largerStorage) total += isSubscriptionYearly ? 20 : 2;
  if (addOns.customizableProfile) total += isSubscriptionYearly ? 20 : 2;
  return total;
};

const Summary = () => {
  const selectedPlan = useSelector((state) => state.form.selectedPlan);
  const addOnsMonthly = useSelector((state) => state.form.setAddOnsMonthly);
  const addOnsYearly = useSelector((state) => state.form.setAddOnsYearly);

  const isSubscriptionYearly = selectedPlan?.yearly;
  const planPrice = isSubscriptionYearly
    ? selectedPlan?.yearly
    : selectedPlan?.monthly;
  const addOns = isSubscriptionYearly ? addOnsYearly : addOnsMonthly;

  const total = calculateTotal(planPrice, addOns, isSubscriptionYearly);

  const navigate = useNavigate();

  return (
    <div className="summary-container bg-white px-8 py-6 rounded-lg max-w-2xl mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-2">Finishing Up</h2>
      <p className="text-gray-500 mb-10">
        Double-check everything looks OK before confirming.
      </p>

      {/* Selected Plan */}
      <div className="main-container bg-gray-50 px-4 py-3 rounded-lg">
        <div className="summary-details flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold">
              {selectedPlan?.name} (
              {isSubscriptionYearly ? "Yearly" : "Monthly"})
            </h3>
            <button
              className="text-blue-600 underline text-sm mt-1"
              onClick={() => navigate("/select-plan")}
            >
              Change
            </button>
          </div>
          <p className="text-lg font-semibold text-blue-900">
            ${planPrice}/{isSubscriptionYearly ? "yr" : "mo"}
          </p>
        </div>

        {/* Add-ons */}
        <div className="addons-details">
          {addOns.onlineService && (
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Online Service</p>
              <p className="text-blue-900">
                +${isSubscriptionYearly ? "10/yr" : "1/mo"}
              </p>
            </div>
          )}
          {addOns.largerStorage && (
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Larger Storage</p>
              <p className="text-blue-900">
                +${isSubscriptionYearly ? "20/yr" : "2/mo"}
              </p>
            </div>
          )}
          {addOns.customizableProfile && (
            <div className="flex justify-between mb-2">
              <p className="text-gray-600">Customizable Profile</p>
              <p className="text-blue-900">
                +${isSubscriptionYearly ? "20/yr" : "2/mo"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between mt-4 mb-10 text-lg">
        <p className="text-gray-600">
          Total ({isSubscriptionYearly ? "per year" : "per month"})
        </p>
        <p className="font-bold text-xl text-blue-900">
          ${total}/{isSubscriptionYearly ? "yr" : "mo"}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          className="text-blue-900 text-sm"
          onClick={() => navigate("/add-ons-yearly")}
        >
          Go Back
        </button>
        <button onClick={() => navigate("/success")} className="bg-blue-900 text-white px-6 py-2 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
