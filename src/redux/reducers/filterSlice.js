import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "top-[-100px]",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showFilter: (state) => {
      if (state.status === "top-[-100px]") {
        state.status = "top-[70px]";
      } else {
        state.status = "top-[-100px]";
      }
    },
    hiddenFilter: (state) => {
      state.status = "none";
    },
  },
});

export const { showFilter, hiddenFilter } = filterSlice.actions;

export default filterSlice.reducer;
