import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  setAddOnsMonthly: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  setAddOnsYearly: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  selectedPlan: null,
  setAddOns: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setAddOnsMonthly: (state, action) => {
      state.setAddOnsMonthly = action.payload;
    },
    
    setAddOnsYearly: (state, action) => {
      state.setAddOnsYearly = action.payload;
    },

    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },

    setAddOns: (state, action) => {
      state.setAddOns = action.payload;
    },
    
  },
});

export const {
  setPersonalInfo,
  setSelectedPlan,
  setAddOnsMonthly,
  setAddOnsYearly,
  setAddOns,
} = formSlice.actions;

export default formSlice.reducer;
