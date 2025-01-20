import { createSlice } from "@reduxjs/toolkit";
import { fetchGeoLocation } from "@store/thunks/location";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationName: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeoLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGeoLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.locationName = action.payload;
      })
      .addCase(fetchGeoLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default locationSlice.reducer;
