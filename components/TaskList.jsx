// src/components/TaskList.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <View style={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskList: {
    width: '100%',
    alignItems: 'flex-start',
  },
});

export default TaskList;