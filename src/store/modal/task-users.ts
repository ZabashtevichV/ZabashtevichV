import { createSlice } from '@reduxjs/toolkit';

const taskUsersSlice = createSlice({
  initialState: {
    isModalOpen: false,
  },
  name: 'taskUsers',
  reducers: {
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
  },
});

export const { closeModal, openModal } = taskUsersSlice.actions;

export default taskUsersSlice.reducer;
