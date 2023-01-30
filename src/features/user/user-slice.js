import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName:null,
  email:null,
  accessToken: null,
  role: null,
  previousAppointment: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action)=> {
      state.userId = action.payload.id
      state.userName= action.payload.first_name;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    setAccessToken: (state, action)=> {
      state.accessToken=action.payload
    },
    setPreviousAppointment: (state, action)=> {
      state.previousAppointment=action.payload
    },
    resetUser: (state, action)=> {
      state.userId = null;
      state.userName = null;
      state.email = null;
      state.role = null;
      state.accessToken = null;
      state.previousAppointment=null
    }
    //sign out
  },
});

export const { setUser, setAccessToken, setPreviousAppointment,resetUser } = userSlice.actions;
export default userSlice.reducer;
