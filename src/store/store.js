import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/loginModal.js";
import modalReducer from "@store/modal.js";
import signupReducer from "@store/signupModal.js";
import searchCriteriaReducer from "@store/searchCriteria";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    signup: signupReducer,
    searchCriteria: searchCriteriaReducer,
  }, // Add reducers here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["searchCriteria/setSearchCriteria"],
        ignoredPaths: ["searchCriteria"], // Ignore the coordinates path for serialization check
      },
    }),
});

export default store;
