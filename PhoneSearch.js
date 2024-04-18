import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import useAPIResponse from './CustomHooks/useAPIresponse';

function PhoneSearch() {
  const [phone, setPhone] = useState('');
  const [data, fetchData] = useAPIResponse();

  const handleSearch = () => {
    fetchData({
      url: '/businesses/search/phone',
      params: { phone: `+1${phone}` }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Search" onPress={handleSearch} />
      <Text style={styles.result}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default PhoneSearch;
