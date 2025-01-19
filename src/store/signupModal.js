import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSocialMediaModalOpen: false,
  isSignupModalOpen: false,
  currentUser: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
  },
};

export const signupModal = createSlice({
  name: "login",
  initialState,
  reducers: {
    openSocialMediaSignupModal: (state) => {
      state.isSocialMediaModalOpen = true;
    },
    closeSocialMediaSignupModal: (state) => {
      state.isSocialMediaModalOpen = false;
    },
    openSignupModal: (state) => {
      state.isSignupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.isSignupModalOpen = false;
    },
    signupUser: (state, { payload }) => {
      console.log(payload);
      state.currentUser = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openSocialMediaSignupModal,
  closeSocialMediaSignupModal,
  openSignupModal,
  closeSignupModal,
  signupUser,
} = signupModal.actions;

export default signupModal.reducer;
