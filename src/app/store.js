import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user-slice";
import bucketReducer from "../features/bucket/bucket-slice";

export const store = configureStore({
  reducer: { user: userReducer, bucker: bucketReducer },
});
