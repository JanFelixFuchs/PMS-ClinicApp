import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../configureStore';
import { apiCallBegan } from '../middleware/apiActionCreator';
import { Protocol } from '../../types/utils/Protocol';
import { HttpMethod } from '../../types/utils/HttpMethod';

interface IdentityState {
  user: {
    firstName: string | null;
    lastName: string | null;
  };
  clinic: {
    clinicId: string | null;
    name: string | null;
    abbreviation: string | null;
    owner: string | null;
    medicalField: string | null;
    email: string | null;
    phoneNumber: string | null;
    street: string | null;
    houseNumber: string | null;
    city: string | null;
    zipCode: string | null;
  };
  auth: {
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
  };
}

const initialState: IdentityState = {
  user: {
    firstName: 'PlaceholderFirstName',
    lastName: null,
  },
  clinic: {
    clinicId: null,
    name: 'PlaceholderClinicName',
    abbreviation: null,
    owner: null,
    medicalField: null,
    email: null,
    phoneNumber: null,
    street: null,
    houseNumber: null,
    city: null,
    zipCode: null,
  },
  auth: {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: true,
  },
};

const identity = createSlice({
  name: 'identity',
  initialState,
  reducers: {
    // reducer for login success
    loginSucceeded: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.auth.accessToken = action.payload.accessToken;
      state.auth.refreshToken = action.payload.refreshToken;
      state.auth.isAuthenticated = true;
    },

    // reducer for login failure
    loginFailed: (state) => {
      state.auth.accessToken = null;
      state.auth.refreshToken = null;
      state.auth.isAuthenticated = false;
    },

    // test reducer
    loginSu: (state) => {
      state.auth.isAuthenticated = true;
    },
  },
});

export const { loginSu } = identity.actions;

// action creator for login
export const login = () =>
  apiCallBegan({
    protocol: Protocol.HTTPS,
    url: '/asaksak',
    method: HttpMethod.GET,
    onStart: loginSu.type,
  });

// selector for user
export const selectUser = (state: RootState) => state.identity.user;

// selector for clinic
export const selectClinic = (state: RootState) => state.identity.clinic;

// selector for isAuthenticated
export const selectIsAuthenticated = (state: RootState) =>
  state.identity.auth.isAuthenticated;

export default identity.reducer;
