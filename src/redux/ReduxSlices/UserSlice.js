import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [{ user: "signIn"}],
  reducers: {
    login(state, action) {
    
      state = (action.payload.user);
      console.log(action.payload)
    },
  },
});
export const { login } = UserSlice.actions;
export default UserSlice.reducer;
