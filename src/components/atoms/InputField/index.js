import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputField = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.placeholder} />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  placeholder: {
    color: '#8D92A3',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#020202',
    padding: 10,
  },
});
