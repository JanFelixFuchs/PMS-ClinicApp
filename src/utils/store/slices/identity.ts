import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../configureStore';
import type { CurrentUserOutputModel } from '../../types/outputModels/SharedOutputModels';
import type { ClinicOutputModel } from '../../types/outputModels/ClinicOutputModels';

interface IdentityState {
  clinic: ClinicOutputModel | null;
  currentUser: CurrentUserOutputModel | null;
  accessToken: string | null;
}

const initialState: IdentityState = {
  clinic: null,
  currentUser: null,
  accessToken: null,
};

const identity = createSlice({
  name: 'identity',
  initialState,
  reducers: {
    // reducer for login
    login: (
      state,
      action: PayloadAction<{
        user: CurrentUserOutputModel;
        clinic: ClinicOutputModel;
        accessToken: string;
      }>
    ) => {
      state.clinic = action.payload.clinic;
      state.currentUser = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    // reducer for logout
    logout: () => {
      return initialState;
    },

    // reducer for setting an access token
    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },

    // reducer for setting clinic
    setClinic: (
      state,
      action: PayloadAction<{ clinic: ClinicOutputModel }>
    ) => {
      state.clinic = action.payload.clinic;
    },
  },
});

export const { login, logout, setAccessToken, setClinic } = identity.actions;

// selector for user
export const selectUser = (state: RootState) => state.identity.currentUser;

// selector for clinic
export const selectClinic = (state: RootState) => state.identity.clinic;

// selector for authentication status
export const selectIsAuthenticated = (state: RootState) =>
  state.identity.currentUser !== null &&
  state.identity.clinic !== null &&
  state.identity.accessToken !== null;

export default identity.reducer;
