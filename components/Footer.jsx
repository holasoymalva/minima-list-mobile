// src/components/Footer.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Footer Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#1a1a1a',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontFamily: 'GFS Didot, serif',
  },
});

export default Footer;