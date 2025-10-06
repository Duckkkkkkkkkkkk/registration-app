import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../features/registration/registrationSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;