import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/loginModal.js";
import modalReducer from "@store/modal.js";
import signupReducer from "@store/signupModal.js";
import searchCriteriaReducer from "@store/searchCriteria.js";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    signup: signupReducer,
    searchCriteria: searchCriteriaReducer,
  }, // Add reducers here
});

export default store;
