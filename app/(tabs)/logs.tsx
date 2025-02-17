import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Surface, Text, Card } from 'react-native-paper';

export default function LogsScreen() {
  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>Access Logs</Text>
      <ScrollView style={styles.scrollView}>
        {/* Sample log entry - will be replaced with real data */}
        <Card style={styles.logCard}>
          <Card.Content>
            <Text style={styles.timestamp}>Today, 2:30 PM</Text>
            <Text style={styles.logText}>Location access requested by Tik Tok</Text>
            <Text style={styles.status}>Status: Blocked</Text>
          </Card.Content>
        </Card>
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
  scrollView: {
    flex: 1,
  },
  logCard: {
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  logText: {
    fontSize: 16,
    marginVertical: 4,
  },
  status: {
    fontSize: 14,
    color: '#FF3B30',
  },
}); 