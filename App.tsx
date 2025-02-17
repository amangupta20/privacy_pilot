import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './app/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

// Import the root layout from expo-router
import { Slot } from 'expo-router';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StoreProvider store={store}>
            <PaperProvider>
              <StatusBar style="auto" />
              <Slot />
            </PaperProvider>
          </StoreProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </View>
  );
} 