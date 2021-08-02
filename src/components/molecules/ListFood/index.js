import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rating} from '..';
import {FoodDummy} from '../../../assets';

const ListFood = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
      }}>
      <Image
        source={FoodDummy}
        style={{
          marginRight: 12,
          width: 60,
          height: 60,
          borderRadius: 8,
          overflow: 'hidden',
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 16,
            color: '#020202',
          }}>
          Soup Ala Ala
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: '#8D92A3',
          }}>
          Rp. 1.000.000
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ListFood;

const styles = StyleSheet.create({});
