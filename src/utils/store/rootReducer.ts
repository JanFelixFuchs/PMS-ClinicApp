import { combineReducers } from '@reduxjs/toolkit';
import identityReducer from '../store/slices/identity';
import uiReducer from '../store/slices/ui';
import entitiesReducer from './entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  identity: identityReducer,
  ui: uiReducer,
});

export default rootReducer;
