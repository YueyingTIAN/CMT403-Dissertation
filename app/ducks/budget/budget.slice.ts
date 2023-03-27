import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  monthlyCaloriesBudget: 50,
};

const emissions = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setMonthlyCarbonBudget(state, action: PayloadAction<number>) {
      state.monthlyCaloriesBudget = action.payload;
    },
  },
});

const { setMonthlyCarbonBudget } = emissions.actions;

export const actions = { setMonthlyCarbonBudget };

export const namespace = emissions.name;

export const reducer = emissions.reducer;
