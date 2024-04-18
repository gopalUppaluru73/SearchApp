import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Result({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default Result;
