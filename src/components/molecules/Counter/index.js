import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconMin, IconPlus} from '../../../assets';

const Counter = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity>
        <IconMin />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
          color: '#020202',
          marginHorizontal: 25,
        }}>
        1
      </Text>
      <TouchableOpacity>
        <IconPlus />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
