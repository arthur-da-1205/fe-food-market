import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconRight} from '../../../assets';

const ListMenu = ({label}) => {
  return (
    <TouchableOpacity>
      <View style={styles.pageContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <IconRight style={styles.iconArrow} />
      </View>
    </TouchableOpacity>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 16,
  },
  labelText: {fontSize: 14, fontFamily: 'Poppins-Regular', color: '#020202'},
  iconArrow: {color: '#8D92A3'},
});
