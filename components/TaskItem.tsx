import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

type TaskItemProps = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  toggleComplete: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleComplete, deleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => toggleComplete(task.id)}>
        <Text style={[styles.taskTitle, task.completed && styles.completed]}>{task.title}</Text>
      </TouchableOpacity>
      <Button title="x" onPress={() => deleteTask(task.id)} />
    </View>
  );
};

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