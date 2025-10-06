import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  name: string;
  password: string;
}

const initialState: User[] = JSON.parse(localStorage.getItem("users") || "[]");

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const updated = state.filter((u) => u.email !== action.payload);
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;