import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch cars near a location
export const fetchCars = createAsyncThunk(
  "cars/fetchCars", // Unique action name
  async ({ latitude, longitude }, { rejectWithValue }) => {
    const radius = 1000;
    try {
      const { data } = await axios.get(
        `http://localhost:9000/cars/nearby?latitude=${latitude}&longitude=${longitude}&radius=${radius}`
      );
      console.log("DATA: ", data);
      return data; // This will trigger the `fulfilled` action in the slice
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message); // This triggers the `rejected` action
    }
  }
);
