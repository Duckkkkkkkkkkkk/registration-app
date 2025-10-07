import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
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
      localStorage.setItem("isAuthenticated", "true");
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const updated = state.filter((u) => u.email !== action.payload);
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    },
    updateUser: (state, action: PayloadAction<{ email: string; updates: Partial<User> }>) => {
      const updated = state.map((u) =>
        u.email === action.payload.email ? { ...u, ...action.payload.updates } : u
      );
        localStorage.setItem("users", JSON.stringify(updated));
        console.log("Пользователь обновлен. Текущий список:", updated);
        return updated;
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;