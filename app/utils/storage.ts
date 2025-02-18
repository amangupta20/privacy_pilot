import AsyncStorage from '@react-native-async-storage/async-storage';

// Keys for storage
const STORAGE_KEYS = {
  SETTINGS: '@privacy_pilot_settings',
  LOGS: '@privacy_pilot_logs',
};

export interface Settings {
  notificationsEnabled: boolean;
  loggingEnabled: boolean;
  dummyDataEnabled: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  appName: string;
  permissionType: string;
  action: 'allow' | 'block' | 'obfuscate';
  details?: string;
}

// Default settings
const DEFAULT_SETTINGS: Settings = {
  notificationsEnabled: true,
  loggingEnabled: true,
  dummyDataEnabled: false,
};

// Settings functions
export const getSettings = async (): Promise<Settings> => {
  try {
    const settings = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
    return settings ? JSON.parse(settings) : DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error loading settings:', error);
    return DEFAULT_SETTINGS;
  }
};

export const saveSettings = async (settings: Settings): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving settings:', error);
  }
};

// Logs functions
export const getLogs = async (): Promise<LogEntry[]> => {
  try {
    const logs = await AsyncStorage.getItem(STORAGE_KEYS.LOGS);
    return logs ? JSON.parse(logs) : [];
  } catch (error) {
    console.error('Error loading logs:', error);
    return [];
  }
};

export const addLog = async (log: Omit<LogEntry, 'id' | 'timestamp'>): Promise<void> => {
  try {
    const logs = await getLogs();
    const newLog: LogEntry = {
      ...log,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
    };
    logs.unshift(newLog); // Add to beginning of array
    await AsyncStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify(logs.slice(0, 100))); // Keep only last 100 logs
  } catch (error) {
    console.error('Error adding log:', error);
  }
};

export const clearLogs = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.LOGS, JSON.stringify([]));
  } catch (error) {
    console.error('Error clearing logs:', error);
  }
}; 