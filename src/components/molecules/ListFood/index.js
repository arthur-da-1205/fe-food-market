import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

const ListFood = ({image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.pageContainer}>
        <Image source={image} style={styles.imageContainer} />
        <View style={styles.textContainer}>
          <Text style={styles.foodName}>Soup Ala Ala</Text>
          <Text style={styles.foodDesc}>Rp. 1.000.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  imageContainer: {
    marginRight: 12,
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {flex: 1},
  foodName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  foodDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
});
