import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  email: "",
  password: "",
};

export const loginModal = createSlice({
  name: "login",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    loginUser: (state, action) => {
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = loginModal.actions;

export default loginModal.reducer;
