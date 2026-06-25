import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import uploadReducer from "./slices/uploadSlice";
import itineraryReducer from "./slices/itinerarySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
    itinerary: itineraryReducer,
  },
});

export default store;