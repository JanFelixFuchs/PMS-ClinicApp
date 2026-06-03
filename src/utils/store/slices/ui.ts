import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../configureStore';
import type { Language } from '../../types/ui/Languages';

interface UiState {
  language: Language;
}

const initialState: UiState = {
  language: 'en',
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // reducer for changing the language
    changeLanguage: (state, action: PayloadAction<{ language: Language }>) => {
      state.language = action.payload.language;
    },
  },
});

export const { changeLanguage } = ui.actions;

export const selectLanguage = (state: RootState) => state.ui.language;

export default ui.reducer;
