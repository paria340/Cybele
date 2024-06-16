import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../feature/form/formSlice';

export const store = configureStore({
  reducer: {
    form: formSlice
  }
});