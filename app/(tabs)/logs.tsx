import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, RefreshControl, View, SafeAreaView } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';
import { getLogs, clearLogs, type LogEntry } from '../utils/storage';
import { format } from 'date-fns';

export default function LogsScreen() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    const savedLogs = await getLogs();
    setLogs(savedLogs);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadLogs();
    setRefreshing(false);
  };

  const handleClearLogs = async () => {
    await clearLogs();
    setLogs([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Access Logs</Text>
          <IconButton
            icon="delete"
            size={24}
            onPress={handleClearLogs}
            accessibilityLabel="Clear logs"
          />
        </View>
        <ScrollView
          style={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {logs.length === 0 ? (
            <Text style={styles.emptyText}>No logs yet</Text>
          ) : (
            logs.map((log) => (
              <Card key={log.id} style={styles.logCard}>
                <Card.Content>
                  <Text style={styles.timestamp}>
                    {format(new Date(log.timestamp), 'MMM d, yyyy h:mm a')}
                  </Text>
                  <Text style={styles.logText}>
                    {log.permissionType} access requested by {log.appName}
                  </Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color:
                          log.action === 'allow'
                            ? '#34C759'
                            : log.action === 'block'
                            ? '#FF3B30'
                            : '#FF9500',
                      },
                    ]}
                  >
                    Status: {log.action.charAt(0).toUpperCase() + log.action.slice(1)}
                  </Text>
                  {log.details && <Text style={styles.details}>{log.details}</Text>}
                </Card.Content>
              </Card>
            ))
          )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#666',
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
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
}); 