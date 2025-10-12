import { combineReducers } from '@reduxjs/toolkit';
import identityReducer from '../store/slices/identity';
import uiReducer from '../store/slices/ui';

const rootReducer = combineReducers({
  identity: identityReducer,
  ui: uiReducer,
});

export default rootReducer;
