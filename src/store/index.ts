import type { TypedUseSelectorHook } from 'react-redux';

import { useSelector as useReduxSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import AddProcessReducer from './modal/add-process';
import CreateProductItemReducer from './modal/create-product-item';
import AddProductItemReducer from './modal/add-product-item';

const store = configureStore({
  reducer: combineReducers({
    createProductItem: CreateProductItemReducer,
    addProductItem: AddProductItemReducer,
    addProcess: AddProcessReducer,
  }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
