import { configureStore } from '@reduxjs/toolkit';
import rulesReducer from './rulesSlice';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    rules: rulesReducer,
    settings: settingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 