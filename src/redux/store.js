import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./reducers/UserSlice";
import filterSlice from "./reducers/filterSlice";

export const store = configureStore({
  reducer: {
    UserSlice,
    filter: filterSlice,
  },
});
