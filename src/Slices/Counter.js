import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter_val: 6,
  counter_max_val: 100,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter_val += 1; 
    },
    decreaseCounter: (state, action) => {
      state.counter_val -= 1;
    },
    increaseByValue: (state, action) => {
      state.counter_val += action.payload; 
    },
    resetCounter: (state) => {
      state.counter_val = 0; 
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  increaseByValue,
  resetCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
