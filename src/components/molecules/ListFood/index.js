import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';

/*
  Type
  1. Product -> in Homepage Screen: product
  2. Order Summary: order-summary
  3. In Progress -> Order History Screen: in-progress
  4. Past Orders -> Order History Screen: past-orders
 */

const ListFood = ({
  foodName,
  image,
  onPress,
  items,
  rating,
  price,
  date,
  status,
  type,
}) => {
  const renderTabontent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>{foodName}</Text>
              <Text style={styles.foodDesc}>IDR. {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>foodName</Text>
              <Text style={styles.foodDesc}>IDR. {price}</Text>
            </View>
            <Text>{items} items</Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>foodName</Text>
              <Text style={styles.foodDesc}>
                {items} items . IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>foodName</Text>
              <Text style={styles.foodDesc}>
                {items} items . IDR.{price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );

      default:
        return (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.foodName}>foodName</Text>
              <Text style={styles.foodDesc}>IDR. {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.pageContainer}>
        <Image source={image} style={styles.imageContainer} />
        {renderTabontent()}
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
  items: {fontSize: 13, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  date: {fontSize: 10, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  status: {fontSize: 10, fontFamily: 'Poppins-Light', color: '#D9435E'},
});
