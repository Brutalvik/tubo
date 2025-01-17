import { configureStore } from "@reduxjs/toolkit";
import { loginModal } from "@store/loginModal.js";
import modalReducer from "@store/modal.js";

const store = configureStore({
  reducer: { modal: modalReducer, loginModal: loginModal }, // Add reducers here
});

export default store;
