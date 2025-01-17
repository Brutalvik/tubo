import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const signupModal = createSlice({
  name: "login",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    signupUser: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = signupModal.actions;

export default signupModal.reducer;
