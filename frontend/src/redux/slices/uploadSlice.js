import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  extractedData: "",
  parsedData: null,
  loading: false,
  error: null,
};

const uploadSlice = createSlice({
  name: "upload",
  initialState,

  reducers: {
    uploadStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    uploadSuccess: (state, action) => {
      state.loading = false;
      state.files = action.payload.files;
      state.extractedData = action.payload.extractedData;
      state.parsedData = action.payload.parsedData;
    },

    uploadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearUpload: (state) => {
      state.files = [];
      state.extractedData = [];
      state.parsedData = null;
    },
  },
});

export const { uploadStart, uploadSuccess, uploadFailure, clearUpload } = uploadSlice.actions;
export default uploadSlice.reducer;