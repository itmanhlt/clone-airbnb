import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import filterSlice from "./reducers/filterSlice";
import spinnerSlice from "./reducers/spinnerSlice";

export const store = configureStore({
  reducer: {
    UserSlice,
    filter: filterSlice,
    spinnerSlice: spinnerSlice,
  },
});
