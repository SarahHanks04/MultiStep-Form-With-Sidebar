import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../Features/Slice/Slice";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPersonalInfo(formData));
    navigate("/select-plan");
  };

  return (
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold mb-3">Personal Info</h2>
      <p className="mb-8 text-gray-500">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:border-blue-500"
            required
          />
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-950 text-white px-6 py-2 rounded-md mt-4"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
