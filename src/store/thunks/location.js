import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Your Google Maps API Key
const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

// Thunk to fetch location from Google Maps API
export const fetchGeoLocation = createAsyncThunk(
  "location/fetchGeoLocation",
  async ({ latitude, longitude }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_FETCH_LOCATION_USING_COORDINATES_URL,
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: API_KEY,
          },
        }
      );

      if (response.data.status === "OK") {
        return response.data.results[0].formatted_address;
      } else {
        throw new Error("Location not found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
