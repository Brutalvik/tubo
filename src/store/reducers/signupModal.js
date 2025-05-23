import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSocialMediaModalOpen: false,
  isSignupModalOpen: false,
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
