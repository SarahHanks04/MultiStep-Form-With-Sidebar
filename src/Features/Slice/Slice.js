import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: ""
  },
  setAddOns: {
    onlineService: "",
    largerStorage: "",
    customizableProfile: "",
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    }
  }
});

export const { setPersonalInfo, setAddOns } = formSlice.actions;

export default formSlice.reducer;
