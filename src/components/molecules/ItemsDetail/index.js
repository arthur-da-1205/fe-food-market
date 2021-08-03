import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ItemsDetail = ({label, value, valueColor = '#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemsDetail;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  textLabel: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  textValue: color => ({
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: color,
  }),
});
