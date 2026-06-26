import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils/storage";

const initialState = {
  user: getItem("user"),
  token: getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    authSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      setItem("user", action.payload.user);
      setItem("token", action.payload.token);
    },

    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

  
  },
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;
export default authSlice.reducer;