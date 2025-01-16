import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@store/modal.js";

const store = configureStore({
  reducer: { modal: modalReducer }, // Add reducers here
});

export default store;
