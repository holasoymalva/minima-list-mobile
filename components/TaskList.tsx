import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  toggleComplete: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <View style={styles.taskList}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  taskList: {
    width: '100%',
    alignItems: 'flex-start',
  },
});

export default TaskList;