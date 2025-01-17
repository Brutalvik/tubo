import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/loginModal.js";
import modalReducer from "@store/modal.js";

const store = configureStore({
  reducer: { modal: modalReducer, loginModal: loginReducer }, // Add reducers here
});

export default store;
