import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function Lookup({ onSearch }) {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search term"
        value={term}
        onChangeText={setTerm}
      />
      <Button title="Search" onPress={() => onSearch(term)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Lookup;
