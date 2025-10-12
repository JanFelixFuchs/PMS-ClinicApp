import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../configureStore';

interface UiState {
  language: string;
}

const initialState: UiState = {
  language: 'en',
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // reducer for changing the language
    changeLanguage: (state, action: PayloadAction<{ language: string }>) => {
      state.language = action.payload.language;
    },
  },
});

export const { changeLanguage } = ui.actions;

export const selectLanguage = (state: RootState) => state.ui.language;

export default ui.reducer;
