import { combineReducers } from '@reduxjs/toolkit';
import identityReducer from '../store/slices/identity';
import uiReducer from '../store/slices/ui';
import { api } from './slices/api';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  identity: identityReducer,
  ui: uiReducer,
});

export default rootReducer;
