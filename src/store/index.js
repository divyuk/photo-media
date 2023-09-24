import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
