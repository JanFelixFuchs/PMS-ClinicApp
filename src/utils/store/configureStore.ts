import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import httpMiddleware from './middleware/httpMiddleware';

const configureStore = () => {
  return configureReduxStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(httpMiddleware),
  });
};

export default configureStore;
export type AppStore = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
