import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface RegistrationState {
  step: number;
  email: string;
  name: string;
  password: string;
}

const initialState: RegistrationState = {
  step: 1,
  email: "",
  name: "",
  password: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    nextStep: (state) => {
      if (state.step < 2) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    reset: () => initialState,
  },
});

export const { setEmail, setName, setPassword, nextStep, prevStep, reset } =
  registrationSlice.actions;

export default registrationSlice.reducer;
