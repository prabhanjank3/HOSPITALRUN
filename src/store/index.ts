import { configureStore, combineReducers, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import ReduxThunk, { ThunkAction } from "redux-thunk";
import logger from 'redux-logger';
import user from "./slices/userSlice";
import opd from './slices/opdSlices';
import utils from './slices/componentSlice';
import patient from './slices/patientSlice';
import { sampleApi } from "./apis/sample";
import {attachmentApi} from './apis/attachments';

const rootReducer = combineReducers({ user,opd, utils, patient, [sampleApi.reducerPath]:sampleApi.reducer,[attachmentApi.reducerPath]:attachmentApi.reducer });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sampleApi.middleware).concat(attachmentApi.middleware).concat(ReduxThunk,logger) 
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type RootState = ReturnType<typeof rootReducer>;
export default store;
