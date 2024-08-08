// import React from "react";
// import {createStore} from 'redux'
// const myStore = createStore()
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {myDataReducer} from '../features/myData/myDataSlice';
import {productReducer} from '../features/product/productSlice';

const rootReducer = combineReducers({
    myData: myDataReducer,
    product: productReducer,
  });
  
  export const myStore = configureStore({
    reducer: rootReducer,
  });