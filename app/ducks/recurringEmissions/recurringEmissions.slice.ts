import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RecurringEmission } from "interfaces";

const initialState: RecurringEmission[] = [];

const recurringEmissions = createSlice({
  name: "recurringEmissions",
  initialState,
  reducers: {
    createRecurringEmission(state, action: PayloadAction<RecurringEmission>) {
      state.push(action.payload);
    },
    deleteRecurringEmission(state, action: PayloadAction<string>) {
      return (state = state.filter((item) => item.id !== action.payload));
    },
    deleteAllRecurringFoods() {
      return initialState;
    },
    loadRecurringFoodsFromImport(state, action: PayloadAction<Array<RecurringEmission>>) {
      return (state = action.payload);
    },
  },
});

const {
  createRecurringEmission,
  deleteRecurringEmission,
  deleteAllRecurringFoods,
  loadRecurringFoodsFromImport,
} = recurringEmissions.actions;

export const actions = {
  createRecurringEmission,
  deleteRecurringEmission,
  deleteAllRecurringFoods,
  loadRecurringFoodsFromImport,
};

export const namespace = recurringEmissions.name;

export const reducer = recurringEmissions.reducer;
