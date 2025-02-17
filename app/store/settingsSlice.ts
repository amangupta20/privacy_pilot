import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  notificationsEnabled: boolean;
  loggingEnabled: boolean;
  dummyDataEnabled: boolean;
}

const initialState: SettingsState = {
  notificationsEnabled: true,
  loggingEnabled: true,
  dummyDataEnabled: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled;
    },
    toggleLogging: (state) => {
      state.loggingEnabled = !state.loggingEnabled;
    },
    toggleDummyData: (state) => {
      state.dummyDataEnabled = !state.dummyDataEnabled;
    },
    updateSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  toggleNotifications,
  toggleLogging,
  toggleDummyData,
  updateSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer; 