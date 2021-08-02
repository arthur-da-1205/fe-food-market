import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

const FoodCard = ({image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.foodContainer}>
        <Image source={image} style={styles.imageContainer} />
        <View style={styles.textContainer}>
          <Text style={styles.foodName}>Cherry Healthy</Text>
          <Rating />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodContainer: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  imageContainer: {height: 140, width: 200},
  textContainer: {padding: 12},
  foodName: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
