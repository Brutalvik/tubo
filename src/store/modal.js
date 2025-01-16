import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

export const modalStatus = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalStatus.actions;

export default modalStatus.reducer;
