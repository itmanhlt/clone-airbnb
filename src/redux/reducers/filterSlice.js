import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "none",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showFilter: (state) => {
      if (state.status === "none") {
        state.status = "block";
      } else {
        state.status = "none";
      }
    },
    hiddenFilter: (state) => {
      state.status = "none";
    },
  },
});

export const { showFilter, hiddenFilter } = filterSlice.actions;

export default filterSlice.reducer;
