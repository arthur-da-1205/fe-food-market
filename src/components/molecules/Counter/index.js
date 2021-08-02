import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconMin, IconPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IconMin />
      </TouchableOpacity>
      <Text style={styles.qtyLabel}>1</Text>
      <TouchableOpacity>
        <IconPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  qtyLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginHorizontal: 25,
  },
});
