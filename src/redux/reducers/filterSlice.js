import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "top-[-100px]",
  cityID: "",
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
      state.status = "top-[-100px]";
    },
    sendID: (state, action) => {
      state.cityID = action.payload;
    },
  },
});

export const { showFilter, hiddenFilter, sendID } = filterSlice.actions;

export default filterSlice.reducer;
