import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationName: "",
  loading: false,
  error: null,
};

const location = createSlice({
  name: "location",
  initialState,
  reducers: {
    fetchLocationPending: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLocationFulfilled: (state, action) => {
      state.locationName = action.payload;
      state.loading = false;
    },
    fetchLocationRejected: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchLocationPending,
  fetchLocationFulfilled,
  fetchLocationRejected,
} = location.actions;

export default location.reducer;
