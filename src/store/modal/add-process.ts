import { createSlice } from '@reduxjs/toolkit';

const addProcessSlice = createSlice({
  initialState: {
    isModalOpen: false,
  },
  name: 'addProcess',
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
  },
});

export const { closeModal, openModal } = addProcessSlice.actions;

export default addProcessSlice.reducer;
