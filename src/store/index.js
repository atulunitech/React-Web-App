import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Log store changes in development
if (process.env.NODE_ENV === 'development') {
  store.subscribe(() => {
    console.log('Store Updated:', store.getState());
  });
}