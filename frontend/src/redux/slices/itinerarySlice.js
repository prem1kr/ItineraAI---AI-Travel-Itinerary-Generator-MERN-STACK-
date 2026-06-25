import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentItinerary: null,
  itineraries: [],
  loading: false,
  error: null,
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,

  reducers: {
    itineraryStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    itinerarySuccess: (state, action) => {
      state.loading = false;
      state.currentItinerary = action.payload;
    },

    setItineraries: (state, action) => {
      state.itineraries = action.payload;
    },

    itineraryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearItinerary: (state) => {
      state.currentItinerary = null;
    },
  },
});

export const { itineraryStart, itinerarySuccess, setItineraries, itineraryFailure, clearItinerary } = itinerarySlice.actions;
export default itinerarySlice.reducer;