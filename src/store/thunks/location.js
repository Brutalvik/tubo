import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Your Google Maps API Key
const API_KEY = process.env.REACT_APP_MAPS_API_KEY;

// Thunk to fetch location from Google Maps API
export const fetchGeoLocation = createAsyncThunk(
  "location/fetchGeoLocation",
  async ({ latitude, longitude }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_FETCH_LOCATION_USING_COORDINATES_URL,
        {
          params: {
            latlng: `${latitude},${longitude}`,
            key: API_KEY,
          },
        }
      );

      // Extract the desired address component
      const locationName = data.results[0]?.address_components[3]?.long_name;

      if (!locationName) {
        throw new Error("Location name not found");
      }

      return locationName;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
