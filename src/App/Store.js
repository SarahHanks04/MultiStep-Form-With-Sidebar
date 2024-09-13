import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../Features/Slice/Slice';

export const store = configureStore({
  reducer: {
    form: formReducer
  }
});
