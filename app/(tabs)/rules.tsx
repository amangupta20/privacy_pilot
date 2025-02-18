import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text, FAB } from 'react-native-paper';

export default function RulesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Privacy Rules</Text>
        {/* Rule list will go here */}
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          // TODO: Implement add rule functionality
          console.log('Add new rule');
        }}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
}); 