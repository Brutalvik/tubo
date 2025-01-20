import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    location: "",
    address: {},
    coordinates: { lat: null, lng: null },
    startDate: null,
    endDate: null,
  },
};

export const searchCriteria = createSlice({
  name: "searchCriteria",
  initialState,
  reducers: {
    setSearchCriteria: (state, { payload }) => {
      // Serialize Moment objects to ISO string
      const startDate = payload.startDate.toISOString();
      const endDate = payload.endDate.toISOString();

      // Update the state with serialized values
      state.search = {
        location: payload?.location || "", // Default to empty string if not present
        address: payload?.address || {}, // Default to empty object if not present
        coordinates: payload?.coordinates, // Storing only lat and lng
        startDate,
        endDate,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchCriteria } = searchCriteria.actions;

export default searchCriteria.reducer;
