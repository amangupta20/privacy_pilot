import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text, FAB } from 'react-native-paper';

export default function RulesScreen() {
  return (
    <Surface style={styles.container}>
      <Text style={styles.title}>Privacy Rules</Text>
      {/* Rule list will go here */}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          // TODO: Implement add rule functionality
          console.log('Add new rule');
        }}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}); 