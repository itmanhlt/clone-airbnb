import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "top-0",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showFilter: (state) => {
      if (state.status === "top-0") {
        state.status = "top-20";
      } else {
        state.status = "top-0";
      }
    },
    hiddenFilter: (state) => {
      state.status = "none";
    },
  },
});

export const { showFilter, hiddenFilter } = filterSlice.actions;

export default filterSlice.reducer;
