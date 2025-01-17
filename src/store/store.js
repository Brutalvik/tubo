import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/loginModal.js";
import modalReducer from "@store/modal.js";
import signupReducer from "@store/signupModal.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loginModal: loginReducer,
    signup: signupReducer,
  }, // Add reducers here
});

export default store;
