import { configureStore, combineReducers } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  project: projectReducer,
  filter: filterReducer,
});

export default configureStore({
  reducer: rootReducer,
});
