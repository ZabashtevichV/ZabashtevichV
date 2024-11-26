import { createSlice } from '@reduxjs/toolkit';

const createProductItemSlice = createSlice({
  initialState: {
    isModalOpen: false,
  },
  name: 'createProductItem',
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
  },
});

export const { closeModal, openModal } = createProductItemSlice.actions;

export default createProductItemSlice.reducer;
