import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [],
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    addToBucket: (state, action) => {
      state.services = [...state.services, action.payload.id];
    },
    removeFromBucket: (state, action) => {
      const index = state.services.indexOf(action.id);
      if (index > -1) {
        state.services = state.services.splice(index, 1);
      }
    },
    //sign out
  },
});

export const { setUser, setAccessToken, setPreviousAppointment, resetUser } =
  bucketSlice.actions;
export default bucketSlice.reducer;
