
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    dob: '',
    distance: '',
    timeGoal: '',
    email: '',
    password: '',
  },
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
