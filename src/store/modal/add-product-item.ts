import { createSlice } from '@reduxjs/toolkit';

const addProductItemSlice = createSlice({
  initialState: {
    isModalOpen: false,
  },
  name: 'addProductItem',
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
  },
});

export const { closeModal, openModal } = addProductItemSlice.actions;

export default addProductItemSlice.reducer;
