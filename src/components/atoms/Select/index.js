import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>City</Text>
      <View style={styles.placeholder}>
        <Picker style={styles.placeholder}>
          <Picker.Item label="Bangkalan" value="bangkalam" />
          <Picker.Item label="Surabaya" value="surabaya" />
          <Picker.Item label="Bandung" value="bandung" />
          <Picker.Item label="Jakarta" value="jakarta" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  placeholder: {
    color: '#8D92A3',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#020202',
    padding: 11,
  },
});
