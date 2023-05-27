import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../../services/LocalService";

const initialState = {
  account: localService.get(),
};
const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    getUserLogin: (state = initialState, { payload }) => {
      state.account = payload;
    },
  },
});

export const { getUserLogin } = UserSlice.actions;

export default UserSlice.reducer;
