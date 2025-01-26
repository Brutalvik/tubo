import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "@store/thunks/fetchCars";

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {}, // No need for manual `fetchCarsRequest` etc.
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload; // Store fetched cars in state
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default carsSlice.reducer;
