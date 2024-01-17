import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      <Text style={{ color: darkMode ? '#fff' : '#000' }}>Hola mundo, por parte del sm54</Text>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: darkMode ? (isPressed ? '#333' : '#555') : isPressed ? '#ccc' : '#ddd',
            borderColor: darkMode ? '#fff' : '#000',
          },
        ]}
        onPress={toggleDarkMode}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>
          Cambiar a {darkMode ? 'Modo Aleman' : 'Modo Dano'}
        </Text>
      </TouchableOpacity>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
