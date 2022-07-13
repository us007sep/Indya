import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './ItemReducer';

export const RootReducer = combineReducers({ItemsReducer});

export type Schema = ReturnType<typeof RootReducer>;

export const Store = configureStore({
    reducer : RootReducer
})

