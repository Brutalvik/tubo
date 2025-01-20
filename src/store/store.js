import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@store/reducers/loginModal.js";
import modalReducer from "@store/reducers/modal.js";
import signupReducer from "@store/reducers/signupModal.js";
import searchCriteriaReducer from "@store/reducers/searchCriteria";
import locationReducer from "@store/reducers/location";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    login: loginReducer,
    signup: signupReducer,
    searchCriteria: searchCriteriaReducer,
    location: locationReducer,
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
