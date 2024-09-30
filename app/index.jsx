import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Index() {
  const [formData, setFormData] = useState({
     date: "", 
     jobincome: "", 
     sidehustleincome: "", 
     stockincome: "", 
     other: "", 
     totalincome: ""
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={formData.date}
        onChangeText={(text) => handleChange('date', text)}
        placeholder="Enter Date Please"
      />

      <Text style={styles.label}>Job Income</Text>
      <TextInput
        style={styles.input}
        value={formData.jobincome}
        onChangeText={(text) => handleChange('jobincome', text)}
        placeholder=""
      />
      <Text style={styles.label}>Side Hustle Income</Text>
      <TextInput
        style={styles.input}
        value={formData.sidehustleincome}
        onChangeText={(text) => handleChange('sidehustleincome', text)}
        placeholder=""
      />

      <Text style={styles.label}>Stock Income</Text>
      <TextInput
        style={styles.input}
        value={formData.stockincome}
        onChangeText={(text) => handleChange('stockincome', text)}
        placeholder=""
      />

<Text style={styles.label}>Other</Text>
      <TextInput
        style={styles.input}
        value={formData.other}
        onChangeText={(text) => handleChange('other', text)}
        placeholder=""
      />
      <Text style={styles.label}>Total Income</Text>
      <TextInput
        style={styles.input}
        value={formData.totalincome}
        onChangeText={(text) => handleChange('totalincome', text)}
        placeholder=""
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});