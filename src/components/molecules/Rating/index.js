import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconStarOff, IconStarOn} from '../../../assets';

const Raring = () => {
  return (
    <View style={styles.ratingAll}>
      <View style={styles.starRating}>
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOn />
        <IconStarOff />
      </View>
      <Text>4.0</Text>
    </View>
  );
};

export default Raring;

const styles = StyleSheet.create({
  ratingAll: {flexDirection: 'row'},
  starRating: {flexDirection: 'row'},
});
