import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '..';

import {FoodDummy, IconStarOff, IconStarOn} from '../../../assets';

const FoodCard = ({image}) => {
  return (
    <View style={styles.foodContainer}>
      <Image source={FoodDummy} />
      <View style={{padding: 12}}>
        <Text style={styles.foodName}>Cherry Healthy</Text>
        <Rating />
      </View>
    </View>
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
  foodName: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
