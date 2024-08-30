// src/components/AddTaskModal.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';

function AddTaskModal({ addTask, closeModal }) {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() === '') return;
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    addTask(newTask);
    setTitle('');
    closeModal();
  };

  return (
    <View style={styles.modal}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={{ fontSize: 18 }}>×</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.taskInput}
          placeholder="Write your new task"
          value={title}
          onChangeText={setTitle}
        />
        <Button title="Add task" onPress={handleAddTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '80%',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  taskInput: {
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default AddTaskModal;