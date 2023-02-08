import { createSlice } from "@reduxjs/toolkit";
import usersArray from "../../users.json";

const initialState = {
  users: usersArray,
  usersAmount: usersArray.length,
  reversed: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    searchUser: ((state,  {payload}) => {
      if(payload === "") {
        state.users = usersArray
      } else {
        state.users = usersArray.filter((user) => user.name.toLowerCase().includes(payload.toLowerCase()))
      }
    }),
    reverseArray: ((state, {payload}) => {
      state.reversed = !state.reversed
      state.users = state.users.reverse()
    })
  },
});

export const { reverseArray, searchUser } = userSlice.actions;

export default userSlice.reducer;
