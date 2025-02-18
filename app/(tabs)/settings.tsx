import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView } from 'react-native';
import { Text, List, Switch, Divider } from 'react-native-paper';
import { getSettings, saveSettings, type Settings } from '../utils/storage';

export default function SettingsScreen() {
  const [settings, setSettings] = useState<Settings>({
    notificationsEnabled: true,
    loggingEnabled: true,
    dummyDataEnabled: false,
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    const savedSettings = await getSettings();
    setSettings(savedSettings);
  };

  const updateSetting = async (key: keyof Settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    await saveSettings(newSettings);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        <ScrollView>
          <List.Section>
            <List.Subheader>General</List.Subheader>
            <List.Item
              title="Enable Notifications"
              right={() => (
                <Switch
                  value={settings.notificationsEnabled}
                  onValueChange={(value) => updateSetting('notificationsEnabled', value)}
                />
              )}
            />
            <Divider />
            <List.Item
              title="Enable Logging"
              description="Keep track of all permission requests"
              right={() => (
                <Switch
                  value={settings.loggingEnabled}
                  onValueChange={(value) => updateSetting('loggingEnabled', value)}
                />
              )}
            />
            <Divider />
            <List.Item
              title="Use Dummy Data"
              description="Replace sensitive data with fake data"
              right={() => (
                <Switch
                  value={settings.dummyDataEnabled}
                  onValueChange={(value) => updateSetting('dummyDataEnabled', value)}
                />
              )}
            />
          </List.Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
}); 