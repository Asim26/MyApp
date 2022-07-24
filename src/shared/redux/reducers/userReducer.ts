import {createSlice} from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  fcmToken: any;
  isFirstTime: any;
  userLocation: any;
}

const initialState: State = {
  user: null,
  authToken: null,
  fcmToken: null,
  isFirstTime: true,
  userLocation: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, action: any) => {
      state.user = action.payload;
    },
    setAuthToken: (state: any, action: any) => {
      state.authToken = action.payload;
    },
    setFCMToken: (state: any, action: any) => {
      state.fcmToken = action.payload;
    },
    setIsFirstTime: (state: any, action: any) => {
      state.isFirstTime = action.payload;
    },
    setUserLocation: (state: any, action: any) => {
      state.userLocation = action.payload;
    },
  },
});

export const {
  setUser,
  setAuthToken,
  setFCMToken,
  setIsFirstTime,
  setUserLocation,
} = userReducer.actions;

export default userReducer.reducer;
