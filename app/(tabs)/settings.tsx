import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Surface, Text, List, Switch, Divider } from 'react-native-paper';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [loggingEnabled, setLoggingEnabled] = useState(true);
  const [dummyDataEnabled, setDummyDataEnabled] = useState(false);

  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <ScrollView>
        <List.Section>
          <List.Subheader>General</List.Subheader>
          <List.Item
            title="Enable Notifications"
            right={() => (
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Enable Logging"
            description="Keep track of all permission requests"
            right={() => (
              <Switch
                value={loggingEnabled}
                onValueChange={setLoggingEnabled}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Use Dummy Data"
            description="Replace sensitive data with fake data"
            right={() => (
              <Switch
                value={dummyDataEnabled}
                onValueChange={setDummyDataEnabled}
              />
            )}
          />
        </List.Section>
      </ScrollView>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
}); 