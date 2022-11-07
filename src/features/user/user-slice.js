import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  userName:"Oshan",
  email:"",
  accessToken: "",
  accessLevel: "NOT_SIGN_IN",
  previousAppointment: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //sign in
    signIn(state, action) {
    //   state.userId = action.userId;
      state.email = action.payload;
    },
    //sign out
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
