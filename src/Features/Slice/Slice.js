import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: ""
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
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    setAddOnsMonthly: (state, action) => {
      state.setAddOnsMonthly = action.payload;
    },
    setAddOnsYearly: (state, action) => {
      state.setAddOnsMonthly = action.payload;
    }
  }
});

export const { setPersonalInfo, setAddOnsMonthly, setAddOnsYearly } = formSlice.actions;

export default formSlice.reducer;
