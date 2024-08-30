// src/App.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal, SafeAreaView } from 'react-native';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [level, setLevel] = useState<number>(1);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = JSON.parse(await AsyncStorage.getItem('tasks') || '[]') as Task[];
      const savedLevel = parseInt(await AsyncStorage.getItem('level') || '1');
      const savedCompletedTasks = parseInt(await AsyncStorage.getItem('completedTasks') || '0');

      setTasks(savedTasks);
      setLevel(savedLevel);
      setCompletedTasks(savedCompletedTasks);
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      await AsyncStorage.setItem('level', level.toString());
      await AsyncStorage.setItem('completedTasks', completedTasks.toString());
    };

    saveData();
  }, [tasks, level, completedTasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowModal(false);
  };

  const toggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          incrementProgress();
        } else {
          decrementProgress();
        }
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const incrementProgress = () => {
    const newCompletedTasks = completedTasks + 1;
    setCompletedTasks(newCompletedTasks);
    if (newCompletedTasks % 10 === 0) {
      setLevel(level + 1);
    }
  };

  const decrementProgress = () => {
    const newCompletedTasks = completedTasks - 1;
    setCompletedTasks(newCompletedTasks);
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.app}>
      <Text style={styles.title}>Minima-list</Text>
      <ProgressBar level={level} completedTasks={completedTasks} />
      <View style={styles.taskHeader}>
        <Text style={styles.subtitle}>To do</Text>
        <Button title="+" onPress={() => setShowModal(true)} />
        <Modal visible={showModal} transparent={true} animationType="slide">
          <AddTaskModal addTask={addTask} closeModal={() => setShowModal(false)} />
        </Modal>
      </View>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;