import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { Slot, SplashScreen } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from '../app/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after the app is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Slot />
        </SafeAreaProvider>
      </PaperProvider>
    </StoreProvider>
  );
}
