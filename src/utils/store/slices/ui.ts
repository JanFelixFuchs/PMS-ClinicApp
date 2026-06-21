import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../configureStore';
import type { Language } from '../../types/ui/Language';
import { SidebarStatus } from '../../types/ui/SidebarStatus';

interface UiState {
  language: Language;
  sidebarStatus: SidebarStatus;
}

const initialState: UiState = {
  language: 'en',
  sidebarStatus: 'collapsed',
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // reducer for changing the language
    changeLanguage: (state, action: PayloadAction<{ language: Language }>) => {
      state.language = action.payload.language;
    },

    // reducer for changing the sidebar status
    changeSidebarStatus: (
      state,
      action: PayloadAction<{ sidebarStatus: SidebarStatus }>
    ) => {
      state.sidebarStatus = action.payload.sidebarStatus;
    },
  },
});

export const { changeLanguage, changeSidebarStatus } = ui.actions;

export const selectLanguage = (state: RootState) => state.ui.language;

export const selectSidebarStatus = (state: RootState) => state.ui.sidebarStatus;

export default ui.reducer;
