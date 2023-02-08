import { createSlice } from "@reduxjs/toolkit";
import usersArray from "../../users.json";

const initialState = {
  users: usersArray,
  usersAmount: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
  },
});

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
