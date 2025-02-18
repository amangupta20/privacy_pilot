import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Privacy Pilot</Text>
        <Text style={styles.description}>
          Your personal privacy guardian that helps you control how apps access your data.
        </Text>
        <Text style={styles.instructions}>
          Use the tabs below to:
        </Text>
        <Text style={styles.bullet}>• Set up privacy rules</Text>
        <Text style={styles.bullet}>• Monitor access logs</Text>
        <Text style={styles.bullet}>• Configure settings</Text>
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
  description: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 24,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 4,
  },
}); 