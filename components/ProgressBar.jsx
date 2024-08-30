// src/components/ProgressBar.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProgressBar({ level, completedTasks }) {
  const progress = (completedTasks % 10) * 10;
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.levelInfo}>Level: {level}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    marginVertical: 20,
    width: '100%',
  },
  levelInfo: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: 'white',
    transition: 'width 0.3s',
  },
});

export default ProgressBar;