import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  search: null,
};

export const searchCriteria = createSlice({
  name: "searchCriteria",
  initialState,
  reducers: {
    setSearchCriteria: (state, { payload }) => {
      state.search = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchCriteria } = searchCriteria.actions;

export default searchCriteria.reducer;
