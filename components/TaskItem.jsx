// src/components/TaskItem.js

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleComplete(task.id)}>
        <Text style={[styles.taskTitle, task.completed && styles.completed]}>{task.title}</Text>
      </TouchableOpacity>
      <Button title="x" onPress={() => deleteTask(task.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    width: '100%',
  },
  taskTitle: {
    fontSize: 18,
    color: 'white',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskItem;