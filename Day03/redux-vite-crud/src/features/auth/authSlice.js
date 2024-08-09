import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// export const actions = authSlice.actions;
// actions.login , actions.logout
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
